<script setup>
import { ref, onMounted } from 'vue'

// 产品封面：图片缺失 / 加载失败时退化为文字封面（原 cover.js 行为）
const props = defineProps({
  cover: { type: Object, required: true },
})

const isText = ref(!!props.cover.textOnly)
const imgEl = ref(null)

function showText() {
  isText.value = true
}

onMounted(() => {
  if (!isText.value && imgEl.value) {
    // 缓存中的坏图：complete 且 naturalWidth === 0
    if (imgEl.value.complete && imgEl.value.naturalWidth === 0) showText()
  }
})
</script>

<template>
  <div class="cover" :class="{ 'cover--text': isText }" :data-text="cover.text" :data-sub="cover.sub">
    <img v-if="!isText" ref="imgEl" :src="cover.src" :alt="cover.alt" loading="lazy" @error="showText" />
    <template v-if="isText">
      <span class="cover-text">{{ cover.text }}</span>
      <span v-if="cover.sub" class="cover-sub">{{ cover.sub }}</span>
    </template>
  </div>
</template>
