<script setup>
import { useHead } from '@unhead/vue'
import SectionHead from '@/components/common/SectionHead.vue'
import MetricItem from '@/components/csdn/MetricItem.vue'
import YearBarChart from '@/components/csdn/YearBarChart.vue'
import PhaseTimeline from '@/components/csdn/PhaseTimeline.vue'
import TopicGrid from '@/components/csdn/TopicGrid.vue'
import DonutChart from '@/components/csdn/DonutChart.vue'
import PickGroup from '@/components/csdn/PickGroup.vue'
import {
  hero, metrics, years, yearChartNote, phases, topics, donut,
  aboutHtml, aboutTags, pickGroups, picksNote,
} from '@/data/csdn'

useHead({
  title: 'CSDN 档案 · ZHOUYP',
  meta: [
    { name: 'description', content: 'ZHOUYP 的 CSDN 档案：117 篇文章 · 18 个专栏 · 9 年创作跨度 · 最高阅读 9,043。' },
  ],
})
</script>

<template>
  <header class="hero">
    <div class="wrap">
      <span class="badge">{{ hero.badge }}</span>
      <h1>{{ hero.name }}</h1>
      <p class="tagline">{{ hero.tagline }}</p>
      <div class="chips">
        <span v-for="c in hero.chips" :key="c" class="chip">{{ c }}</span>
      </div>
      <div class="cta">
        <a class="btn btn-main" href="#picks">查看精选文章</a>
        <a class="btn btn-ghost" href="#about">了解写作档案</a>
      </div>
    </div>
  </header>

  <main>
    <div class="wrap">
      <section id="data" v-reveal class="reveal">
        <SectionHead title="数据概览" sub="公开主页数据与年度创作分布" />
        <div class="metric-row">
          <MetricItem v-for="m in metrics" :key="m.label" :item="m" />
        </div>
        <YearBarChart :years="years" :note="yearChartNote" />
      </section>

      <section id="journey" v-reveal class="reveal">
        <SectionHead title="创作历程" sub="从算法训练笔记，到日常开发档案，再到场景驱动的方案取舍" />
        <PhaseTimeline :items="phases" />
      </section>

      <section id="topic" v-reveal class="reveal">
        <SectionHead title="内容方向" sub="五个并行的技术方向，以“学习笔记 + 问题解决”为主要形态" />
        <TopicGrid :items="topics" />
        <DonutChart :data="donut" />
      </section>

      <section id="about" v-reveal class="reveal">
        <SectionHead title="写作档案说明" sub="ZHOUYP 的写作档案说明" />
        <div class="about">
          <p v-for="(p, i) in aboutHtml" :key="i" v-html="p"></p>
          <div class="about-tags">
            <span v-for="t in aboutTags" :key="t">{{ t }}</span>
          </div>
        </div>
      </section>

      <section id="picks" v-reveal class="reveal">
        <SectionHead title="精选文章" sub="按方向整理的代表作品，点击可直接跳转到 CSDN 查看" />
        <PickGroup v-for="g in pickGroups" :key="g.title" :group="g" />
        <p class="picks-note">{{ picksNote }}</p>
      </section>
    </div>
  </main>
</template>