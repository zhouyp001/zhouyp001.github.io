export const hero = {
  badge: 'GitHub · 技术实践与生产级工具分享',
  name: 'zhouyp001',
  kicker: '本地优先 · 端侧智能 · AI 协作 · 元工具',
  taglinePrefix: '这里既是长期技术实践的一个切面，也是生产级工具的开源分享：既有可直接交付使用的完整系统，也有快速验证想法的实验。它记录真实的问题与取舍，',
  taglineStrong: '是技术画像的一部分，而非全部',
  chips: [
    { num: '619', label: '近一年贡献' },
    { num: '2', label: '开源组织' },
    { num: '14', label: '重点仓库' },
    { num: '5', label: '主语言' },
  ],
}

export const orgs = [
  {
    name: 'just-did',
    href: 'https://github.com/just-did',
    color: 'var(--c2)',
    desc: '面向开源分享的跨端本地优先记录系统。数据绝不出网，电脑端是唯一权威数据源；桌面端四层静态库、一键便携打包，手机端 Domain 层零 Android 依赖。',
    meta: 'C++17 / Qt 6.8 / Kotlin / Compose',
  },
  {
    name: 'WebAIHarnessRoom',
    href: 'https://github.com/WebAIHarnessRoom',
    color: 'var(--c6)',
    desc: '面向开源分享的 Web AI Harness 工具集。不把 Web AI 降格为纯 API 调用；Harness 自治，Room 只做归集。两个工具均为零第三方依赖、CLI/GUI 双形态。',
    meta: 'Python / CLI / GUI',
  },
]

export const projectGroups = [
  {
    title: '本地优先跨端系统',
    color: 'var(--c2)',
    projects: [
      {
        name: 'just-did-desktop',
        badge: { text: 'v1.1.1' },
        desc: '桌面端，唯一权威数据源。悬浮输入窗、两阶段同步、启动自动恢复、4 个 REST 接口、一键便携打包。',
        tags: ['C++17', 'Qt 6.8', 'SQLite', 'HTTP Server'],
        href: 'https://github.com/just-did/just-did-desktop',
      },
      {
        name: 'just-did-app',
        badge: { text: 'v1.0.3' },
        desc: '手机记录端。扫码连接、ZIP 批数据按批 ID 幂等提交、日历状态圆点、日报拉取与缓存管理。',
        tags: ['Kotlin', 'Compose', 'Hilt', 'Room'],
        href: 'https://github.com/just-did/just-did-app',
      },
    ],
  },
  {
    title: 'AI 工程化与元工具',
    color: 'var(--c6)',
    projects: [
      {
        name: 'mkstruct',
        badge: { text: 'v0.1.0' },
        desc: 'tree 风格结构文本一键转换为真实目录和空文件。CLI + GUI 双形态，缩进自动识别、行内注释忽略、简写自动展开、幂等安全、零第三方依赖。',
        tags: ['Python', 'CLI', 'GUI', '零依赖'],
        href: 'https://github.com/WebAIHarnessRoom/mkstruct',
      },
      {
        name: 'GenerateProjectContext',
        badge: { text: 'v0.1.0' },
        desc: '任意代码项目整理为 Markdown 上下文文档。语言感知降噪、AST 代码结构摘要、Git 历史汇总，CLI/API 结果字节级一致。',
        tags: ['Python', 'AST', 'CLI', '零依赖'],
        href: 'https://github.com/WebAIHarnessRoom/GenerateProjectContext',
      },
      {
        name: 'nuitka-pack-skill',
        badge: { text: 'Skill', dim: true },
        desc: 'Claude Code Skill：把 PySide6/PyQt 应用用 Nuitka 编译为 Windows 独立 exe 的隐性知识封装为可调用能力，含 90 分钟长编译监控。',
        tags: ['Python', 'Nuitka', 'Claude Code'],
        href: 'https://github.com/zhouyp001/nuitka-pack-skill',
      },
    ],
  },
  {
    title: '端侧智能与隐私保护',
    color: 'var(--c3)',
    projects: [
      {
        name: 'ZVisionEdge',
        badge: { text: '已发布', dim: true },
        desc: 'Android 端侧实时物体检测。YUV_420_888 直通推理、按类别独立 NMS、帧抽配置、完整性能监控。骁龙 8 Gen 3 上约 25ms/帧。',
        tags: ['Kotlin', 'CameraX', 'YOLOv8n', 'ONNX Runtime'],
        href: 'https://github.com/zhouyp001/ZVisionEdge',
      },
      {
        name: 'PlateBlur',
        badge: { text: '本地隐私', dim: true },
        desc: '本地视频车牌检测与高斯模糊。跳帧加速、CPU/GPU 自适应、实时资源监控，数据不出设备。',
        tags: ['Python', 'PySide6', 'YOLO', 'OpenCV'],
        href: 'https://github.com/zhouyp001/PlateBlur',
      },
      {
        name: 'keyi-hide-license-plate',
        badge: { text: '实验', dim: true },
        desc: '车牌隐藏/脱敏方向项目，与 PlateBlur 同属“本地隐私保护”问题域。',
        tags: ['Python', '隐私脱敏'],
        href: 'https://github.com/zhouyp001/keyi-hide-license-plate',
      },
    ],
  },
  {
    title: '可视化与工具实验',
    color: 'var(--c5)',
    projects: [
      {
        name: 'grid-album-layout',
        badge: { text: '组件', dim: true },
        desc: '宫格相册排版工具，关注视觉布局与组件化。',
        tags: ['JavaScript', 'CSS Grid'],
        href: 'https://github.com/zhouyp001/grid-album-layout',
      },
      {
        name: 'szls-msp',
        badge: { text: '前端', dim: true },
        desc: 'Three.js 数字孪生猫砂盆控制前端，三维展示与交互。',
        tags: ['Three.js', 'JavaScript', '3D'],
        href: 'https://github.com/zhouyp001/szls-msp',
      },
      {
        name: 'pool-for-accumulation-app',
        badge: { text: '应用', dim: true },
        desc: '积累池，uni-app Android 应用。',
        tags: ['uni-app', 'Vue', 'Android'],
        href: 'https://github.com/zhouyp001/pool-for-accumulation-app',
      },
    ],
  },
  {
    title: '历史全栈与早期项目',
    color: 'var(--muted)',
    projects: [
      {
        name: 'KEYI-BLOG',
        badge: { text: '归档', dim: true },
        desc: 'Java Web 博客系统，早期全栈与分层架构实践。2022 年活跃期核心项目。',
        tags: ['Java', 'Spring', 'MyBatis', 'Shiro'],
        href: 'https://github.com/zhouyp001/KEYI-BLOG',
      },
      {
        name: 'KEYI-RTIS',
        badge: { text: '归档', dim: true },
        desc: '离线截图 OCR，解决无网络环境下图片文字不可复制的问题。',
        tags: ['Python', 'OCR', '离线'],
        href: 'https://github.com/zhouyp001/KEYI-RTIS',
      },
      {
        name: 'ShiftBlogByPython',
        badge: { text: '归档', dim: true },
        desc: 'Python 博客迁移/处理脚本，早期自动化实践。',
        tags: ['Python', '自动化'],
        href: 'https://github.com/zhouyp001/ShiftBlogByPython',
      },
    ],
  },
]

export const timeline = {
  variant: 'gh',
  items: [
    { date: '2026.11', title: '双组织门户同步更新', desc: 'WebAIHarnessRoom 门户网站（11.3）与个人门户（11.5）更新，近期活跃重心完全集中在两个组织下的新项目上。', hot: true },
    { date: '2026.10', title: 'WebAIHarnessRoom 进入活跃期', desc: 'mkstruct 于 10.28 更新，元工具线开始成型。', hot: true },
    { date: '2026.09', title: 'just-did 组织全面活跃', desc: 'just-did-desktop（9.4）、组织首页（9.7）、just-did-app（9.10）密集更新。', hot: true },
    { date: '2026.07', title: '端侧 AI + AI 工程化进入活跃期', desc: 'ZVisionEdge（7.15）与 nuitka-pack-skill（7.11）更新，技术重心开始转移。' },
    { date: '2026.04', title: '历史仓库集中整理', desc: 'KEYI-BLOG、KEYI-RTIS、ShiftBlogByPython、PlateBlur、pool-for-accumulation-app 等多个仓库同月更新，更像一次系统性的归档收尾。' },
    { date: '2022', title: 'Java Web 全栈活跃期', desc: 'KEYI-BLOG 等 Spring / MyBatis / Shiro 技术栈项目，分层架构实践。' },
    { date: '2019.09 — 2020.06', title: '图像与 OCR 方向的早期探索', desc: '草书中文书法图像数据集、传统 OCR 引擎训练模型仓库，算法兴趣的早期痕迹。' },
    { date: '2019.05', title: '最早的仓库活跃记录', desc: '个人博客 HTML 仓库，技术积累的起点。' },
  ],
}

export const techBranches = [
  { label: '端侧 AI 与计算机视觉', value: 4, width: 100, color: 'var(--c3)' },
  { label: '隐私保护与本地优先', value: 4, width: 100, color: 'var(--c2)' },
  { label: 'Android 移动应用', value: 3, width: 75, color: 'var(--c1)' },
  { label: 'AI 工程化与元工具', value: 3, width: 75, color: 'var(--c6)' },
  { label: 'Web 前端与三维可视化', value: 3, width: 75, color: 'var(--c5)' },
  { label: '自动化与脚本工具', value: 3, width: 75, color: 'var(--c4)' },
  { label: '系统与后端架构', value: 2, width: 50, color: 'var(--c4)' },
  { label: '桌面与跨端应用', value: 1, width: 25, color: 'var(--c6)' },
]

export const languages = [
  { label: 'Python', value: 6, width: 100, color: 'var(--c2)' },
  { label: 'JS / Vue / HTML', value: 3, width: 50, color: 'var(--c4)' },
  { label: 'Kotlin', value: 2, width: 33, color: 'var(--c6)' },
  { label: 'C++', value: 1, width: 17, color: 'var(--c1)' },
  { label: 'Java', value: 1, width: 17, color: 'var(--c3)' },
]

export const layers = [
  { num: 'L1', name: '语言层', count: '5 种', color: 'var(--c2)', tags: ['Python', 'Kotlin', 'JavaScript', 'C++', 'Java'] },
  { num: 'L2', name: '框架 / 运行时', count: '12 类', color: 'var(--c6)', tags: ['PySide6', 'Qt 6.8', 'Compose', 'CameraX', 'ONNX', 'OpenCV', 'Nuitka', 'Claude Code', 'Spring', 'Three.js', 'uni-app', 'SQLite'] },
  { num: 'L3', name: '领域能力', count: '9 类', color: 'var(--c3)', tags: ['本地优先架构', '端侧实时推理', 'OCR', '视频脱敏', '脚手架生成', 'AI 上下文', '三维可视化', '幂等同步', '打包自动化'] },
  { num: 'L4', name: '工程实践', count: '7 类', color: 'var(--c5)', tags: ['清洁架构', '零第三方依赖', '幂等设计', 'CLI/GUI 双形态', '知识资产化', '性能监控', 'AI 辅助开发'] },
]

export const aboutHtml = [
  '这个 GitHub 保留了 2019 年以来的 <strong>14 个重点仓库</strong>，至今持续更新。它不是按语言或技术栈陈列的仓库集合，而是一个随时间累积的实践样本——<strong>一部分项目以生产级工具为目标，并开源分享出去；另一部分则是快速验证想法的实验</strong>。共同的出发点是：把数据留在本地、让端侧推理跑得动、少花时间在重复的工程琐事上。',
  '节奏并不均匀。<strong>2019—2022 年</strong>是探索期，从 KEYI-BLOG 的 Java Web 全栈、KEYI-RTIS 的离线 OCR 到 ShiftBlogByPython 的脚本自动化，技术方向在几个领域之间游走。<strong>2026 年 4 月</strong>经历了一次集中整理，随后从 <strong>7 月起</strong>进入新的活跃期——重心转向本地优先、端侧智能和 AI 工程化，内容也从“解决自己的问题”转向“把方法沉淀成可复用的系统与工具，并进一步做成可直接交付他人的生产级工具”。',
  '14 个重点仓库大致构成三层。<strong class="about-strong-layer">主线层</strong>是当前活跃的 5 个项目，也都指向生产级工具这个目标：just-did 的桌面端与手机端是<strong>两个已发布正式版本、可一键打包交付的完整系统</strong>；WebAIHarnessRoom 下的两个元工具<strong>零第三方依赖、CLI/GUI 双形态</strong>，面向开源直接使用；nuitka-pack-skill 则把打包经验封装成<strong>可调用的 Claude Code Skill</strong>。<strong class="about-strong-layer">分支层</strong>是 6 个方向性探索：ZVisionEdge 与 PlateBlur 把推理推到端侧，keyi-hide-license-plate 延续本地脱敏，grid-album-layout、szls-msp、pool-for-accumulation-app 则是前端与跨端实验。<strong class="about-strong-layer">存档层</strong>是 3 个早期项目：KEYI-BLOG、KEYI-RTIS、ShiftBlogByPython，构成 2019—2022 年的技术积累。主线按问题域检索，分支按兴趣回溯，存档按时间线浏览。',
]

export const practices = [
  { num: 4, title: '本地优先 / 数据不出网', desc: '能端侧完成的不上云。在隐私敏感和弱网场景下，本地优先是有意识的设计选择，而不是技术限制。', repos: 'just-did ×2 · PlateBlur · ZVisionEdge' },
  { num: 2, title: '零第三方依赖', desc: '核心库不引入第三方包，降低使用与维护成本，提升可移植性。', repos: 'mkstruct · GenerateProjectContext' },
  { num: 2, title: '幂等设计', desc: 'ZIP 批数据按批 ID 幂等提交；幂等创建目录与文件，重复执行不产生副作用。', repos: 'just-did-app · mkstruct' },
  { num: 2, title: 'CLI / GUI 双形态', desc: '同一核心库同时提供命令行与图形界面，兼顾自动化脚本与手动操作场景。', repos: 'mkstruct · GenerateProjectContext' },
  { num: 2, title: '清洁架构', desc: 'Domain 层零 Android 依赖；桌面端四层静态库。业务逻辑可测试、可复用。', repos: 'just-did-app · just-did-desktop' },
  { num: 2, title: 'AI 辅助开发', desc: 'AI 被纳入真实工程流程，用于加速编码与重复性工程；架构决策与性能调优仍由人主导。', repos: 'ZVisionEdge · nuitka-pack-skill' },
  { num: 2, title: '性能监控', desc: 'FPS / 推理耗时 / CPU / 内存的实时监控，让端侧性能可观测、可调优。', repos: 'ZVisionEdge · PlateBlur' },
  { num: 1, title: '知识资产化', desc: '把踩坑经验固化为 Claude Code Skill，而不是留在个人记忆里。', repos: 'nuitka-pack-skill' },
]