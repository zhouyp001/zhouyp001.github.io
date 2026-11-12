<script setup>
defineProps({
  items: Array,
  variant: { type: String, default: 'home' },
})
</script>

<template>
  <div class="v-timeline" :class="'v-timeline--' + variant">
    <div v-for="(it, i) in items" :key="i" class="tl-item" :class="{ hot: it.hot }">
      <div class="tl-dot"></div>
      <div class="tl-date">{{ it.date }}</div>
      <div class="tl-title">{{ it.title }}</div>
      <div class="tl-desc">
        <span v-if="it.descHtml" v-html="it.descHtml"></span>
        <template v-else>{{ it.desc }}</template>
      </div>
    </div>
  </div>
</template>
