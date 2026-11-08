<script setup>
import { ref } from 'vue'
import { useModalStore } from '@/stores/modal'
import GitHubIcon from '@/components/icons/GitHubIcon.vue'

const props = defineProps({ item: Object })
const modal = useModalStore()
const imgError = ref(false)
</script>

<template>
  <article class="product">
    <div class="cover" :class="{ 'cover--text': item.cover.type === 'text' }">
      <template v-if="item.cover.type === 'text'">
        <span class="cover-text">{{ item.cover.title }}</span>
        <span class="cover-sub">{{ item.cover.sub }}</span>
      </template>
      <img
        v-else-if="!imgError"
        :src="item.cover.src"
        :alt="item.cover.alt"
        loading="lazy"
        @error="imgError = true"
      >
    </div>
    <div class="product-body">
      <div class="p-head">
        <div class="p-title">{{ item.title }}</div>
        <div class="p-time">{{ item.time }}</div>
      </div>
      <p class="p-desc">
        <span v-if="item.descHtml" v-html="item.descHtml"></span>
        <template v-else>{{ item.desc }}</template>
      </p>
      <div class="p-tags"><span v-for="t in item.tags" :key="t">{{ t }}</span></div>
      <div class="p-actions">
        <template v-for="(a, i) in item.actions" :key="i">
          <button
            v-if="a.type === 'modal'"
            class="btn-sm"
            :class="{ primary: a.primary }"
            @click="modal.open(a.key)"
          >{{ a.label }}</button>
          <a
            v-else
            class="btn-sm"
            :class="{ primary: a.primary }"
            :href="a.href"
            target="_blank"
            rel="noopener"
          >
            <GitHubIcon v-if="a.icon === 'github'" :size="13" />
            {{ a.label }}
          </a>
        </template>
      </div>
    </div>
  </article>
</template>