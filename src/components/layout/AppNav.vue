<script setup>
import { navLinks, orgLinks } from '@/data/site'
import { useNavStore } from '@/stores/nav'
import GitHubIcon from '@/components/icons/GitHubIcon.vue'

const nav = useNavStore()
</script>

<template>
  <header class="nav">
    <div class="nav-inner">
      <RouterLink to="/" class="brand">ZHOUYP</RouterLink>

      <div class="nav-menu" :class="{ 'is-open': nav.open }">
        <nav class="nav-links" aria-label="主导航">
          <RouterLink v-for="l in navLinks" :key="l.to" :to="l.to">{{ l.label }}</RouterLink>
        </nav>
        <div class="nav-orgs">
          <a v-for="o in orgLinks" :key="o.href" :href="o.href" target="_blank" rel="noopener">
            <GitHubIcon v-if="o.icon === 'github'" :size="13" />
            {{ o.label }} <span class="ext">↗</span>
          </a>
        </div>
      </div>

      <button
        class="nav-burger"
        :class="{ open: nav.open }"
        :aria-expanded="nav.open"
        :aria-label="nav.open ? '关闭菜单' : '打开菜单'"
        @click="nav.toggle()"
      >
        <i></i><i></i><i></i>
      </button>
    </div>
  </header>
</template>