import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNavStore = defineStore('nav', () => {
  const open = ref(false)
  const toggle = () => { open.value = !open.value }
  const close = () => { open.value = false }
  return { open, toggle, close }
})