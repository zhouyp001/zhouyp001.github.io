<script setup>
import SiteNav from '../components/SiteNav.vue'
import SiteFooter from '../components/SiteFooter.vue'
import Icon from '../components/Icon.vue'
import ProductCover from '../components/ProductCover.vue'
import { openModal } from '../composables/useModal'
import { usePageHead } from '../composables/usePageHead'
import { products, orgs, repoGroups } from '../data/projects'
import { activityTimeline } from '../data/timeline'

usePageHead(
  'ZHOUYP · 项目',
  'ZHOUYP · 全部项目：精选产品、GitHub 组织、仓库矩阵与活动时间线。'
)
</script>

<template>
  <SiteNav page-hero>
    <template #hero>
      <h1>全部项目：<span>开源档案</span></h1>
      <p>精选产品 · GitHub 组织 · 仓库矩阵 · 活动时间线</p>
      <div class="actions">
        <RouterLink class="btn primary" :to="{ hash: '#products' }"> 查看主要项目</RouterLink>
        <RouterLink class="btn" :to="{ hash: '#orgs' }">了解更多　→</RouterLink>
      </div>
    </template>
  </SiteNav>

  <main class="wrap">
    <!-- ==================== 主要项目 ==================== -->
    <section class="section" id="products">
      <div class="section-head">
        <div>
          <div class="heading"><span class="symbol"><Icon name="star" /></span><h2>主要项目</h2></div>
          <div class="sub">优先展示当前重点项目，其余项目按时间整理</div>
        </div>
        <RouterLink class="more" :to="{ hash: '#repos' }">查看仓库矩阵　→</RouterLink>
      </div>

      <div class="product-grid">
        <article class="product glass" v-for="p in products" :key="p.key">
          <ProductCover :cover="p.cover" />
          <div class="product-body">
            <div class="p-head">
              <div class="p-title">{{ p.title }}</div>
              <div class="p-time">{{ p.time }}</div>
            </div>
            <p class="p-desc" v-html="p.descHtml || p.desc"></p>
            <div class="p-tags"><span v-for="t in p.tags" :key="t">{{ t }}</span></div>
            <div class="p-actions">
              <template v-for="(a, i) in p.actions" :key="i">
                <button v-if="a.type === 'modal'" :class="a.cls" type="button" @click="openModal(a.key)">{{ a.text }}</button> <a v-else :class="a.cls" :href="a.href" target="_blank" rel="noopener"><Icon v-if="a.icon" name="github" width="13" height="13" class="gh-icon" /> {{ a.text }}</a>
              </template>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- ==================== GitHub 组织 ==================== -->
    <section class="section" id="orgs">
      <div class="section-head">
        <div>
          <div class="heading"><span class="symbol"><Icon name="hex-fill" /></span><h2>GitHub 组织</h2></div>
          <div class="sub">两个公开组织，集中呈现近期持续推进的项目与工具</div>
        </div>
      </div>
      <div class="org-grid">
        <a class="org-link glass" v-for="o in orgs" :key="o.name" :href="o.href" target="_blank" rel="noopener" :style="{ '--bar': o.color }">
          <div class="org-name">{{ o.name }}</div>
          <div class="org-desc">{{ o.desc }}</div>
          <div class="org-meta">{{ o.meta }}</div>
        </a>
      </div>
    </section>

    <!-- ==================== 仓库矩阵 ==================== -->
    <section class="section" id="repos">
      <div class="section-head">
        <div>
          <div class="heading"><span class="symbol"><Icon name="grid" /></span><h2>仓库矩阵</h2></div>
          <div class="sub">按问题域梳理重点仓库，突出每个项目解决的核心问题</div>
        </div>
      </div>

      <div class="project-group" v-for="g in repoGroups" :key="g.title" :style="{ '--c': g.color }">
        <div class="group-head">
          <span class="group-dot"></span>
          <h3>{{ g.title }}</h3>
          <span class="group-count">{{ g.repos.length }}</span>
        </div>
        <div class="repo-grid">
          <a class="project-card glass" v-for="r in g.repos" :key="r.name" :href="r.href" target="_blank" rel="noopener">
            <div class="pc-head">
              <div class="pc-name">{{ r.name }}</div>
              <div class="pc-badge" :class="{ dim: r.badgeDim }">{{ r.badge }}</div>
            </div>
            <div class="pc-desc">{{ r.desc }}</div>
            <div class="pc-tags"><span v-for="t in r.tags" :key="t">{{ t }}</span></div>
          </a>
        </div>
      </div>
    </section>

    <!-- ==================== 活动时间线 ==================== -->
    <section class="section" id="timeline">
      <div class="section-head">
        <div>
          <div class="heading"><span class="symbol"><Icon name="bar" /></span><h2>账号活动时间线</h2></div>
          <div class="sub">从近期的本地优先、端侧智能与 AI 工程化实践，回溯至早期全栈开发和 OCR 探索</div>
        </div>
      </div>

      <div class="v-timeline">
        <div class="tl-item" v-for="t in activityTimeline" :key="t.date" :class="{ hot: t.hot }">
          <div class="tl-dot"></div>
          <div class="tl-date">{{ t.date }}</div>
          <div class="tl-title">{{ t.title }}</div>
          <p class="tl-desc">{{ t.desc }}</p>
        </div>
      </div>
    </section>
  </main>

  <SiteFooter />
</template>
