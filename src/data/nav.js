// 导航数据：三个路由 + 各页移动菜单锚点项（与原三页 mobile-menu 一致）

export const navRoutes = [
  { label: '首页', to: { path: '/' } },
  { label: '我的项目', to: { path: '/projects' } },
  { label: 'CSDN归档', to: { path: '/csdn' } },
]

export const mobileMenus = {
  '/': [
    { label: '首页', to: { path: '/' } },
    { label: '我的项目', to: { path: '/projects' } },
    { label: 'CSDN归档', to: { path: '/csdn' } },
    { label: '演进与当前', to: { path: '/', hash: '#journey' } },
    { label: '技术探索方向', to: { path: '/', hash: '#directions' } },
    { label: '开源影响力', to: { path: '/', hash: '#opensource' } },
  ],
  '/projects': [
    { label: '首页', to: { path: '/' } },
    { label: '我的项目', to: { path: '/projects' } },
    { label: 'CSDN归档', to: { path: '/csdn' } },
    { label: '主要项目', to: { path: '/projects', hash: '#products' } },
    { label: 'GitHub 组织', to: { path: '/projects', hash: '#orgs' } },
    { label: '仓库矩阵', to: { path: '/projects', hash: '#repos' } },
    { label: '活动时间线', to: { path: '/projects', hash: '#timeline' } },
    { label: '开源影响力', to: { path: '/', hash: '#opensource' } },
  ],
  '/csdn': [
    { label: '首页', to: { path: '/' } },
    { label: '我的项目', to: { path: '/projects' } },
    { label: 'CSDN归档', to: { path: '/csdn' } },
    { label: '数据概览', to: { path: '/csdn', hash: '#overview' } },
    { label: '创作历程', to: { path: '/csdn', hash: '#journey' } },
    { label: '内容方向', to: { path: '/csdn', hash: '#topics' } },
    { label: '精选文章', to: { path: '/csdn', hash: '#articles' } },
  ],
}
