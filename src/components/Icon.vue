<script setup>
defineProps({
  name: { type: String, required: true },
  width: { type: String, default: '1em' },
  height: { type: String, default: '1em' },
})
</script>

<template>
  <svg :width="width" :height="height" aria-hidden="true" focusable="false" style="display:block" v-bind="$attrs">
    <use :href="`#i-${name}`" />
  </svg>
</template>
