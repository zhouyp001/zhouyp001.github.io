import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTocStore = defineStore('toc', () => {
  const open = ref(false)
  const toggle = () => { open.value = !open.value }
  const close = () => { open.value = false }
  return { open, toggle, close }
})