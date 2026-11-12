<script setup>
import { ref, watch, nextTick, onMounted, onUnmounted } from 'vue'
import { useModalStore } from '@/stores/modal'
import DocViewer from '@/components/common/DocViewer.vue'

const modal = useModalStore()
const closeBtn = ref(null)

watch(() => modal.isOpen, async (v) => {
  if (v) { await nextTick(); closeBtn.value?.focus() }
})

function onKeydown(e) {
  if (e.key === 'Escape' && modal.isOpen) modal.close()
}
onMounted(() => document.addEventListener('keydown', onKeydown))
onUnmounted(() => document.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div
    class="modal"
    :class="{ open: modal.isOpen }"
    :aria-hidden="!modal.isOpen"
    role="dialog"
    aria-modal="true"
  >
    <div class="modal-backdrop" @click="modal.close()"></div>
    <div v-if="modal.data" class="modal-content">
      <div class="modal-head">
        <div class="modal-title">{{ modal.data.title }}</div>
        <button ref="closeBtn" class="modal-close" aria-label="关闭" @click="modal.close()">×</button>
      </div>
      <div class="modal-body">
        <div v-if="modal.data.video" class="video">
          <iframe
            :src="modal.data.video"
            allow="autoplay; fullscreen"
            allowfullscreen
            frameborder="0"
          ></iframe>
        </div>

        <template v-else-if="modal.data.image">
          <div class="img-wrap"><img :src="modal.data.image" :alt="modal.data.title"></div>
          <div v-if="modal.data.caption" class="caption">{{ modal.data.caption }}</div>
        </template>

        <DocViewer v-else-if="modal.data.doc" :doc="modal.data.doc" />

        <div v-else-if="modal.data.placeholder" class="placeholder">
          <div class="placeholder-icon">Z</div>
          <h5>{{ modal.data.placeholder.heading }}</h5>
          <p>{{ modal.data.placeholder.text }}</p>
          <a class="btn-outline" :href="modal.data.placeholder.link" target="_blank" rel="noopener">
            {{ modal.data.placeholder.linkText }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
