<script setup>
import { computed } from 'vue'

const props = defineProps({ years: Array, note: String })

const max = computed(() => Math.max(...props.years.map((y) => y.value), 1))

const bars = computed(() =>
  props.years.map((y, i) => ({
    ...y,
    percent: y.value === 0 ? 0 : Math.round((y.value / max.value) * 1000) / 10,
    delay: +(0.05 + i * 0.07).toFixed(2),
  }))
)
</script>

<template>
  <div class="card">
    <div class="chart-head">
      <h3>年度创作分布</h3>
      <p>{{ note }}</p>
    </div>
    <div class="bars">
      <div v-for="y in bars" :key="y.year" class="bar-item">
        <div class="bar-wrap">
          <div
            class="bar"
            :class="{ peak: y.peak, zero: y.zero }"
            :style="{ height: y.zero ? '2px' : y.percent + '%', animationDelay: y.delay + 's' }"
          >
            <span class="val" :class="{ muted: y.zero }">{{ y.value }}</span>
          </div>
        </div>
        <span class="bar-label">{{ y.year }}</span>
      </div>
    </div>
  </div>
</template>
