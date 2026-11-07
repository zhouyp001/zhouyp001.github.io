export const hero = {
  badge: 'Personal Portal · 技术实践与开源分享',
  name: 'ZHOUYP',
  roles: ['Java 高并发与架构', '视频流与 AI 工程化', '开源分享'],
  sub: '6 年 Java 开发经验，其中 3 年架构、2 年视频流 + AI 工程化经验；有高并发系统架构开发经验。熟悉 Java 生态，能使用 Python、前端、C++ 进行开发。GitHub 开源 just-did（人生日志）与 WebAIHarnessRoom（驾驭工程）两个系列产品，以及若干小工具与实践分享。',
  platform: [
    { label: 'CSDN', value: 'ke_yi_' },
    { label: 'GitHub', value: 'zhouyp001' },
  ],
  chips: ['Java 6 年', '架构 3 年', '视频流 + AI 2 年', '高并发', 'Python / 前端 / C++', '开源分享'],
}

export const abilities = [
  {
    title: 'Java 与高并发架构',
    desc: '6 年 Java、3 年架构，做过高并发系统架构与缓存结构设计。',
    tags: ['Java', '高并发', '系统架构'],
    color: 'var(--c1)',
  },
  {
    title: '视频流与 AI 工程化',
    desc: '2 年视频流 + AI 工程化，覆盖端侧推理、视频脱敏与性能监控。',
    tags: ['视频流', '端侧推理', '机器学习'],
    color: 'var(--c2)',
  },
  {
    title: '跨端与本地优先',
    desc: '桌面权威数据源、手机记录端、两阶段同步与按批 ID 幂等提交。',
    tags: ['跨端', '两阶段同步', '幂等设计'],
    color: 'var(--c3)',
  },
  {
    title: '工具化与工程效率',
    desc: 'CLI/GUI、代码上下文生成、打包流程 Skill 化。',
    tags: ['CLI/GUI', 'AI Context', 'Agent Skill'],
    color: 'var(--c5)',
  },
]

export const orgs = [
  {
    name: 'just-did',
    em: '人生日志',
    color: 'var(--c2)',
    descHtml: '<b>功能：</b>本地优先的跨端人生日志系统，桌面端唯一权威数据源、手机端扫码记录。<br><b>可靠性：</b>两阶段同步、按批 ID 幂等提交与启动自动恢复，详见门户可靠性页。',
    actions: [
      { label: '门户', href: 'https://just-did.zhouyp.top/' },
      { label: '可靠性', href: 'https://just-did.zhouyp.top/reliability.html' },
      { label: 'GitHub 组织', href: 'https://github.com/just-did' },
    ],
  },
  {
    name: 'WebAIHarnessRoom',
    em: '驾驭工程',
    color: 'var(--c1)',
    descHtml: '<b>功能：</b>面向开源分享的 Web AI Harness 工具集，Harness 自治、Room 只做归集。<br><b>工程：</b>工具均零第三方依赖、CLI/GUI 双形态。',
    actions: [
      { label: '门户', href: 'https://webaiharnessroom.github.io/' },
      { label: 'GitHub 组织', href: 'https://github.com/WebAIHarnessRoom' },
    ],
  },
]

export const dataStrip = {
  footNote: '截至 2026-11 快照',
  blocks: [
    {
      title: 'CSDN 写作资产',
      color: 'var(--c2)',
      items: [
        { value: '117', label: '篇文章' },
        { value: '18', label: '个专栏' },
        { value: '9', label: '年创作跨度' },
        { value: '9,043', label: '最高阅读' },
      ],
    },
    {
      title: 'GitHub 代码资产',
      color: 'var(--c1)',
      items: [
        { value: '619', label: '近一年贡献' },
        { value: '14', label: '个重点仓库' },
        { value: '2', label: '个开源组织' },
        { value: '5', label: '种语言' },
      ],
    },
  ],
  links: [
    { to: '/csdn', label: '查看 CSDN 档案' },
    { to: '/github', label: '查看 GitHub 档案' },
  ],
}

export const products = [
  {
    title: 'just-did · 人生日志',
    time: '2026.06',
    desc: '本地优先的跨端记录系统，桌面端唯一权威数据源，手机端扫码记录，两阶段同步与按批 ID 幂等提交。',
    tags: ['C++', 'Android', '可靠性'],
    cover: { type: 'image', src: '/img/did.png', alt: 'just-did 人生日志' },
    actions: [
      { type: 'modal', key: 'did', label: '详细演示', primary: true },
      { type: 'link', href: 'https://just-did.zhouyp.top/', label: '门户' },
    ],
  },
  {
    title: 'GPC · GenerateProjectContext',
    time: '2026.10',
    desc: '把任意代码项目整理成 Markdown 上下文，语言感知降噪、AST 结构摘要、Git 历史汇总。',
    tags: ['Python', 'AI Context'],
    cover: { type: 'image', src: '/img/gpc.png', alt: 'GPC' },
    actions: [
      { type: 'modal', key: 'gpc', label: '详细演示', primary: true },
      { type: 'link', href: 'https://webaiharnessroom.github.io/', label: '门户' },
    ],
  },
  {
    title: 'mkstruct',
    time: '2026.10',
    desc: 'tree 风格结构文本一键生成真实目录与空文件，自动识别与纠错、行内注释忽略、幂等安全。',
    tags: ['Python', 'CLI/GUI'],
    cover: { type: 'image', src: '/img/mkstruct.png', alt: 'mkstruct' },
    actions: [
      { type: 'modal', key: 'mkstruct', label: '详细演示', primary: true },
      { type: 'link', href: 'https://webaiharnessroom.github.io/', label: '门户' },
    ],
  },
  {
    title: '车牌隐藏 · 本地视频脱敏',
    time: '2025.08',
    desc: '本地视频车牌检测与高斯模糊，跳帧加速、CPU/GPU 自适应，数据不出设备。',
    tags: ['Python', 'YOLO'],
    cover: { type: 'image', src: '/img/plateblur.gif', alt: '车牌隐藏' },
    actions: [{ type: 'modal', key: 'plateblur', label: '详细演示', primary: true }],
  },
  {
    title: '智能猫笼 · Three.js 数字孪生',
    time: '2025.05',
    desc: '猫砂盆控制前端，三维展示设备状态，与 ESP32 端侧实现交互。',
    tags: ['Three.js', '3D'],
    cover: { type: 'image', src: '/img/znml.gif', alt: '智能猫笼' },
    actions: [{ type: 'link', href: 'https://szls-msp.zhouyp.top/', label: '前往', primary: true }],
  },
  {
    title: '宫格相册生成器',
    time: '2025.03',
    desc: '把照片排成可分享的宫格相册，关注视觉布局与组件化。',
    tags: ['在线工具'],
    cover: { type: 'image', src: '/img/gal.png', alt: '宫格相册生成器' },
    actions: [{ type: 'link', href: 'https://gal.zhouyp.top/', label: '前往', primary: true }],
  },
  {
    title: '内网截屏翻译 · 离线 OCR',
    time: '2022.11',
    desc: '无网环境下截图取字与翻译，解决内网文字不可复制的问题。',
    tags: ['Python', '离线OCR'],
    cover: { type: 'image', src: '/img/rtis.png', alt: '内网截屏翻译' },
    actions: [{ type: 'modal', key: 'rtis', label: '详细演示', primary: true }],
  },
  {
    title: 'KEYI-BLOG · Java Web 博客系统',
    time: '2020.10',
    desc: 'Spring / MyBatis / Shiro 分层架构实践，早期全栈项目。',
    tags: ['Java', 'Spring', '全栈'],
    cover: { type: 'text', title: 'KEYI-BLOG', sub: 'Java Web · 早期全栈' },
    actions: [{ type: 'modal', key: 'blog', label: '开发过程', primary: true }],
  },
]

export const timeline = {
  variant: 'home',
  items: [
    { date: '2017 — 2018', title: '写作起点', desc: '算法与数据结构笔记，POJ/HDU 题解，排序与查找树。' },
    { date: '2019 — 2022', title: 'Java Web 与工程化', desc: 'KEYI-BLOG、离线 OCR、博客迁移脚本，Spring / MyBatis / Shiro 分层架构。' },
    { date: '2022 — 2024', title: '高并发架构与业务系统', desc: '缓存结构设计、系统架构、稳定性与性能；以 Redis 缓存文章作为公开证据。' },
    { date: '2024 — 2026', title: '视频流 + AI 工程化与本地优先', desc: 'ZVisionEdge、PlateBlur、just-did、WebAIHarnessRoom；端侧推理、AI 上下文工程。' },
  ],
}

export const current = {
  left: {
    title: '当前关注',
    text: '维护 just-did 与 WebAIHarnessRoom；端侧实时推理；AI 辅助工程；高并发缓存与稳定性。',
  },
  right: {
    title: '最近状态',
    lines: ['just-did desktop v1.1.1 / app v1.0.3', 'mkstruct / GPC v0.1.0', '最近更新 2026-11'],
  },
}

export const about = {
  rows: [
    {
      label: '身份',
      html: 'Java 高并发与架构 / 视频流与 AI 工程化 / 开源分享。CSDN <code>ke_yi_</code>，GitHub <code>zhouyp001</code>。',
    },
    {
      label: '可合作方向',
      html: '高并发系统架构、视频流 + AI 工程化、跨端工具、开源工具链。欢迎技术交流、项目合作与工作机会。',
    },
  ],
  actions: [
    { label: '邮件', href: 'mailto:ke_yi_zhou@163.com' },
    { label: 'GitHub', href: 'https://github.com/zhouyp001' },
    { label: 'CSDN', href: 'https://blog.csdn.net/ke_yi_' },
    { label: 'just-did 门户', href: 'https://just-did.zhouyp.top/' },
    { label: 'WebAIHarnessRoom 门户', href: 'https://webaiharnessroom.github.io/' },
  ],
}