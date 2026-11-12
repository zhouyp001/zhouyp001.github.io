<script setup>
defineProps({ item: Object })
</script>

<template>
  <div class="practice-card">
    <div class="practice-num">{{ item.num }}</div>
    <div class="practice-title">{{ item.title }}</div>
    <div class="practice-desc">{{ item.desc }}</div>
    <div class="practice-repos">{{ item.repos }}</div>
  </div>
</template>
