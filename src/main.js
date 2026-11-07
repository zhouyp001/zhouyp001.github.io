import { ViteSSG } from 'vite-ssg'
import { createHead } from '@unhead/vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { routes, scrollBehavior } from './router'
import reveal from './directives/reveal'

import './styles/base.css'
import './styles/home.css'
import './styles/github.css'
import './styles/csdn.css'

export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior },
  ({ app }) => {
    app.use(createPinia())
    app.use(createHead())
    app.directive('reveal', reveal)
  }
)