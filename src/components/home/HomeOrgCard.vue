<script setup>
defineProps({ item: Object })
</script>

<template>
  <article class="org-card" :style="{ '--bar': item.color }">
    <div class="org-name">{{ item.name }} <em>{{ item.em }}</em></div>
    <p class="org-desc" v-html="item.descHtml"></p>
    <div class="org-actions">
      <a
        v-for="a in item.actions"
        :key="a.href"
        class="btn-outline"
        :href="a.href"
        target="_blank"
        rel="noopener"
      >{{ a.label }}</a>
    </div>
  </article>
</template>
