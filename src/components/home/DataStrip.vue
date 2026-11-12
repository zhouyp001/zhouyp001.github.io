<script setup>
defineProps({ data: Object })
</script>

<template>
  <div class="data-strip">
    <div class="data-grid">
      <div v-for="b in data.blocks" :key="b.title" class="data-block" :style="{ '--bar': b.color }">
        <h4>{{ b.title }}</h4>
        <div class="data-list">
          <div v-for="it in b.items" :key="it.label">
            <b>{{ it.value }}</b><span>{{ it.label }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="data-foot">
      <small>{{ data.footNote }}</small>
      <div style="display:flex;gap:16px">
        <RouterLink v-for="l in data.links" :key="l.to" :to="l.to">{{ l.label }}</RouterLink>
      </div>
    </div>
  </div>
</template>
