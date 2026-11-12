<script setup>
defineProps({ group: Object })
</script>

<template>
  <div class="pick-group">
    <h3>{{ group.title }}</h3>
    <ul class="pick-list">
      <li v-for="p in group.items" :key="p.title">
        <a class="pick" :href="p.href" target="_blank" rel="noopener">
          <div class="t">
            {{ p.title }}
            <span
              v-for="t in p.tags"
              :key="t.text"
              class="tag"
              :class="t.variant || ''"
            >{{ t.text }}</span>
          </div>
          <div class="d">{{ p.desc }}</div>
        </a>
      </li>
    </ul>
  </div>
</template>
