<script setup>
import { ref } from 'vue'
import { useModalStore } from '@/stores/modal'
import GitHubIcon from '@/components/icons/GitHubIcon.vue'

const props = defineProps({ item: Object })
const modal = useModalStore()
const imgError = ref(false)
</script>

<template>
  <article class="product" :class="{ 'product--wide': item.layout === 'wide', 'product--overlay': item.layout !== 'wide' }">
    <div
      class="cover"
      :class="[
        `cover--${item.cover.type}`,
        item.cover.theme ? `cover--${item.cover.theme}` : '',
      ]"
      :aria-hidden="item.cover.type === 'generated' ? 'true' : undefined"
    >
      <span v-if="item.kicker" class="cover-kicker">{{ item.kicker }}</span>
      <span v-if="item.cover.type === 'generated'" class="cover-mark" aria-hidden="true">
        {{ item.cover.theme === 'harness' ? 'WHR' : 'J·D' }}
      </span>
      <span v-if="item.cover.type === 'generated'" class="cover-edition" aria-hidden="true">
        {{ item.cover.theme === 'harness' ? 'OPEN SOURCE / 01' : 'LOCAL FIRST / 02' }}
      </span>
      <template v-if="item.cover.type === 'text'">
        <span class="cover-text">{{ item.cover.title }}</span>
        <span class="cover-sub">{{ item.cover.sub }}</span>
      </template>
      <img
        v-else-if="item.cover.type === 'image' && !imgError"
        :src="item.cover.src"
        :alt="item.cover.alt"
        loading="lazy"
        @error="imgError = true"
      >
    </div>
    <div class="product-body">
      <div class="p-head">
        <div class="p-heading">
          <div class="p-title">{{ item.title }}</div>
          <div v-if="item.subtitle" class="p-subtitle">{{ item.subtitle }}</div>
          <div class="p-time">{{ item.time }}</div>
        </div>
        <div v-if="item.children?.length && item.actions?.length" class="p-actions p-actions--project">
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
      <p class="p-desc">
        <span v-if="item.descHtml" v-html="item.descHtml"></span>
        <template v-else>{{ item.desc }}</template>
      </p>
      <div class="p-tags"><span v-for="t in item.tags" :key="t">{{ t }}</span></div>
      <div v-if="item.children?.length" class="p-subprojects">
        <div v-for="(child, index) in item.children" :key="child.title" class="p-subproject">
          <div class="p-subproject-head">
            <div class="p-subproject-title">
              <span class="p-subproject-index">{{ String(index + 1).padStart(2, '0') }}</span>
              <strong>{{ child.title }}</strong>
            </div>
            <div class="p-actions p-actions--nested">
              <template v-for="(a, i) in child.actions" :key="i">
                <button v-if="a.type === 'modal'" class="btn-sm" :class="{ primary: a.primary }" @click="modal.open(a.key)">{{ a.label }}</button>
                <a v-else class="btn-sm" :class="{ primary: a.primary }" :href="a.href" target="_blank" rel="noopener">{{ a.label }}</a>
              </template>
            </div>
          </div>
          <p class="p-desc">{{ child.desc }}</p>
        </div>
      </div>
      <div v-if="!item.children?.length" class="p-actions p-actions--main">
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
