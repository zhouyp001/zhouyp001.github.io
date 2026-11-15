<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { navRoutes } from '../data/nav'
import { useTheme } from '../composables/useTheme'

const route = useRoute()

/* 主题切换：与顶栏 ThemeToggle 共用同一份模块级状态 */
const { isDark, toggleTheme } = useTheme()
const themeLabel = computed(() => (isDark.value ? '切换到日间模式' : '切换到夜间模式'))

const menuEl = ref(null)
const open = ref(false)

function openMenu() {
  open.value = true
}
function closeMenu() {
  open.value = false
}
function toggleMenu() {
  open.value ? closeMenu() : openMenu()
}

function syncAria() {
  const burger = document.getElementById('navBurger')
  if (!burger) return
  burger.setAttribute('aria-expanded', String(open.value))
  burger.setAttribute('aria-label', open.value ? '关闭导航菜单' : '打开导航菜单')
}

watch(open, syncAria)

/* 切换主题后保持菜单展开、焦点留在按钮上，方便连续切换预览 */
function onThemeClick() {
  toggleTheme()
}

/* 点空白、Esc、窗口 >640px、点链接、路由变化均收起 */
function onDocClick(e) {
  if (menuEl.value && !menuEl.value.contains(e.target) && !(e.target && e.target.id === 'navBurger')) {
    closeMenu()
  }
}
function onKeydown(e) {
  if (e.key === 'Escape' || e.keyCode === 27) closeMenu()
}
let raf = 0
function onResize() {
  cancelAnimationFrame(raf)
  raf = requestAnimationFrame(function () {
    if (window.innerWidth > 640) closeMenu()
  })
}

onMounted(() => {
  syncAria()
  document.addEventListener('click', onDocClick)
  document.addEventListener('keydown', onKeydown)
  window.addEventListener('resize', onResize)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick)
  document.removeEventListener('keydown', onKeydown)
  window.removeEventListener('resize', onResize)
  cancelAnimationFrame(raf)
})

watch(
  () => route.fullPath,
  () => closeMenu()
)

defineExpose({ toggleMenu, closeMenu })
</script>

<template>
  <div ref="menuEl" class="mobile-menu" id="mobileMenu" :class="{ 'is-open': open }">
    <RouterLink v-for="item in navRoutes" :key="item.to.path" :to="item.to" @click="closeMenu">{{ item.label }}</RouterLink>

    <button
      class="mobile-theme"
      type="button"
      :aria-pressed="String(isDark)"
      :aria-label="themeLabel"
      @click="onThemeClick"
    >
      <span>{{ themeLabel }}</span>
      <span class="mobile-theme-icon" aria-hidden="true"></span>
    </button>
  </div>
</template>