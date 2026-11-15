<script setup>
import SiteNav from '../components/SiteNav.vue'
import SiteFooter from '../components/SiteFooter.vue'
import Icon from '../components/Icon.vue'
import { usePageHead } from '../composables/usePageHead'
import { csdnStats, csdnOverviewSub } from '../data/stats'
import { csdnJourney } from '../data/timeline'
import { csdnHomeHref, csdnSearchUrl, csdnTopics, csdnArticles } from '../data/csdn'

usePageHead(
  'ZHOUYP · CSDN 档案',
  'ZHOUYP · CSDN 技术CSDN归档档案：117 篇文章、18 个专栏、9 年创作跨度。'
)
</script>

<template>
  <SiteNav page-hero>
    <template #hero>
      <h1>CSDN 技术写作档案</h1>
      <p>117 篇文章 · 18 个专栏 · 9 年创作跨度</p>
      <div class="actions"><RouterLink class="btn" :to="{ hash: '#journey' }">了解更多　→</RouterLink></div>
    </template>
  </SiteNav>

  <main class="wrap">
    <!-- ==================== 数据概览 ==================== -->
    <section class="section" id="overview">
      <div class="section-head">
        <div>
          <div class="heading"><span class="symbol"><Icon name="list" /></span><h2>数据概览</h2></div>
          <div class="sub">{{ csdnOverviewSub }}</div>
        </div>
        <a class="more" :href="csdnHomeHref" target="_blank" rel="noopener">访问 CSDN 主页　→</a>
      </div>
      <div class="csdn-stats">
        <div class="csdn-stat glass" v-for="s in csdnStats" :key="s.label">
          <div class="csdn-stat-label">{{ s.label }}</div>
          <div class="csdn-stat-val">{{ s.value }}</div>
          <div class="csdn-stat-sub">{{ s.sub }}</div>
        </div>
      </div>
    </section>

    <!-- ==================== 创作历程 ==================== -->
    <section class="section" id="journey">
      <div class="section-head">
        <div>
          <div class="heading"><span class="symbol"><Icon name="bar" /></span><h2>创作历程</h2></div>
          <div class="sub">从算法学习到工程实践，记录技术关注点的变化与积累</div>
        </div>
      </div>
      <div class="v-timeline">
        <div class="tl-item" v-for="t in csdnJourney" :key="t.date" :class="{ hot: t.hot }">
          <div class="tl-dot"></div>
          <div class="tl-date">{{ t.date }}</div>
          <div class="tl-title">{{ t.title }}</div>
          <p class="tl-desc">{{ t.desc }}</p>
        </div>
      </div>
    </section>

    <!-- ==================== 内容方向 ==================== -->
    <section class="section" id="topics">
      <div class="section-head">
        <div>
          <div class="heading"><span class="symbol"><Icon name="grid" /></span><h2>内容方向</h2></div>
          <div class="sub">内容覆盖五个方向，以知识整理、实践记录与问题解决为主</div>
        </div>
      </div>
      <div class="topic-grid">
        <div class="topic-card glass" v-for="t in csdnTopics" :key="t.num">
          <div class="topic-num">{{ t.num }}</div>
          <div class="topic-name">{{ t.name }}</div>
          <p class="topic-desc">{{ t.desc }}</p>
          <div class="topic-count">{{ t.count }}</div>
        </div>
      </div>
    </section>

    <!-- ==================== 精选文章 ==================== -->
    <section class="section" id="articles">
      <div class="section-head">
        <div>
          <div class="heading"><span class="symbol"><Icon name="star" /></span><h2>精选文章</h2></div>
          <div class="sub">按技术主题选取代表文章，点击可在 CSDN 中检索原文</div>
        </div>
      </div>
      <div class="article-list">
        <a class="article-item glass" v-for="a in csdnArticles" :key="a.title" :href="csdnSearchUrl(a.q || a.title)" target="_blank" rel="noopener"><span>{{ a.title }}</span> <span v-if="a.cat" class="article-cat">{{ a.cat }}</span> <span v-else class="article-views">{{ a.views }}</span></a>
      </div>
    </section>
  </main>

  <SiteFooter />
</template>
