import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { modalData } from '@/data/modals'

export const useModalStore = defineStore('modal', () => {
  const current = ref(null)
  let lastFocus = null

  const isOpen = computed(() => current.value !== null)
  const data = computed(() => (current.value ? modalData[current.value] : null))

  function open(key) {
    if (!modalData[key]) return
    lastFocus = typeof document !== 'undefined' ? document.activeElement : null
    current.value = key
    if (typeof document !== 'undefined') document.body.style.overflow = 'hidden'
  }

  function close() {
    current.value = null
    if (typeof document !== 'undefined') document.body.style.overflow = ''
    if (lastFocus && lastFocus.focus) lastFocus.focus()
    lastFocus = null
  }

  return { current, isOpen, data, open, close }
})