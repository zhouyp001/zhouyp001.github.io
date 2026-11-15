import { ref } from 'vue'

// 主题状态：<html data-theme="dark"> 为唯一事实源（CSS 令牌依赖它）
// 首帧前应用由 index.html 内联脚本负责（原 theme-init.js）；此处负责切换与同步
const LIGHT_COLOR = '#eaf2ff'
const DARK_COLOR = '#0b1422'

const root = document.documentElement
const isDark = ref(root.getAttribute('data-theme') === 'dark')

function syncMeta() {
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', isDark.value ? DARK_COLOR : LIGHT_COLOR)
}

function toggleTheme() {
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
