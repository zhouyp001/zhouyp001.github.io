import HomeView from '@/views/HomeView.vue'
import GithubView from '@/views/GithubView.vue'
import CsdnView from '@/views/CsdnView.vue'

export const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/github', name: 'github', component: GithubView },
  { path: '/csdn', name: 'csdn', component: CsdnView },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

export function scrollBehavior(to, from, savedPosition) {
  if (savedPosition) return savedPosition
  if (to.hash) return { el: to.hash, top: 88, behavior: 'smooth' }
  if (to.path !== from.path) return { top: 0 }
  return {}
}