<script setup>
import { computed } from 'vue'
import { useTheme } from '../composables/useTheme'

const { isDark, toggleTheme } = useTheme()

const label = computed(() => (isDark.value ? '切换到日间模式' : '切换到夜间模式'))
</script>

<template>
  <button
    class="circle theme-toggle"
    id="themeToggle"
    type="button"
    :aria-label="label"
    :title="label"
    :aria-pressed="String(isDark)"
    @click="toggleTheme"
  ></button>
</template>
