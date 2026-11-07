<script setup>
import { computed } from 'vue'

const props = defineProps({ group: Object })
const style = computed(() => ({ '--c': props.group.color }))
</script>

<template>
  <div class="project-group" :style="style">
    <div class="group-head">
      <span class="group-dot"></span>
      <h3>{{ group.title }}</h3>
      <span class="group-count">{{ group.projects.length }}</span>
    </div>
    <div class="project-grid">
      <a
        v-for="p in group.projects"
        :key="p.name"
        class="project-card"
        :href="p.href"
        target="_blank"
        rel="noopener"
      >
        <div class="pc-head">
          <div class="pc-name">{{ p.name }}</div>
          <div class="pc-badge" :class="{ dim: p.badge.dim }">{{ p.badge.text }}</div>
        </div>
        <div class="pc-desc">{{ p.desc }}</div>
        <div class="pc-tags"><span v-for="t in p.tags" :key="t">{{ t }}</span></div>
      </a>
    </div>
  </div>
</template>