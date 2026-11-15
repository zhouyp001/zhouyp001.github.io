<script setup>
import Icon from './Icon.vue'
import { navRoutes } from '../data/nav'
</script>

<template>
  <footer>
    <div class="wrap">
      <div class="footer-top">
        <RouterLink class="brand" to="/">
          <span class="brand-mark"><Icon name="hex" /></span><span>ZHOUYP</span>
        </RouterLink>
        <div class="footer-nav">
          <RouterLink v-for="r in navRoutes" :key="r.to.path" :to="r.to">{{ r.label }}</RouterLink>
        </div>
      </div>
      <div class="copyright">© 2026 ZHOUYP · 持续探索与实践的技术记录 · ke_yi_zhou@163.com</div>
    </div>
  </footer>
</template>
