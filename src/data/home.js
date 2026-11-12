export const hero = {
  badge: 'Personal Portal · 技术探索与开源作品',
  name: 'ZHOUYP',
  roles: ['软件工程', 'AI 工具与工程化', '跨端产品与本地优先'],
  sub: '这里记录个人在软件工程、工具设计与产品实践中的持续探索。通过开源项目分享解决问题的思路、架构取舍与可复用工具，也保留不同阶段的学习记录与技术积累。',
  platform: [
    { label: 'CSDN', value: 'ke_yi_' },
    { label: 'GitHub', value: 'zhouyp001' },
  ],
  chips: ['软件工程', 'AI 工程化', '跨端应用', '本地优先', '开源工具'],
}

export const abilities = [
  {
    title: '软件工程与系统设计',
    desc: '关注复杂问题拆解、模块边界、可靠性设计与工程结构，让系统更容易理解、维护和演进。',
    tags: ['系统设计', '架构思维', '可靠性'],
    color: 'var(--c1)',
  },
  {
    title: 'AI 工程化与开发工具',
    desc: '探索 AI 与软件开发流程的结合，将重复性工作沉淀为上下文工具、自动化流程和可复用能力。',
    tags: ['AI Context', 'Harness', '开发效率'],
    color: 'var(--c2)',
  },
  {
    title: '跨端产品与本地优先',
    desc: '关注多端协作、数据主权与弱网可靠性，通过明确的数据边界和同步机制控制复杂度。',
    tags: ['跨端应用', '本地优先', '幂等设计'],
    color: 'var(--c3)',
  },
  {
    title: '视觉计算与实用工具',
    desc: '围绕图像、视频和日常工作流制作轻量工具，重视可操作性、隐私边界与实际使用体验。',
    tags: ['计算机视觉', '视频处理', '实用工具'],
    color: 'var(--c5)',
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
        { value: '3', label: '条重点项目线' },
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
    title: 'WebAIHarnessRoom',
    subtitle: 'AI 工程工具空间 · 两个独立工具',
    kicker: 'OPEN-SOURCE TOOL ECOSYSTEM',
    time: '2026.10',
    desc: '围绕 Web AI Harness 与工程效率的开源组织。Room 负责项目归集与理念表达，具体工具保持独立，面向各自问题提供轻量、可复用的解决方案。',
    tags: ['开源组织', 'AI 工程化', 'Python', 'CLI / GUI'],
    cover: { type: 'generated', theme: 'harness' },
    children: [
      {
        title: 'GPC · GenerateProjectContext',
        desc: '将代码项目整理为适合 AI 理解的 Markdown 上下文，包含语言感知降噪、AST 结构摘要与 Git 历史汇总。',
        actions: [
          { type: 'modal', key: 'gpc', label: '详细演示', primary: true },
          { type: 'link', href: 'https://github.com/WebAIHarnessRoom/GenerateProjectContext', label: 'GitHub 仓库' },
        ],
      },
      {
        title: 'mkstruct · 项目结构创建',
        desc: '将 tree 风格的结构文本转换为真实目录与空文件，支持结构识别、纠错和幂等安全操作。',
        actions: [
          { type: 'modal', key: 'mkstruct', label: '详细演示', primary: true },
          { type: 'link', href: 'https://github.com/WebAIHarnessRoom/mkstruct', label: 'GitHub 仓库' },
        ],
      },
    ],
    actions: [{ type: 'link', href: 'https://webaiharnessroom.github.io/', label: '组织门户', primary: true }],
  },
  {
    title: 'just-did',
    subtitle: '本地优先的人生日志 · 桌面端 + 手机端',
    kicker: 'CROSS-PLATFORM PRODUCT',
    time: '2026.06',
    desc: '以本地数据为中心的跨端记录系统。桌面端作为权威数据源，手机端负责便捷记录；通过两阶段同步、批次幂等与启动恢复降低异常情况下的数据风险。',
    tags: ['跨端应用', '本地优先', '可靠性设计', 'C++ / Kotlin'],
    cover: { type: 'generated', theme: 'justdid' },
    children: [
      {
        title: 'just-did-desktop · 桌面端',
        desc: '负责本地数据管理与权威存储，提供桌面记录和同步服务。',
        actions: [{ type: 'link', href: 'https://github.com/just-did/just-did-desktop', label: 'GitHub 仓库' }],
      },
      {
        title: 'just-did-app · 手机端',
        desc: '通过扫码连接桌面端，提交记录批次并查看日历与日报。',
        actions: [{ type: 'link', href: 'https://github.com/just-did/just-did-app', label: 'GitHub 仓库' }],
      },
    ],
    actions: [
      { type: 'modal', key: 'did', label: '产品演示', primary: true },
      { type: 'link', href: 'https://just-did.zhouyp.top/', label: '产品门户' },
    ],
  },
  {
    title: 'ZPlateBlur',
    layout: 'wide',
    subtitle: '本地视频车牌检测与脱敏工具',
    kicker: 'LOCAL VISION UTILITY',
    time: '2025.08',
    desc: '面向本地视频的车牌检测与模糊处理工具，支持跳帧加速及 CPU / GPU 自适应，强调视频数据留在本地处理。',
    tags: ['Python', '计算机视觉', 'YOLO', '本地隐私'],
    cover: { type: 'image', src: '/img/plateblur.gif', alt: 'ZPlateBlur 车牌隐藏演示' },
    actions: [
      { type: 'modal', key: 'plateblur', label: '详细演示', primary: true },
      { type: 'link', href: 'https://github.com/zhouyp001/PlateBlur', label: 'GitHub 仓库' },
    ],
  },
]

export const timeline = {
  variant: 'home',
  items: [
    { date: '2017 — 2018', title: '写作起点', desc: 'ACM竞赛过程中产生的算法与数据结构笔记，POJ/HDU 题解，排序与查找树。' },
    { date: '2019 — 2022', title: 'Java Web 与工程化', desc: 'KEYI-BLOG、离线 OCR、博客迁移脚本，Spring / MyBatis / Shiro 分层架构。' },
    { date: '2022 — 2024', title: '高并发架构与业务系统', desc: '缓存结构设计、系统架构、稳定性与性能；以 Redis 缓存文章作为公开证据。' },
    { date: '2024 — 2026', title: '视频流 + AI 工程化与本地优先', desc: 'ZVisionEdge、PlateBlur、just-did、WebAIHarnessRoom；端侧推理、AI 上下文工程。' },
  ],
}

export const current = {
  left: {
    title: '当前关注',
    text: '持续迭代 AI 工程工具、跨端本地优先产品与端侧视觉计算，也关注系统设计、工程效率和可靠性。',
  },
  right: {
    title: '最近状态',
    lines: ['just-did desktop v1.1.1 / app v1.0.3', 'mkstruct / GPC v0.1.0', '最近更新 2026-11'],
  },
}

