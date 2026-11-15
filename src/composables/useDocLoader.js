import { ref } from 'vue'
import { marked } from 'marked'

// 远程 Markdown 文档加载：jsDelivr CDN → raw 依次尝试（8s 超时）、5s 慢网提示、失败兜底
// 逻辑原样迁移自原 modal.js（marked 改为 npm 打包引入，不再有「marked 缺失」分支）
const TIMEOUT_MS = 8000
const SLOW_MS = 5000

function fetchText(url) {
  return new Promise(function (resolve, reject) {
    var timer = setTimeout(function () {
      reject(new Error('timeout'))
    }, TIMEOUT_MS)
    fetch(url).then(
      function (res) {
        clearTimeout(timer)
        if (!res.ok) {
          reject(new Error('HTTP ' + res.status))
          return
        }
        res.text().then(resolve, reject)
      },
      function (err) {
        clearTimeout(timer)
        reject(err)
      }
    )
  })
}

function resolveAssetUrl(href, doc, flavor) {
  if (!href) return href
  if (/^(?:[a-z][a-z0-9+.\-]*:|\/\/|#)/i.test(href)) return href

  var repo = doc.repo
  if (!repo) return href

  function repoRoot(f) {
    if (f === 'raw') return 'https://raw.githubusercontent.com/' + repo.owner + '/' + repo.name + '/' + repo.branch + '/'
    if (f === 'blob') return 'https://github.com/' + repo.owner + '/' + repo.name + '/blob/' + repo.branch + '/'
    return 'https://cdn.jsdelivr.net/gh/' + repo.owner + '/' + repo.name + '@' + repo.branch + '/'
  }
  var dir = (doc.dir || '').replace(/^\/+|\/+$/g, '')
  function fileBase(f) {
    return repoRoot(f) + (dir ? dir + '/' : '')
  }

  var isRepoRoot = href.charAt(0) === '/'
  var rel = isRepoRoot ? href.slice(1) : href
  var base = isRepoRoot ? repoRoot(flavor) : fileBase(flavor)
  if (!base) return href
  try {
    return new URL(rel, base).href
  } catch (e) {
    return href
  }
}

function processDocHtml(rawHtml, doc) {
  if (typeof DOMParser === 'undefined') return rawHtml
  var d = new DOMParser().parseFromString(rawHtml, 'text/html')

  d.querySelectorAll('img').forEach(function (img) {
    var src = img.getAttribute('src')
    if (!src) return
    var cdn = resolveAssetUrl(src, doc, 'cdn')
    var raw = resolveAssetUrl(src, doc, 'raw')
    if (cdn) img.setAttribute('src', cdn)
    if (raw && raw !== cdn) img.setAttribute('data-raw', raw)
    if (!img.getAttribute('loading')) img.setAttribute('loading', 'lazy')
  })

  d.querySelectorAll('a').forEach(function (a) {
    var href = a.getAttribute('href')
    if (!href) return
    var url = resolveAssetUrl(href, doc, 'blob')
    if (url) a.setAttribute('href', url)
    if (/^https?:\/\//i.test(url || '')) {
      a.setAttribute('target', '_blank')
      a.setAttribute('rel', 'noopener')
    }
  })

  return d.body.innerHTML
}

export function useDocLoader() {
  const status = ref('idle') // idle | loading | slow | ready | fallback
  const html = ref('')
  const currentDoc = ref(null)

  // 竞态防护：快速切换文档时，旧请求 / 旧计时器不得影响新加载
  let loadSeq = 0
  let slowTimerId = null

  function loadDoc(doc) {
    const seq = ++loadSeq
    clearTimeout(slowTimerId)

    currentDoc.value = doc
    status.value = 'loading'
    html.value = ''

    slowTimerId = setTimeout(function () {
      if (seq === loadSeq && status.value === 'loading') status.value = 'slow'
    }, SLOW_MS)

    var candidates = [doc.cdn, doc.raw].filter(Boolean)
    var idx = 0

    function tryNext() {
      if (seq !== loadSeq) return
      if (idx >= candidates.length) {
        clearTimeout(slowTimerId)
        status.value = 'fallback'
        return
      }
      var url = candidates[idx++]
      fetchText(url).then(
        function (text) {
          if (seq !== loadSeq) return
          clearTimeout(slowTimerId)
          html.value = processDocHtml(marked.parse(text), doc)
          status.value = 'ready'
        },
        function () {
          tryNext()
        }
      )
    }

    tryNext()
  }

  function retry() {
    if (currentDoc.value) loadDoc(currentDoc.value)
  }

  return { status, html, currentDoc, loadDoc, retry }
}
