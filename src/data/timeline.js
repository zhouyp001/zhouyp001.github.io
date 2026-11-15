// 时间线数据：首页演进（4）、项目页账号活动（8，前 3 条 hot）、CSDN 创作历程（4，末条 hot）
// 对照 b1/index.html、b1/projects.html、b1/csdn.html

export const homeJourney = [
  {
    date: '2017 — 2018',
    title: '写作起点',
    desc: '从 ACM 竞赛切入，持续整理算法与数据结构笔记，涵盖 POJ/HDU 题解、排序算法和查找树。',
  },
  {
    date: '2019 — 2022',
    title: 'Java Web & 工程化',
    desc: '围绕 Java Web 开展工程实践，涉及 KEYI-BLOG、离线 OCR、博客迁移工具，以及 Spring/MyBatis/Shiro 分层架构。',
  },
  {
    date: '2022 — 2024',
    title: '高并发架构与业务系统',
    desc: '关注缓存结构、系统架构、稳定性与性能优化，并通过 Redis 缓存设计等实践持续沉淀经验。',
  },
  {
    date: '2024 — 2026',
    title: '视频流 + AI 工程化与本地优先',
    desc: '项目逐步聚焦端侧推理、本地优先应用与 AI 上下文工程，代表项目包括 ZVisionEdge、PlateBlur、just-did 和 WebAIHarnessRoom。',
  },
]

export const activityTimeline = [
  {
    date: '2026.11',
    title: '双组织门户同步更新',
    desc: 'WebAIHarnessRoom 门户网站（11.3）与个人门户（11.5）更新，近期活跃重心完全集中在两个组织下的新项目上。',
    hot: true,
  },
  {
    date: '2026.10',
    title: 'WebAIHarnessRoom 进入活跃期',
    desc: 'mkstruct 于 10.28 更新，元工具线开始成型。',
    hot: true,
  },
  {
    date: '2026.09',
    title: 'just-did 组织全面活跃',
    desc: 'just-did-desktop（9.4）、组织首页（9.7）、just-did-app（9.10）密集更新。',
    hot: true,
  },
  {
    date: '2026.07',
    title: '端侧 AI + AI 工程化进入活跃期',
    desc: 'ZVisionEdge（7.15）与 nuitka-pack-skill（7.11）更新，技术重心开始转移。',
  },
  {
    date: '2026.04',
    title: '历史仓库集中整理',
    desc: 'KEYI-BLOG、KEYI-RTIS、ShiftBlogByPython、PlateBlur、pool-for-accumulation-app 等多个仓库同月更新，更像一次系统性的归档收尾。',
  },
  {
    date: '2022',
    title: 'Java Web 全栈活跃期',
    desc: 'KEYI-BLOG 等 Spring / MyBatis / Shiro 技术栈项目，分层架构实践。',
  },
  {
    date: '2019.09 — 2020.06',
    title: '图像与 OCR 方向的早期探索',
    desc: '草书中文书法图像数据集、传统 OCR 引擎训练模型仓库，算法兴趣的早期痕迹。',
  },
  {
    date: '2019.05',
    title: '最早的仓库活跃记录',
    desc: '个人博客 HTML 仓库，技术积累的起点。',
  },
]

export const csdnJourney = [
  {
    date: '2017 — 2018 年中',
    title: '起步：算法与数据结构',
    desc: '以 POJ、ZOJ 题解和排序、查找树笔记为主，同时记录系统使用与工具实践，逐步建立技术写作习惯。',
  },
  {
    date: '2018 年末 — 2019',
    title: '扩展：Java 与日常排障',
    desc: '写作主题扩展至 Java 语言机制、Web 开发和常见工具排障，博客逐渐成为日常开发经验的知识档案。',
  },
  {
    date: '2019 年末',
    title: '深化：算法与语言细节并行',
    desc: '集中整理排序算法、平衡查找树和 Java 异常处理等主题，并完成 CSDN 博客迁移爬虫；内容从问题记录进一步延伸到工具开发。',
  },
  {
    date: '2020 — 2025',
    title: '回归：从记录到整理',
    desc: '更新频率有所降低，内容更注重工程场景与方案权衡；2025 年的 Redis 缓存结构设计体现了从记录解法到分析设计取舍的转变。',
    hot: true,
  },
]
