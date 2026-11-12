<script setup>
import { computed } from 'vue'
import { useModalStore } from '@/stores/modal'

const props = defineProps({ group: Object })
const style = computed(() => ({ '--c': props.group.color }))
const modal = useModalStore()
</script>

<template>
  <div class="project-group" :style="style">
    <div class="group-head">
      <span class="group-dot"></span>
      <h3>{{ group.title }}</h3>
      <span class="group-count">{{ group.projects.length }}</span>
    </div>
    <div class="project-grid">
      <article
        v-for="p in group.projects"
        :key="p.name"
        class="project-card"
      >
        <div class="pc-head">
          <a class="pc-name" :href="p.href" target="_blank" rel="noopener">{{ p.name }}</a>
          <div class="pc-badge" :class="{ dim: p.badge.dim }">{{ p.badge.text }}</div>
        </div>
        <div class="pc-desc">{{ p.desc }}</div>
        <div class="pc-tags"><span v-for="t in p.tags" :key="t">{{ t }}</span></div>
        <div v-if="p.actions?.length" class="pc-actions">
          <template v-for="a in p.actions" :key="a.label">
            <button v-if="a.modal" class="btn-sm" @click="modal.open(a.modal)">{{ a.label }}</button>
            <a v-else class="btn-sm" :href="a.href" target="_blank" rel="noopener">{{ a.label }}</a>
          </template>
        </div>
      </article>
    </div>
  </div>
</template>
