<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { mobileMenus } from '../data/nav'

const route = useRoute()
const items = computed(() => mobileMenus[route.path] || mobileMenus['/'])

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

/* 与原 site.js 行为一致：点空白、Esc、窗口 >640px、点链接、路由变化均收起 */
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
    <RouterLink v-for="item in items" :key="item.label" :to="item.to" @click="closeMenu">{{ item.label }}</RouterLink>
  </div>
</template>
