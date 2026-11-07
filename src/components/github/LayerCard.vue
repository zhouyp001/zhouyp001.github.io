<script setup>
defineProps({ item: Object })
</script>

<template>
  <div class="layer" :style="{ '--bar': item.color }">
    <div class="layer-head">
      <span class="layer-num">{{ item.num }}</span>
      <span class="layer-name">{{ item.name }}</span>
      <span class="layer-count">{{ item.count }}</span>
    </div>
    <div class="layer-tags"><span v-for="t in item.tags" :key="t">{{ t }}</span></div>
  </div>
</template>