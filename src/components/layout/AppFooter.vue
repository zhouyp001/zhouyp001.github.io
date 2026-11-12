<script setup>
import { footerLinks } from '@/data/site'

defineProps({
  subtitle: String,
  note: String,
  rightLabel: String,
  rightHref: String,
  rightText: String,
  extra: Object,
  bottomLeft: String,
})
</script>

<template>
  <footer class="foot">
    <div class="wrap">
      <div>
        <b>ZHOUYP</b>
        {{ subtitle }}
        <div class="foot-note">{{ note }}</div>
      </div>
      <div>
        {{ rightLabel }}：<a :href="rightHref" target="_blank" rel="noopener">{{ rightText }}</a>
        <template v-if="extra">
          <br>{{ extra.label }}：<a :href="extra.href" target="_blank" rel="noopener">{{ extra.text }}</a>
        </template>
        <div class="foot-links">
          <template v-for="l in footerLinks" :key="l.label">
            <RouterLink v-if="l.to" :to="l.to">{{ l.label }}</RouterLink>
            <a v-else :href="l.href" target="_blank" rel="noopener">{{ l.label }}</a>
          </template>
        </div>
      </div>
    </div>
    <div class="wrap">
      <div class="foot-bottom">
        <span>{{ bottomLeft }}</span>
        <span>技术画像的一部分，而非全部</span>
        <a class="foot-email" href="mailto:ke_yi_zhou@163.com">ke_yi_zhou@163.com</a>
      </div>
    </div>
  </footer>
</template>
