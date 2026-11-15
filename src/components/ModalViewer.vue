<script setup>
import { ref, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { modalOpen, modalItem, closeModal } from '../composables/useModal'
import { useDocLoader } from '../composables/useDocLoader'
import { bilibiliEmbed } from '../data/modal'

// 解构顶层 ref：模板中自动解包（注意：不可再整体包进对象后直接用于 v-html）
const { status, html, currentDoc, loadDoc, retry } = useDocLoader()
const closeBtn = ref(null)
const docRoot = ref(null)

/* 打开时：加载文档内容并聚焦关闭按钮 */
watch(modalOpen, async (open) => {
  if (!open) {
    status.value = 'idle'
    html.value = ''
    currentDoc.value = null
    return
  }
  if (modalItem.value && modalItem.value.type === 'doc') {
    loadDoc(modalItem.value.doc)
  }
  await nextTick()
  if (closeBtn.value) closeBtn.value.focus()
})

/* 文档图片失败回退：先切 raw，再失败标记破损（原 onImgError） */
function onImgError(e) {
  var img = e.target
  if (!(img instanceof HTMLImageElement)) return
  var raw = img.dataset.raw
  if (raw && img.src !== raw) {
    img.src = raw
    img.removeAttribute('data-raw')
    return
  }
  img.classList.add('img-broken')
}

watch(html, async (h) => {
  if (!h) return
  await nextTick()
  const root = docRoot.value
  if (!root) return
  // 标记挂在容器元素上：v-if 分支重建容器时自动重新绑定
  if (!root.dataset.errBound) {
    root.addEventListener('error', onImgError, true)
    root.dataset.errBound = '1'
  }
  root.querySelectorAll('img[data-raw]').forEach(function (img) {
    if (img.complete && img.naturalWidth === 0) onImgError({ target: img })
  })
})

function onKeydown(e) {
  if (e.key === 'Escape') closeModal()
}
onMounted(() => document.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => document.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div class="modal" id="modal" :class="{ open: modalOpen }" :aria-hidden="String(!modalOpen)" role="dialog" aria-modal="true">
    <div class="modal-backdrop" @click="closeModal()"></div>
    <div class="modal-content">
      <div class="modal-head">
        <div class="modal-title" id="modal-title">{{ modalItem ? modalItem.title : '' }}</div>
        <button ref="closeBtn" class="modal-close" aria-label="关闭" @click="closeModal()">×</button>
      </div>
      <div class="modal-body" id="modal-body">
        <template v-if="modalItem">
          <div v-if="modalItem.type === 'video'" class="video">
            <iframe :src="bilibiliEmbed(modalItem.bvid)" allow="autoplay; fullscreen" allowfullscreen frameborder="0" loading="lazy"></iframe>
          </div>

          <template v-else-if="modalItem.type === 'image'">
            <div class="img-wrap"><img :src="modalItem.image.src" :alt="modalItem.image.alt"></div>
            <div class="caption">{{ modalItem.image.caption }}</div>
          </template>

          <div v-else-if="modalItem.type === 'doc'" class="doc-viewer" ref="docRoot">
            <div v-if="status === 'loading' || status === 'slow'" class="doc-status">
              <div class="doc-spinner" aria-hidden="true"></div>
              <p class="doc-status-text">{{ status === 'slow' ? modalItem.doc.slowHint || '当前网络可能较慢，正在尝试备用镜像…' : '正在加载文档…' }}</p>
            </div>
            <div v-else-if="status === 'fallback'" class="doc-fallback">
              <div class="placeholder-icon">Z</div>
              <h5>暂时无法加载演示内容</h5>
              <p>可能是当前网络无法访问 GitHub 资源。你仍然可以通过下方链接直接打开原文。</p>
              <div class="doc-fallback-actions">
                <a class="btn-outline" :href="modalItem.doc.fallbackHref" target="_blank" rel="noopener">{{ modalItem.doc.fallbackText }}</a>
                <button class="btn-outline" type="button" @click="retry()">重试</button>
              </div>
            </div>
            <article v-else-if="status === 'ready'" class="doc-markdown" v-html="html"></article>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
