<script setup>
defineProps({ item: Object })
</script>

<template>
  <article class="ability" :style="{ '--bar': item.color }">
    <h3>{{ item.title }}</h3>
    <p>{{ item.desc }}</p>
    <div class="ability-tags"><span v-for="t in item.tags" :key="t">{{ t }}</span></div>
  </article>
</template>
