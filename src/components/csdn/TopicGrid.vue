<script setup>
defineProps({ items: Array })
</script>

<template>
  <div class="topic-grid">
    <div v-for="t in items" :key="t.num" class="topic" :style="{ '--bar': t.color }">
      <div class="dot">{{ t.num }}</div>
      <h3>{{ t.title }}</h3>
      <p>{{ t.desc }}</p>
      <div class="cnt">{{ t.count }}</div>
    </div>
  </div>
</template>