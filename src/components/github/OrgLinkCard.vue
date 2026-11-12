<script setup>
defineProps({ item: Object })
</script>

<template>
  <a class="org-link" :href="item.href" target="_blank" rel="noopener" :style="{ '--bar': item.color }">
    <div class="org-name">{{ item.name }}</div>
    <div class="org-desc">{{ item.desc }}</div>
    <div class="org-meta">{{ item.meta }}</div>
  </a>
</template>
