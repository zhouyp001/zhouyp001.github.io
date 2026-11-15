import { ref } from 'vue'
import { modalData } from '../data/modal'

// 全局弹窗状态：模块级单例，替代原 window.openModal / closeModal
// 行为与原 modal.js 一致：未知 key 无操作；打开时锁滚动并记录焦点；关闭时恢复焦点

export const modalOpen = ref(false)
export const modalItem = ref(null)

let lastFocused = null

export function openModal(key) {
  const data = modalData[key]
  if (!data) return

  lastFocused = document.activeElement
  modalItem.value = data
  modalOpen.value = true
  document.body.style.overflow = 'hidden'
}

export function closeModal() {
  if (!modalOpen.value) return

  modalOpen.value = false
  modalItem.value = null
  document.body.style.overflow = ''

  if (lastFocused && typeof lastFocused.focus === 'function') {
    lastFocused.focus()
    lastFocused = null
  }
}
