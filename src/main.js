import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes, scrollBehavior } from './router'

// 样式按原页面加载顺序全局引入：main → projects → csdn → modal
import './styles/main.css'
import './styles/projects.css'
import './styles/csdn.css'
import './styles/modal.css'

// vite-ssg 约定：导出名为 createApp 的工厂函数
// - 构建（Node）：vite-ssg 用它为每条路由生成静态 HTML
// - 开发（浏览器）：vite-ssg 会用它挂载，router 自动使用 web history
export const createApp = ViteSSG(App, { routes, scrollBehavior })