// 项目数据：首页精选项目（3）、项目页产品卡（8）、GitHub 组织（2）、仓库矩阵（5 组 14 卡）
// 字段与文案逐字对照 b1/index.html 与 b1/projects.html

export const featuredProjects = [
  {
    key: 'wahr',
    tag: { icon: 'hex-fill', text: '平台' },
    title: 'WebAIHarnessRoom',
    desc: 'AI 工具组织平台',
    summary: '聚焦 Web AI Harness 与开发效率，持续构建 GPC、mkstruct、ds-code-nav 等工程工具。',
    links: [
      { type: 'modal', key: 'gpc', icon: 'play', cls: 'pill fill', text: '演示' },
      { type: 'href', href: 'https://webaiharnessroom.github.io/', cls: 'pill', text: '⌂ 官网' },
    ],
  },
  {
    key: 'did',
    teal: true,
    tag: { icon: 'hex-fill', text: '产品' },
    title: 'just-did',
    desc: '本地优先的人生日志 · 桌面端 + 手机端',
    summary: '以本地数据为核心的跨端记录系统，通过两阶段同步、批次幂等和启动恢复机制保障数据可靠。',
    links: [
      { type: 'modal', key: 'did', icon: 'play', cls: 'pill fill', text: '演示' },
      { type: 'href', href: 'https://just-did.zhouyp.top/', cls: 'pill', text: '⌂ 官网' },
    ],
  },
  {
    key: 'plateblur',
    wide: true,
    tag: { icon: 'tool', text: '实用工具' },
    title: 'ZPlateBlur',
    desc: '本地视频车牌检测与脱敏工具',
    detail: '面向本地视频的车牌检测与脱敏工具，支持跳帧处理及 CPU/GPU 自适应，兼顾处理效率与隐私保护。',
    wideTags: ['计算机视觉', 'YOLO', '本地隐私'],
    play: { modal: 'plateblur', ariaLabel: '播放 ZPlateBlur 演示视频', title: '播放演示视频' },
    links: [
      { type: 'modal', key: 'plateblur', icon: 'play', cls: 'pill fill', text: '演示' },
      { type: 'href', href: 'https://github.com/zhouyp001/PlateBlur', cls: 'pill', text: 'GitHub', icon: 'github' },
    ],
  },
]

export const products = [
  {
    key: 'did',
    cover: { src: '/assets/images/projects/did.png', alt: 'just-did 人生日志', text: 'just-did', sub: '人生日志 · 本地优先' },
    title: 'just-did · 人生日志',
    time: '2026.06',
    descHtml: '本地优先的跨端记录系统：桌面端作为唯一权威数据源，手机端扫码录入，并通过两阶段同步与批次 ID 幂等提交保障数据一致性。<strong>手机端已上架华为应用商店</strong>',
    tags: ['C++', 'Android', '可靠性'],
    actions: [
      { type: 'modal', key: 'did', cls: 'btn-sm primary', text: '详细演示' },
      { type: 'href', href: 'https://just-did.zhouyp.top/', cls: 'btn-sm', text: '门户' },
    ],
  },
  {
    key: 'gpc',
    cover: { src: '/assets/images/projects/gpc.png', alt: 'GPC', text: 'GPC', sub: '代码上下文生成' },
    title: 'GPC · 代码上下文生成',
    time: '2026.10',
    desc: '将代码项目转化为结构化 Markdown 上下文，结合语言感知降噪、AST 结构摘要与 Git 历史，帮助 AI 和开发者快速理解项目。',
    tags: ['Python', 'Harness', 'CLI/GUI'],
    actions: [
      { type: 'modal', key: 'gpc', cls: 'btn-sm primary', text: '详细演示' },
      { type: 'href', href: 'https://webaiharnessroom.github.io/', cls: 'btn-sm', text: '门户', icon: 'github' },
    ],
  },
  {
    key: 'mkstruct',
    cover: { src: '/assets/images/projects/mkstruct.png', alt: 'mkstruct', text: 'mkstruct', sub: '项目结构创建' },
    title: 'mkstruct · 项目结构创建',
    time: '2026.10',
    desc: '将 tree 风格的结构描述快速生成真实目录与空文件，支持缩进识别、输入纠错、行内注释处理及安全重复执行。',
    tags: ['Python', 'Harness', 'CLI/GUI'],
    actions: [
      { type: 'modal', key: 'mkstruct', cls: 'btn-sm primary', text: '详细演示' },
      { type: 'href', href: 'https://webaiharnessroom.github.io/', cls: 'btn-sm', text: '门户', icon: 'github' },
    ],
  },
  {
    key: 'plateblur',
    cover: { src: '/assets/images/projects/plateblur.gif', alt: '车牌隐藏', text: 'ZPlateBlur', sub: '本地视频脱敏' },
    title: 'ZPlateBlur · 车牌隐藏',
    time: '2025.08',
    desc: '在本地完成视频车牌检测与高斯模糊脱敏，支持跳帧加速和 CPU/GPU 自适应，视频数据无需上传。',
    tags: ['Python', 'YOLO'],
    actions: [
      { type: 'modal', key: 'plateblur', cls: 'btn-sm primary', text: '详细演示' },
    ],
  },
  {
    key: 'szls',
    cover: { src: '/assets/images/projects/znml.gif', alt: '智能猫笼', text: 'szls-msp', sub: '智能猫笼 · 三维可视化' },
    title: 'szls-msp · 智能猫笼',
    time: '2025.05',
    desc: '猫砂盆控制前端，三维展示设备状态，与 ESP32 端侧实现交互。',
    tags: ['Three.js', 'ESP32'],
    actions: [
      { type: 'href', href: 'https://szls-msp.zhouyp.top/', cls: 'btn-sm primary', text: '前往' },
    ],
  },
  {
    key: 'gal',
    cover: { src: '/assets/images/projects/gal.png', alt: '宫格相册生成器', text: 'GAL', sub: '宫格相册生成器' },
    title: 'GAL · 宫格相册生成器',
    time: '2025.03',
    desc: '将照片快速编排为适合分享的宫格相册，探索灵活布局与组件化实现。',
    tags: ['在线工具'],
    actions: [
      { type: 'href', href: 'https://gal.zhouyp.top/', cls: 'btn-sm primary', text: '前往' },
    ],
  },
  {
    key: 'rtis',
    cover: { src: '/assets/images/projects/rtis.png', alt: '内网截屏翻译', text: 'KEYI-RTIS', sub: '内网截屏翻译 · 离线 OCR' },
    title: 'KEYI-RTIS · 内网截屏翻译',
    time: '2022.11',
    desc: '面向无网络环境的截图 OCR 与翻译工具，解决内网图片文字难以复制和检索的问题。',
    tags: ['Python', 'Tesseract-OCR'],
    actions: [
      { type: 'modal', key: 'rtis', cls: 'btn-sm primary', text: '详细演示' },
    ],
  },
  {
    key: 'blog',
    cover: { textOnly: true, text: 'KEYI-BLOG', sub: 'Java Web · 早期全栈' },
    title: 'KEYI-BLOG · 博客系统',
    time: '2020.10',
    desc: '基于 Spring、MyBatis 与 Shiro 的 Java Web 博客系统，记录早期全栈开发与分层架构实践。',
    tags: ['Java', 'Spring', '全栈'],
    actions: [
      { type: 'modal', key: 'blog', cls: 'btn-sm primary', text: '开发过程' },
    ],
  },
]

export const orgs = [
  {
    name: 'just-did',
    color: 'var(--c2)',
    desc: '面向开源协作的本地优先跨端记录系统。数据保留在用户设备内，由桌面端维护唯一权威数据；桌面端采用四层静态库并支持便携打包，手机端 Domain 层与 Android 平台解耦。',
    meta: 'C++17 / Qt 6.8 / Kotlin / Compose',
    href: 'https://github.com/just-did',
  },
  {
    name: 'WebAIHarnessRoom',
    color: 'var(--c6)',
    desc: '面向开源协作的 Web AI Harness 工具集，强调 Harness 自治与工具职责清晰，而非将 Web AI 简化为 API 调用；工具支持 CLI/GUI 双形态，并保持零第三方依赖。',
    meta: 'Python / CLI / GUI',
    href: 'https://github.com/WebAIHarnessRoom',
  },
]

export const repoGroups = [
  {
    title: '本地优先跨端系统',
    color: 'var(--c2)',
    repos: [
      {
        name: 'just-did-desktop',
        badge: 'v1.1.1',
        desc: '桌面端，唯一权威数据源。悬浮输入窗、两阶段同步、启动自动恢复、4 个 REST 接口、一键便携打包。',
        tags: ['C++17', 'Qt 6.8', 'SQLite', 'HTTP Server'],
        href: 'https://github.com/just-did/just-did-desktop',
      },
      {
        name: 'just-did-app',
        badge: 'v1.0.3',
        desc: '手机记录端。扫码连接、ZIP 批数据按批 ID 幂等提交、日历状态圆点、日报拉取与缓存管理。',
        tags: ['Kotlin', 'Compose', 'Hilt', 'Room'],
        href: 'https://github.com/just-did/just-did-app',
      },
    ],
  },
  {
    title: 'AI 工程化与元工具',
    color: 'var(--c6)',
    repos: [
      {
        name: 'mkstruct',
        badge: 'v0.1.0',
        desc: 'tree 风格结构文本一键转换为真实目录和空文件。CLI + GUI 双形态，缩进自动识别、行内注释忽略、简写自动展开、幂等安全、零第三方依赖。',
        tags: ['Python', 'CLI', 'GUI', '零依赖'],
        href: 'https://github.com/WebAIHarnessRoom/mkstruct',
      },
      {
        name: 'GenerateProjectContext',
        badge: 'v0.1.0',
        desc: '任意代码项目整理为 Markdown 上下文文档。语言感知降噪、AST 代码结构摘要、Git 历史汇总，CLI/API 结果字节级一致。',
        tags: ['Python', 'AST', 'CLI', '零依赖'],
        href: 'https://github.com/WebAIHarnessRoom/GenerateProjectContext',
      },
      {
        name: 'nuitka-pack-skill',
        badge: 'Skill',
        badgeDim: true,
        desc: 'Claude Code Skill：把 PySide6/PyQt 应用用 Nuitka 编译为 Windows 独立 exe 的隐性知识封装为可调用能力，含 90 分钟长编译监控。',
        tags: ['Python', 'Nuitka', 'Claude Code'],
        href: 'https://github.com/zhouyp001/nuitka-pack-skill',
      },
    ],
  },
  {
    title: '端侧智能与隐私保护',
    color: 'var(--c3)',
    repos: [
      {
        name: 'ZVisionEdge',
        badge: '已发布',
        badgeDim: true,
        desc: 'Android 端侧实时物体检测。YUV_420_888 直通推理、按类别独立 NMS、帧抽配置、完整性能监控。骁龙 8 Gen 3 上约 25ms/帧。',
        tags: ['Kotlin', 'CameraX', 'YOLOv8n', 'ONNX Runtime'],
        href: 'https://github.com/zhouyp001/ZVisionEdge',
      },
      {
        name: 'PlateBlur',
        badge: '本地隐私',
        badgeDim: true,
        desc: '本地视频车牌检测与高斯模糊。跳帧加速、CPU/GPU 自适应、实时资源监控，数据不出设备。',
        tags: ['Python', 'PySide6', 'YOLO', 'OpenCV'],
        href: 'https://github.com/zhouyp001/PlateBlur',
      },
      {
        name: 'keyi-hide-license-plate',
        badge: '实验',
        badgeDim: true,
        desc: '车牌隐藏/脱敏方向项目，与 PlateBlur 同属“本地隐私保护”问题域。',
        tags: ['Python', '隐私脱敏'],
        href: 'https://github.com/zhouyp001/keyi-hide-license-plate',
      },
    ],
  },
  {
    title: '可视化与工具实验',
    color: 'var(--c5)',
    repos: [
      {
        name: 'grid-album-layout',
        badge: '组件',
        badgeDim: true,
        desc: '宫格相册排版工具，关注视觉布局与组件化。',
        tags: ['JavaScript', 'CSS Grid'],
        href: 'https://github.com/zhouyp001/grid-album-layout',
      },
      {
        name: 'szls-msp',
        badge: '前端',
        badgeDim: true,
        desc: 'Three.js 数字孪生猫砂盆控制前端，三维展示与交互。',
        tags: ['Three.js', 'JavaScript', '3D'],
        href: 'https://github.com/zhouyp001/szls-msp',
      },
      {
        name: 'pool-for-accumulation-app',
        badge: '应用',
        badgeDim: true,
        desc: '积累池，uni-app Android 应用。',
        tags: ['uni-app', 'Vue', 'Android'],
        href: 'https://github.com/zhouyp001/pool-for-accumulation-app',
      },
    ],
  },
  {
    title: '历史全栈与早期项目',
    color: 'var(--muted)',
    repos: [
      {
        name: 'KEYI-BLOG',
        badge: '归档',
        badgeDim: true,
        desc: 'Java Web 博客系统，早期全栈与分层架构实践。2022 年活跃期核心项目。',
        tags: ['Java', 'Spring', 'MyBatis', 'Shiro'],
        href: 'https://github.com/zhouyp001/KEYI-BLOG',
      },
      {
        name: 'KEYI-RTIS',
        badge: '归档',
        badgeDim: true,
        desc: '离线截图 OCR，解决无网络环境下图片文字不可复制的问题。',
        tags: ['Python', 'OCR', '离线'],
        href: 'https://github.com/zhouyp001/KEYI-RTIS',
      },
      {
        name: 'ShiftBlogByPython',
        badge: '归档',
        badgeDim: true,
        desc: 'Python 博客迁移/处理脚本，早期自动化实践。',
        tags: ['Python', '自动化'],
        href: 'https://github.com/zhouyp001/ShiftBlogByPython',
      },
    ],
  },
]
