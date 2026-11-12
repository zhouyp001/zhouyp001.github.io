<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  label: String,
  value: [String, Number],
  width: Number,
  color: String,
})

const el = ref(null)
const on = ref(false)
let io = null

onMounted(() => {
  if (typeof IntersectionObserver === 'undefined') { on.value = true; return }
  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { on.value = true; io.disconnect() }
      })
    },
    {
      // 与原 reveal 保持一致：提前 300px 触发，不再要求 25%
      rootMargin: '0px 0px 300px 0px',
      threshold: 0,
    }
  )
  io.observe(el.value)
})
onUnmounted(() => { if (io) io.disconnect() })
</script>

<template>
  <div ref="el" class="hbar" :class="{ on }" :style="{ '--w': width + '%', '--c': color }">
    <span class="hbar-label">{{ label }}</span>
    <div class="hbar-track"><div class="hbar-fill"></div></div>
    <span class="hbar-val">{{ value }}</span>
  </div>
</template>
