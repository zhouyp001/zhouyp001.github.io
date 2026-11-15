<script setup>
import { ref } from 'vue'
import ThemeToggle from './ThemeToggle.vue'
import MobileMenu from './MobileMenu.vue'
import Icon from './Icon.vue'
import { navRoutes } from '../data/nav'

defineProps({
  pageHero: { type: Boolean, default: false },
})

const menu = ref(null)
function onBurgerClick(e) {
  e.stopPropagation()
  if (menu.value) menu.value.toggleMenu()
}
</script>

<template>
  <header class="hero" :class="{ 'page-hero': pageHero }" id="home">
    <nav class="nav wrap">
      <RouterLink class="brand" to="/">
        <span class="brand-mark"><Icon name="hex" /></span><span>ZHOUYP</span>
      </RouterLink>
      <div class="navlinks">
        <RouterLink v-for="r in navRoutes" :key="r.to.path" :to="r.to">{{ r.label }}</RouterLink>
      </div>
      <div class="nav-actions">
        <ThemeToggle class="nav-theme" />
        <button
          class="circle nav-burger"
          id="navBurger"
          type="button"
          aria-label="打开导航菜单"
          aria-controls="mobileMenu"
          aria-expanded="false"
          @click="onBurgerClick"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
      <MobileMenu ref="menu" />
    </nav>

    <div class="hero-copy wrap">
      <slot name="hero" />
    </div>
  </header>
</template>