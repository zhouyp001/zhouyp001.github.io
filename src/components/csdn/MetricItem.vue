<script setup>
defineProps({ item: Object })
</script>

<template>
  <div class="metric">
    <b>{{ item.value }}<em v-if="item.suffix">{{ item.suffix }}</em></b>
    <span>{{ item.label }}</span>
    <span v-if="item.sub" class="sub">{{ item.sub }}</span>
  </div>
</template>
