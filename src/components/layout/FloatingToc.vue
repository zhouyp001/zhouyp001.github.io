<script setup>
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useTocStore } from '@/stores/toc'

const props = defineProps({ items: Array })
const toc = useTocStore()
const route = useRoute()

const rootEl = ref(null)
const activeId = ref('')

function updateActive() {
  if (!props.items.length) return
  const list = props.items
    .map((it) => ({ id: it.id, el: document.getElementById(it.id) }))
    .filter((o) => o.el)
  if (!list.length) return

  const probe = window.innerHeight * 0.28
  let current = list[0]
  list.forEach((o) => {
    if (o.el.getBoundingClientRect().top <= probe) current = o
  })
  if (window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 4) {
    current = list[list.length - 1]
  }
  activeId.value = current.id
}

let ticking = false
function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => { updateActive(); ticking = false })
}

function onDocClick(e) {
  if (!toc.open) return
  if (rootEl.value && !rootEl.value.contains(e.target)) toc.close()
}
function onKeydown(e) {
  if (e.key === 'Escape') toc.close()
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', updateActive)
  document.addEventListener('click', onDocClick)
  document.addEventListener('keydown', onKeydown)
  nextTick(updateActive)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', updateActive)
  document.removeEventListener('click', onDocClick)
  document.removeEventListener('keydown', onKeydown)
})

watch(() => route.path, () => {
  activeId.value = ''
  nextTick(updateActive)
})
</script>

<template>
  <div ref="rootEl" class="toc" :class="{ open: toc.open }">
    <button
      class="toc-toggle"
      :aria-expanded="toc.open"
      :aria-label="toc.open ? '关闭目录' : '打开目录'"
      aria-controls="tocPanel"
      @click.stop="toc.toggle()"
    >
      <span class="toc-bars"><i></i><i></i><i></i></span>
    </button>
    <nav class="toc-panel" id="tocPanel" aria-label="页面目录">
      <div class="toc-title">本页目录</div>
      <ul>
        <li v-for="it in items" :key="it.id">
          <a :href="'#' + it.id" :class="{ active: activeId === it.id }" @click="toc.close()">
            {{ it.label }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
