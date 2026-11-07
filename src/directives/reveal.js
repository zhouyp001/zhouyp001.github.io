/* ============================================================
   v-reveal：滚动进入视口时给元素加 .on 触发淡入
   - 检查点提前：rootMargin 向下扩展 300px + threshold 0
   - 首屏元素：mounted 时立即判断，直接显示，不等 IO 回调
   ============================================================ */

const TRIGGER_MARGIN = 300 // px，元素距视口底部还有这么多时就触发

let observer = null

function getObserver() {
  if (observer) return observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('on')
          observer.unobserve(en.target)
        }
      })
    },
    {
      // 观察区向下扩展，元素在视口下方 300px 内即触发
      rootMargin: `0px 0px ${TRIGGER_MARGIN}px 0px`,
      // 只要有一点点进入扩展后的观察区就触发，不要求 8%
      threshold: 0,
    }
  )
  return observer
}

function isNearViewport(el, margin = 0) {
  const rect = el.getBoundingClientRect()
  const vh = window.innerHeight || document.documentElement.clientHeight
  return rect.top <= vh + margin && rect.bottom >= -margin
}

export default {
  mounted(el) {
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('on')
      return
    }
    // 首屏 / 视口下方 300px 内的元素：立即显示，避免初始空白
    if (isNearViewport(el, TRIGGER_MARGIN)) {
      el.classList.add('on')
      return
    }
    getObserver().observe(el)
  },
  unmounted(el) {
    if (observer) observer.unobserve(el)
  },
}