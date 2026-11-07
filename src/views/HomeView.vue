<script setup>
import { useHead } from '@unhead/vue'
import SectionHead from '@/components/common/SectionHead.vue'
import VTimeline from '@/components/common/VTimeline.vue'
import AbilityCard from '@/components/home/AbilityCard.vue'
import HomeOrgCard from '@/components/home/HomeOrgCard.vue'
import DataStrip from '@/components/home/DataStrip.vue'
import ProductCard from '@/components/home/ProductCard.vue'
import { hero, abilities, orgs, dataStrip, products, timeline, current, about } from '@/data/home'

useHead({
  title: 'ZHOUYP · 个人门户 · Java 高并发与架构 / 视频流与 AI 工程化 / 开源分享',
  meta: [
    { name: 'description', content: 'ZHOUYP 的个人门户：Java 高并发与架构、视频流与 AI 工程化、开源分享。CSDN ke_yi_ · GitHub zhouyp001' },
  ],
})
</script>

<template>
  <!-- 与 GithubView / CsdnView 保持一致：使用 <header> 而非 <section> -->
  <header class="hero">
    <div class="wrap">
      <span class="badge">{{ hero.badge }}</span>
      <h1 class="hero-title">
        <span class="hero-name">{{ hero.name }}</span>
        <span class="hero-role">
          <template v-for="(r, i) in hero.roles" :key="r">
            <span v-if="i > 0" class="sep">/</span>{{ r }}
          </template>
        </span>
      </h1>
      <p class="hero-sub">{{ hero.sub }}</p>
      <p class="hero-platform">
        <template v-for="(p, i) in hero.platform" :key="p.label">
          <span v-if="i > 0"> · </span>{{ p.label }} <b>{{ p.value }}</b>
        </template>
      </p>
      <div class="chips">
        <span v-for="c in hero.chips" :key="c" class="chip">{{ c }}</span>
      </div>
      <div class="cta">
        <a class="btn btn-main" href="#products">查看精选产品</a>
        <RouterLink class="btn btn-ghost" to="/github">GitHub 档案</RouterLink>
        <RouterLink class="btn btn-ghost" to="/csdn">CSDN 档案</RouterLink>
      </div>
    </div>
  </header>

  <main>
    <div class="wrap">
      <section id="ability" v-reveal class="reveal">
        <SectionHead title="能力与经验" sub="四条能力主线 · 两个开源组织 · 两个平台的数据快照" />
        <div class="ability-grid">
          <AbilityCard v-for="a in abilities" :key="a.title" :item="a" />
        </div>
        <div class="org-grid">
          <HomeOrgCard v-for="o in orgs" :key="o.name" :item="o" />
        </div>
        <DataStrip :data="dataStrip" />
      </section>

      <section id="products" v-reveal class="reveal">
        <SectionHead title="精选产品" sub="just-did 置顶，其余按开始时间降序" />
        <div class="product-grid">
          <ProductCard v-for="p in products" :key="p.title" :item="p" />
        </div>
      </section>

      <section id="journey" v-reveal class="reveal">
        <SectionHead title="演进与当前" sub="技术关注的四个阶段 · 当前关注 · 最近状态" />
        <VTimeline :items="timeline.items" :variant="timeline.variant" />
        <div class="current">
          <div>
            <h4>{{ current.left.title }}</h4>
            <p>{{ current.left.text }}</p>
          </div>
          <div>
            <h4>{{ current.right.title }}</h4>
            <p class="state">
              <template v-for="(l, i) in current.right.lines" :key="i">
                {{ l }}<br v-if="i < current.right.lines.length - 1">
              </template>
            </p>
          </div>
        </div>
      </section>

      <section id="about" v-reveal class="reveal">
        <SectionHead title="关于与联系" sub="身份 · 可合作方向 · 联系方式" />
        <div class="about">
          <div v-for="r in about.rows" :key="r.label" class="about-row">
            <div class="about-label">{{ r.label }}</div>
            <div class="about-text" v-html="r.html"></div>
          </div>
          <div class="about-actions">
            <a
              v-for="a in about.actions"
              :key="a.href"
              class="btn-outline"
              :href="a.href"
              target="_blank"
              rel="noopener"
            >{{ a.label }}</a>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>