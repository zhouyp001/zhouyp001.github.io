<script setup>
defineProps({ title: String, sub: String })
</script>

<template>
  <div class="sec-head">
    <h2 class="sec-title">{{ title }}</h2>
    <p v-if="sub" class="sec-sub">{{ sub }}</p>
  </div>
</template>