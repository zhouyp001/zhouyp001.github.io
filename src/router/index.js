import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ProjectsPage from '../pages/ProjectsPage.vue'
import CsdnPage from '../pages/CsdnPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/projects', name: 'projects', component: ProjectsPage },
    { path: '/csdn', name: 'csdn', component: CsdnPage },
    // 旧静态页面路径兼容
    { path: '/index.html', redirect: '/' },
    { path: '/projects.html', redirect: '/projects' },
    { path: '/csdn.html', redirect: '/csdn' },
    // 未知路径回首页
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) return { el: to.hash }
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

export default router
