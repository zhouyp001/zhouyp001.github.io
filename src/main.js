import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 样式按原页面加载顺序全局引入：main → projects → csdn → modal
import './styles/main.css'
import './styles/projects.css'
import './styles/csdn.css'
import './styles/modal.css'

createApp(App).use(router).mount('#app')
