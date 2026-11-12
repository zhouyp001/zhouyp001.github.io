<script setup>
import { computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppNav from '@/components/layout/AppNav.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import FloatingToc from '@/components/layout/FloatingToc.vue'
import SiteModal from '@/components/layout/SiteModal.vue'
import { tocByRoute, footerByRoute } from '@/data/site'
import { useNavStore } from '@/stores/nav'
import { useTocStore } from '@/stores/toc'

const route = useRoute()
const nav = useNavStore()
const toc = useTocStore()

const key = computed(() => {
  const p = route.path.replace(/\/$/, '')
  return p || '/'
})
const tocItems = computed(() => tocByRoute[key.value] ?? [])
const footer = computed(() => footerByRoute[key.value] ?? footerByRoute['/'])

let mql = null
function onMql(e) { if (e.matches) nav.close() }

onMounted(() => {
  mql = window.matchMedia('(min-width: 901px)')
  mql.addEventListener('change', onMql)
})
onUnmounted(() => {
  if (mql) mql.removeEventListener('change', onMql)
})

watch(() => route.fullPath, () => { nav.close(); toc.close() })
</script>

<template>
  <AppNav />
  <FloatingToc v-if="tocItems.length" :items="tocItems" />
  <RouterView />
  <AppFooter v-bind="footer" />
  <SiteModal />
</template>
