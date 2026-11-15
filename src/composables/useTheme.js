import { ref } from 'vue'

const LIGHT_COLOR = '#eaf2ff'
const DARK_COLOR = '#0b1422'

// 只在浏览器环境读取真实根元素；SSG 预渲染阶段为 null
const root = typeof document !== 'undefined' ? document.documentElement : null
const isDark = ref(!!root && root.getAttribute('data-theme') === 'dark')

function syncMeta() {
  if (typeof document === 'undefined') return
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', isDark.value ? DARK_COLOR : LIGHT_COLOR)
}

function toggleTheme() {
  if (!root) return // 服务端不会触发，纯兜底
  isDark.value = !isDark.value
  if (isDark.value) {
    root.setAttribute('data-theme', 'dark')
  } else {
    root.removeAttribute('data-theme')
  }
  try {
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  } catch (e) {
    /* localStorage 不可用时静默降级 */
  }
  syncMeta()
}

export function useTheme() {
  return { isDark, toggleTheme }
}