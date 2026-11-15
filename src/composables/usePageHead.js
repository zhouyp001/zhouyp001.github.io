import { onMounted } from 'vue'

// 每个路由挂载后同步 document.title 与 meta[name="description"]（与原三页各自的值一致）
export function usePageHead(title, description) {
  onMounted(() => {
    document.title = title
    if (description) {
      let meta = document.querySelector('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', 'description')
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', description)
    }
  })
}
