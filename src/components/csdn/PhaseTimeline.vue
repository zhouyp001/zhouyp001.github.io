<script setup>
defineProps({ items: Array })
</script>

<template>
  <div class="phase-grid">
    <div v-for="p in items" :key="p.title" class="phase" :style="{ '--bar': p.color }">
      <time>{{ p.time }}</time>
      <h3>{{ p.title }}</h3>
      <p>
        <span v-if="p.descHtml" v-html="p.descHtml"></span>
        <template v-else>{{ p.desc }}</template>
      </p>
    </div>
  </div>
</template>
