export const navLinks = [
  { to: '/', label: '首页' },
  { to: '/github', label: '开源' },
  { to: '/csdn', label: '分享' },
]

export const orgLinks = [
  { href: 'https://just-did.zhouyp.top/', label: 'just-did', icon: 'github' },
  { href: 'https://webaiharnessroom.github.io/', label: 'WebAIHarnessRoom', icon: 'github' },
]

export const footerLinks = [
  { to: '/', label: '首页' },
  { to: '/github', label: 'GitHub 档案' },
  { to: '/csdn', label: 'CSDN 档案' },
  { href: 'https://just-did.zhouyp.top/', label: 'just-did ↗' },
  { href: 'https://webaiharnessroom.github.io/', label: 'WebAIHarnessRoom ↗' },
]

export const tocByRoute = {
  '/': [
    { id: 'ability', label: '能力与经验' },
    { id: 'products', label: '精选产品' },
    { id: 'journey', label: '演进与当前' },
    { id: 'about', label: '关于与联系' },
  ],
  '/github': [
    { id: 'orgs', label: 'GitHub 组织' },
    { id: 'repos', label: '仓库矩阵' },
    { id: 'timeline', label: '活动时间线' },
    { id: 'tech', label: '技术图谱' },
    { id: 'about', label: '实践档案' },
    { id: 'practice', label: '工程实践' },
  ],
  '/csdn': [
    { id: 'data', label: '数据概览' },
    { id: 'journey', label: '创作历程' },
    { id: 'topic', label: '内容方向' },
    { id: 'about', label: '写作档案' },
    { id: 'picks', label: '精选文章' },
  ],
}

export const footerByRoute = {
  '/': {
    subtitle: 'Java 高并发与架构 / 视频流与 AI 工程化 / 开源分享',
    note: '数据口径说明：CSDN 与 GitHub 数字均为 2026-11 快照；项目时间为项目开始时间；版本号来自各仓库 Releases 页面。全量数据见 GitHub / CSDN 子页。',
    rightLabel: 'CSDN',
    rightHref: 'https://blog.csdn.net/ke_yi_',
    rightText: 'blog.csdn.net/ke_yi_',
    extra: { label: 'GitHub', href: 'https://github.com/zhouyp001', text: 'github.com/zhouyp001' },
    bottomLeft: '© 2026 ZHOUYP · 个人门户',
  },
  '/github': {
    subtitle: 'GitHub 档案 · Java 高并发与架构 / 视频流与 AI 工程化 / 开源分享',
    note: '数据口径说明：619 次贡献来自 GitHub 个人主页 2026-11 快照；版本号来自各仓库 Releases 页面；仓库更新日期来自个人仓库列表与组织页面。技术分支与分层统计基于 14 个重点仓库的交叉归类，一个仓库可归属多个分支。',
    rightLabel: '个人主页',
    rightHref: 'https://github.com/zhouyp001',
    rightText: 'github.com/zhouyp001',
    bottomLeft: '© 2026 ZHOUYP · GitHub 档案',
  },
  '/csdn': {
    subtitle: 'CSDN 档案 · Java 高并发与架构 / 视频流与 AI 工程化 / 开源分享',
    note: '数据口径说明：117 篇文章、18 个专栏、9 年创作跨度、最高阅读 9,043 均为 CSDN 公开主页 2026-11 快照；文章按方向归类，一篇可同时归属多个方向。',
    rightLabel: '博客地址',
    rightHref: 'https://blog.csdn.net/ke_yi_',
    rightText: 'blog.csdn.net/ke_yi_',
    bottomLeft: '© 2026 ZHOUYP · CSDN 档案',
  },
}