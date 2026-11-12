<script setup>
import { useHead } from '@unhead/vue'
import SectionHead from '@/components/common/SectionHead.vue'
import VTimeline from '@/components/common/VTimeline.vue'
import OrgLinkCard from '@/components/github/OrgLinkCard.vue'
import ProjectGroup from '@/components/github/ProjectGroup.vue'
import HBar from '@/components/github/HBar.vue'
import LayerCard from '@/components/github/LayerCard.vue'
import PracticeCard from '@/components/github/PracticeCard.vue'
import {
  hero, orgs, projectGroups, timeline, techBranches, languages, layers, aboutHtml, practices,
} from '@/data/github'

useHead({
  title: 'GitHub 档案 · ZHOUYP',
  meta: [
    { name: 'description', content: 'ZHOUYP 的 GitHub 开源作品与技术探索档案，包含独立工具、跨端应用与历史项目。' },
  ],
})
</script>

<template>
  <header class="hero">
    <div class="wrap">
      <span class="badge">{{ hero.badge }}</span>
      <h1>{{ hero.name }}</h1>
      <p class="hero-kicker">{{ hero.kicker }}</p>
      <p class="tagline">
        {{ hero.taglinePrefix }}<strong>{{ hero.taglineStrong }}</strong>。
      </p>
      <div class="chips">
        <span v-for="c in hero.chips" :key="c.label" class="chip"><b>{{ c.num }}</b>{{ c.label }}</span>
      </div>
      <div class="cta">
        <a class="btn btn-main" href="https://github.com/zhouyp001" target="_blank" rel="noopener">访问 GitHub ↗</a>
        <a class="btn btn-ghost" href="#repos">浏览仓库</a>
      </div>
    </div>
  </header>

  <main>
    <div class="wrap">
      <section id="orgs" v-reveal class="reveal">
        <SectionHead title="GitHub 组织" sub="两个组织承载不同的开源项目方向：just-did 聚焦跨端本地优先产品，WebAIHarnessRoom 组织独立的 AI 工程工具。" />
        <div class="org-grid">
          <OrgLinkCard v-for="o in orgs" :key="o.name" :item="o" />
        </div>
      </section>

      <section id="repos" v-reveal class="reveal">
        <SectionHead title="仓库矩阵" sub="按问题域整理的开源仓库。项目卡片中的体验与演示入口直接对应原有项目资源。" />
        <ProjectGroup v-for="g in projectGroups" :key="g.title" :group="g" />
      </section>

      <section id="timeline" v-reveal class="reveal">
        <SectionHead title="账号活动时间线" sub="从 2026 年下半年的本地优先 + 端侧智能 + AI 工程化活跃期，回溯到早期全栈与 OCR 积累。" />
        <VTimeline :items="timeline.items" :variant="timeline.variant" />
      </section>

      <section id="tech" v-reveal class="reveal">
        <SectionHead title="技术标签与分层统计" sub="基于 14 个重点仓库的交叉归类。一个仓库可同时归属多个分支，因此分支仓库数之和大于仓库总数。" />
        <div class="tech-grid">
          <div class="card">
            <div class="chart-head"><h3>技术分支分布</h3><p>端侧 AI 与隐私本地优先并列覆盖最广</p></div>
            <div class="hbars">
              <HBar v-for="b in techBranches" :key="b.label" v-bind="b" />
            </div>
          </div>
          <div class="card">
            <div class="chart-head"><h3>主语言分布</h3><p>Python 占 42.9%（6/14）</p></div>
            <div class="hbars">
              <HBar v-for="l in languages" :key="l.label" v-bind="l" />
            </div>
          </div>
        </div>
        <div class="layer-grid">
          <LayerCard v-for="l in layers" :key="l.num" :item="l" />
        </div>
      </section>

      <section id="about" v-reveal class="reveal">
        <SectionHead title="实践档案说明" sub="ZHOUYP 的 GitHub 实践档案说明" />
        <div class="about">
          <p v-for="(p, i) in aboutHtml" :key="i" v-html="p"></p>
        </div>
      </section>

      <section id="practice" v-reveal class="reveal">
        <SectionHead title="工程实践特征" sub="这些特征不是孤立的标签，而是仓库之间反复出现的共性。数字为具备该特征的仓库数量。" />
        <div class="practice-grid">
          <PracticeCard v-for="p in practices" :key="p.title" :item="p" />
        </div>
      </section>
    </div>
  </main>
</template>
