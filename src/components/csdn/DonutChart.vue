<script setup>
defineProps({ data: Object })
</script>

<template>
  <div class="card" style="margin-top:14px">
    <div class="topic-flex">
      <div class="donut-wrap">
        <div class="donut"></div>
        <div class="donut-center"><b>{{ data.total }}</b><span>{{ data.label }}</span></div>
      </div>
      <ul class="legend">
        <li v-for="s in data.segments" :key="s.label">
          <i :style="{ background: s.color }"></i>
          <span>{{ s.label }}</span>
          <b>{{ s.percent }}<em>%</em></b>
        </li>
      </ul>
    </div>
  </div>
</template>