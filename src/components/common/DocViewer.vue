<script setup>
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { marked } from 'marked'

const props = defineProps({
  doc: { type: Object, required: true },
})

const state = ref('loading')   // loading | slow | success | error
const html = ref('')
const rootEl = ref(null)
const slowTimer = ref(null)
let controller = null

const TIMEOUT = 8000
const SLOW_DELAY = 5000

/* ================= URL 解析 ================= */

function repoRoot(flavor) {
  const repo = props.doc.repo
  if (!repo) return ''
  const { owner, name, branch } = repo
  if (flavor === 'raw') return `https://raw.githubusercontent.com/${owner}/${name}/${branch}/`
  if (flavor === 'blob') return `https://github.com/${owner}/${name}/blob/${branch}/`
  return `https://cdn.jsdelivr.net/gh/${owner}/${name}@${branch}/`
}

function fileBase(flavor) {
  const dir = (props.doc.dir || '').replace(/^\/+|\/+$/g, '')
  return repoRoot(flavor) + (dir ? dir + '/' : '')
}

/**
 * 把 Markdown / HTML 里的相对路径解析成绝对地址。
 * @param {string} href 原始 href
 * @param {'cdn'|'raw'|'blob'} flavor cdn 图片主链路 / raw 图片兜底 / blob 链接跳转
 */
function resolveAssetUrl(href, flavor) {
  if (!href) return href
  // 已经是绝对 URL / 协议相对 / 锚点 / mailto / data: 等，原样返回
  if (/^(?:[a-z][a-z0-9+.\-]*:|\/\/|#)/i.test(href)) return href

  const isRepoRoot = href.startsWith('/')
  const rel = isRepoRoot ? href.slice(1) : href
  const base = isRepoRoot ? repoRoot(flavor) : fileBase(flavor)
  if (!base) return href

  try {
    // new URL 会自动处理 ./、../、中文编码，无需手写路径解析
    return new URL(rel, base).href
  } catch {
    return href
  }
}

/* ================= HTML 后处理 ================= */

function processHtml(rawHtml) {
  if (typeof window === 'undefined' || typeof DOMParser === 'undefined') return rawHtml
  const doc = new DOMParser().parseFromString(rawHtml, 'text/html')

  // 图片：主链路 jsDelivr，附带 data-raw 供失败回退
  doc.querySelectorAll('img').forEach((img) => {
    const src = img.getAttribute('src')
    if (!src) return
    const cdnSrc = resolveAssetUrl(src, 'cdn')
    const rawSrc = resolveAssetUrl(src, 'raw')
    if (cdnSrc) img.setAttribute('src', cdnSrc)
    if (rawSrc && rawSrc !== cdnSrc) img.setAttribute('data-raw', rawSrc)
    if (!img.getAttribute('loading')) img.setAttribute('loading', 'lazy')
  })

  // 链接：指向 GitHub blob，外链新窗口
  doc.querySelectorAll('a').forEach((a) => {
    const href = a.getAttribute('href')
    if (!href) return
    const url = resolveAssetUrl(href, 'blob')
    if (url) a.setAttribute('href', url)
    if (/^https?:\/\//i.test(url || '')) {
      a.setAttribute('target', '_blank')
      a.setAttribute('rel', 'noopener')
    }
  })

  return doc.body.innerHTML
}

/* ================= 图片兜底 ================= */

function onImgError(e) {
  const img = e.target
  if (!(img instanceof HTMLImageElement)) return
  const raw = img.dataset.raw
  if (raw && img.src !== raw) {
    img.src = raw
    img.removeAttribute('data-raw')
    return
  }
  img.classList.add('img-broken')
}

function sweepBrokenImages() {
  if (!rootEl.value) return
  rootEl.value.querySelectorAll('img[data-raw]').forEach((img) => {
    // 在监听器绑定之前就已经失败的图片
    if (img.complete && img.naturalWidth === 0) {
      onImgError({ target: img })
    }
  })
}

/* ================= 加载流程 ================= */

function clearSlowTimer() {
  if (slowTimer.value) { clearTimeout(slowTimer.value); slowTimer.value = null }
}

function abortCurrent() {
  if (controller) { controller.abort(); controller = null }
}

async function fetchWithTimeout(url) {
  controller = new AbortController()
  const tid = setTimeout(() => controller.abort(), TIMEOUT)
  try {
    const res = await fetch(url, { signal: controller.signal })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return await res.text()
  } finally {
    clearTimeout(tid)
    controller = null
  }
}

async function load() {
  if (typeof window === 'undefined') return
  state.value = 'loading'
  html.value = ''
  clearSlowTimer()
  abortCurrent()

  slowTimer.value = setTimeout(() => {
    if (state.value === 'loading') state.value = 'slow'
  }, SLOW_DELAY)

  const candidates = [props.doc.cdn, props.doc.raw].filter(Boolean)

  for (const url of candidates) {
    try {
      const text = await fetchWithTimeout(url)
      const rendered = marked.parse(text)
      html.value = processHtml(rendered)
      state.value = 'success'
      clearSlowTimer()
      return
    } catch (e) {
      // 当前链路失败，继续下一条
    }
  }

  clearSlowTimer()
  state.value = 'error'
}

function retry() { load() }

/* ================= 生命周期 ================= */

watch(() => props.doc, (v) => { if (v) load() }, { immediate: true })

watch(html, () => {
  nextTick(sweepBrokenImages)
}, { flush: 'post' })

onMounted(() => {
  // error 不冒泡，用 capture 在容器上拦截所有子图片的加载失败
  rootEl.value?.addEventListener('error', onImgError, true)
  nextTick(sweepBrokenImages)
})

onUnmounted(() => {
  clearSlowTimer()
  abortCurrent()
  rootEl.value?.removeEventListener('error', onImgError, true)
})
</script>

<template>
  <div ref="rootEl" class="doc-viewer">
    <div v-if="state === 'loading' || state === 'slow'" class="doc-status">
      <div class="doc-spinner" aria-hidden="true"></div>
      <p class="doc-status-text">
        {{ state === 'slow' ? doc.slowHint : '正在加载文档…' }}
      </p>
    </div>

    <article v-else-if="state === 'success'" class="doc-markdown" v-html="html"></article>

    <div v-else class="doc-fallback">
      <div class="placeholder-icon">Z</div>
      <h5>暂时无法加载演示内容</h5>
      <p>可能是当前网络无法访问 GitHub 资源。你仍然可以通过下方链接直接打开原文。</p>
      <div class="doc-fallback-actions">
        <a class="btn-outline" :href="doc.fallbackHref" target="_blank" rel="noopener">
          {{ doc.fallbackText }}
        </a>
        <button class="btn-outline" @click="retry">重试</button>
      </div>
    </div>
  </div>
</template>
