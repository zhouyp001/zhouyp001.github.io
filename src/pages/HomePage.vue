<script setup>
import SiteNav from '../components/SiteNav.vue'
import SiteFooter from '../components/SiteFooter.vue'
import Icon from '../components/Icon.vue'
import { openModal } from '../composables/useModal'
import { usePageHead } from '../composables/usePageHead'
import { featuredProjects } from '../data/projects'
import { homeJourney } from '../data/timeline'
import { directions } from '../data/directions'
import { osStats, osSnapshot, osSocial } from '../data/stats'

usePageHead(
  'ZHOUYP · 技术探索与创新实践',
  'ZHOUYP · 技术探索与创新实践：软件工程、AI 工具、跨端产品与本地优先架构。'
)
</script>

<template>
  <SiteNav>
    <template #hero>
      <h1>技术探索：<span>创新实践</span></h1>
      <p>持续探索软件工程、AI 工具与工程化、跨端产品及本地优先架构，并将想法沉淀为可运行、可验证的项目。</p>
      <div class="actions">
        <RouterLink class="btn primary" :to="{ hash: '#projects' }"> 探索项目</RouterLink>
        <RouterLink class="btn" :to="{ hash: '#directions' }">了解更多　→</RouterLink>
      </div>
    </template>
  </SiteNav>

  <main class="wrap">
    <section class="section" id="projects">
      <div class="section-head">
        <div>
          <div class="heading"><span class="symbol"><Icon name="star" /></span><h2>精选项目</h2></div>
          <div class="sub">开源项目 · 技术探索 · 创意实践</div>
        </div>
        <RouterLink class="more" to="/projects">查看全部项目　→</RouterLink>
      </div>

      <div class="project-grid">
        <template v-for="f in featuredProjects" :key="f.key">
          <article v-if="!f.wide" class="project" :class="{ teal: f.teal }">
            <div class="project-top">
              <span class="tag"><i><Icon :name="f.tag.icon" /></i> {{ f.tag.text }}</span>
              <h3>{{ f.title }}</h3>
              <p class="desc">{{ f.desc }}</p>
            </div>
            <div class="project-bottom">
              <span>{{ f.summary }}</span>
              <div class="project-links">
                <template v-for="(l, i) in f.links" :key="i">
                  <a v-if="l.type === 'modal'" class="pill fill" href="#" @click.prevent="openModal(l.key)"><Icon v-if="l.icon" :name="l.icon" /> {{ l.text }}</a>
                  <a v-else class="pill" :href="l.href" target="_blank" rel="noopener"><Icon v-if="l.icon" :name="l.icon" :width="l.icon === 'github' ? '13' : '1em'" :height="l.icon === 'github' ? '13' : '1em'" :class="{ 'gh-icon': l.icon === 'github' }" /> {{ l.text }}</a>
                </template>
              </div>
            </div>
          </article>

          <article v-else class="project wide">
            <a class="play-btn" href="#" @click.prevent="openModal(f.play.modal)" :aria-label="f.play.ariaLabel" :title="f.play.title">
              <span aria-hidden="true"><Icon name="play" /></span>
            </a>
            <div class="project-content">
              <span class="tag"><i><Icon :name="f.tag.icon" /></i> {{ f.tag.text }}</span>
              <h3>{{ f.title }}</h3>
              <p class="desc">{{ f.desc }}</p>
              <p class="detail">{{ f.detail }}</p>
              <div class="wide-tags"><span v-for="t in f.wideTags" :key="t">{{ t }}</span></div>
              <div class="project-bottom">
                <span></span>
                <div class="project-links">
                  <template v-for="(l, i) in f.links" :key="i">
                    <a v-if="l.type === 'modal'" class="pill fill" href="#" @click.prevent="openModal(l.key)"><Icon v-if="l.icon" :name="l.icon" /> {{ l.text }}</a>
                    <a v-else class="pill" :href="l.href" target="_blank" rel="noopener"><Icon v-if="l.icon" :name="l.icon" :width="l.icon === 'github' ? '13' : '1em'" :height="l.icon === 'github' ? '13' : '1em'" :class="{ 'gh-icon': l.icon === 'github' }" /> {{ l.text }}</a>
                  </template>
                </div>
              </div>
            </div>
          </article>
        </template>
      </div>
    </section>

    <section class="section" id="journey">
      <div class="section-head">
        <div>
          <div class="heading"><span class="symbol"><Icon name="bar" /></span><h2>演进与当前</h2></div>
          <div class="sub">技术方向的阶段性演进｜从算法积累到工程实践</div>
        </div>
      </div>

      <div class="timeline-panel">
        <div class="timeline-line"></div>
        <div class="timeline-grid">
          <div class="grid-item" v-for="item in homeJourney" :key="item.date">
            <div class="dot-wrapper"><div class="dot"></div></div>
            <div class="content">
              <span class="date">{{ item.date }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="directions">
      <div class="section-head">
        <div>
          <div class="heading"><span class="symbol"><Icon name="grid" /></span><h2>技术探索方向</h2></div>
          <div class="sub">以实际项目为载体，探索软件工程、AI 工具、跨端产品与视觉计算</div>
        </div>
        <a class="more" href="#">查看完整方向 →</a>
      </div>
      <div class="direction-grid">
        <div class="direction-card" v-for="d in directions" :key="d.title">
          <div class="dir-icon"></div>
          <h3>{{ d.title }}</h3>
          <p>{{ d.desc }}</p>
          <div class="dir-tags"><span v-for="t in d.tags" :key="t">{{ t }}</span></div>
        </div>
      </div>
    </section>

    <section class="section opensource-sec" id="opensource">
      <div class="os-header">
        <div>
          <div class="heading"><span class="symbol"><Icon name="star" /></span><h2>开源影响力</h2></div>
          <div class="sub">持续构建，持续分享</div>
        </div>
        <div class="os-social">
          <a v-for="s in osSocial" :key="s.label" href="#">{{ s.label }}</a>
        </div>
      </div>

      <div class="os-stats">
        <div class="os-stat" v-for="s in osStats" :key="s.label">
          <div class="os-stat-icon"><svg viewBox="0 0 24 24" v-html="s.icon"></svg></div>
          <div class="os-stat-val">{{ s.value }}</div>
          <div class="os-stat-label">{{ s.label }}</div>
        </div>
      </div>

      <div class="os-footer">
        <span class="os-snapshot">{{ osSnapshot }}</span>
      </div>
    </section>
  </main>

  <SiteFooter />
</template>
