const csdn = (q) => `https://so.csdn.net/so/search?q=${encodeURIComponent(q)}&t=blog&u=ke_yi_`

export const hero = {
  badge: 'Technical Blog · Since 2017',
  name: 'ke_yi_',
  tagline: '一个记录开发中“卡住”瞬间的技术博客——报错排查、函数用法、语言机制细节。相信一篇短小的笔记，也值得被写下来。',
  chips: ['CSDN 博客', '117 篇文章', '18 个专栏', '9 年创作跨度'],
}

export const metrics = [
  { value: '117', label: '文章总数', sub: '原创 116 · 专栏 18' },
  { value: '9', suffix: '年', label: '创作跨度' },
  { value: '9,043', label: '最高阅读' },
  { value: '30', label: '单月最高发文' },
  { value: '95', suffix: '%', label: '高产期占比' },
]

export const years = [
  { year: '2017', value: 2 },
  { year: '2018', value: 74, peak: true },
  { year: '2019', value: 38, peak: true },
  { year: '2020', value: 1 },
  { year: '2021', value: 0, zero: true },
  { year: '2022', value: 0, zero: true },
  { year: '2023', value: 0, zero: true },
  { year: '2024', value: 0, zero: true },
  { year: '2025', value: 2 },
]

export const yearChartNote = '2018—2019 两年合计占比超过 95%'

export const phases = [
  {
    time: '2017 — 2018 年中',
    title: '起步：算法与数据结构',
    desc: '以 POJ、ZOJ 题解与排序、查找树笔记为主，伴随少量系统与工具类记录，形成了最初的写作节奏。',
    color: 'var(--c1)',
  },
  {
    time: '2018 年末 — 2019',
    title: '扩展：Java 与日常排障',
    desc: '重心转向 Java 语言机制、Web 开发细节与通用工具排障，博客成为日常开发的问题档案。',
    color: 'var(--c2)',
  },
  {
    time: '2019 年末',
    title: '深化：算法与语言细节并行',
    desc: '排序算法全集、平衡查找树、Java 异常捕获顺序等笔记集中产出；同时完成 CSDN 博客迁移爬虫，写作边界从“记录”延伸到“工具化”。',
    color: 'var(--c6)',
  },
  {
    time: '2020 — 2025',
    title: '回归：从记录到整理',
    descHtml: '更新频率降低，但 2025 年的 Redis 缓存结构设计标志着写作重心从“记录解法”转向<strong>场景判断与方案取舍</strong>。文章围绕高并发下的数据结构选型、Hash 的 Ziplist 阈值、TTL 与内存占用的平衡展开。',
    color: 'var(--c3)',
  },
]

export const topics = [
  { num: '01', title: '算法与数据结构', desc: 'BFS、DFS、动态规划、贪心、分治、排序全集、树状数组、线段树、RMQ、STL、计算几何，含 POJ/HDU/牛客题解。', count: '51 篇', color: 'var(--c1)' },
  { num: '02', title: 'Windows 系统、API 与排障', desc: '注册表操作系列、Win32 API、Linux 基础、系统设置与日常排障（卸载、网络、磁盘、.NET、Maven、Chrome）。', count: '37 篇', color: 'var(--c2)' },
  { num: '03', title: 'Java 与 Web 开发', desc: '异常捕获顺序、构造器多态、散列实现、迭代器、Maven、Servlet 参数映射、前端 canvas 验证码、Redis 缓存结构设计。', count: '11 篇', color: 'var(--c3)' },
  { num: '04', title: '数据库与计算机基础', desc: 'MySQL 引擎对比、基础操作、外键 105 错误、SQL 查询与视图；汇编基础、0—3 型文法、海明校验码。', count: '9 篇', color: 'var(--c4)' },
  { num: '05', title: 'Python 与工具化', desc: 'networkx 笔记、Python 基础、CSDN 博客迁移爬虫系列、R 语言基础、Android R 文件定位。', count: '7 篇', color: 'var(--c5)' },
]

export const donut = {
  total: 117,
  label: '篇文章',
  segments: [
    { label: '算法与数据结构', percent: 45, color: 'var(--c1)' },
    { label: 'Windows 系统、API 与排障', percent: 32, color: 'var(--c2)' },
    { label: 'Java 与 Web 开发', percent: 10, color: 'var(--c3)' },
    { label: '数据库与计算机基础', percent: 8, color: 'var(--c4)' },
    { label: 'Python 与工具化', percent: 5, color: 'var(--c5)' },
  ],
}

export const aboutHtml = [
  '这个博客始于 <strong>2017 年 7 月</strong>，在 CSDN 上持续记录技术问题与学习笔记。它不是一份体系化的教程，而是一个随时间累积的档案库——写下的多是实际开发与学习中遇到的卡点：一个函数的用法、一段报错的成因、一个语言机制的细节。',
  '写作节奏并不均匀。<strong>2018—2019 年</strong>是集中输出期，两年贡献了超过 95% 的文章；此后更新放缓，2025 年起重新有少量更新，内容也开始从“记录问题”转向“整理判断”，出现了带有场景分析的工程经验类文章。',
  '博客的内容由两部分构成：<strong>存量主体</strong>是 2018—2019 年集中产出的算法与系统笔记；<strong>增量价值</strong>来自后期高阅读量的排障文章，以及 2025 年 Redis 缓存设计所代表的<strong>场景判断型写作</strong>。前者适合按知识点检索，后者适合按问题关键词直达。',
]

export const aboutTags = ['个人技术档案库', '短篇笔记', '问题驱动', '按需检索', '场景判断']

export const pickGroups = [
  {
    title: '工程实践',
    items: [
      {
        title: '项目中的高性能缓存结构设计',
        tags: [{ text: '近期更新' }],
        desc: '高并发场景下的 Redis 结构选型经验，围绕 Hash 的 Ziplist 阈值、TTL 与内存占用的平衡展开，带有“场景—选型—判断”的完整工程视角。',
        href: csdn('高性能缓存结构设计 Redis'),
      },
    ],
  },
  {
    title: '算法与数据结构',
    items: [
      {
        title: '平衡查找树',
        tags: [],
        desc: 'AVL 树的单旋转与双旋转机制，配合图示讲解左右旋转、右左旋转如何维持平衡。',
        href: csdn('平衡查找树'),
      },
      {
        title: '快速排序',
        tags: [],
        desc: '从分治策略出发讲解划分过程与三者取中值法，附 Java 泛型实现，并对比归并排序的分治差异。',
        href: csdn('快速排序'),
      },
      {
        title: '树状数组解决区间更新单点查询',
        tags: [],
        desc: '以 hdu 1556 为例，讲清“左端点加、右端点后一位减”的差分技巧。',
        href: csdn('树状数组 Color the ball'),
      },
    ],
  },
  {
    title: 'Windows 系统与 API',
    items: [
      {
        title: '注册表函数',
        tags: [{ text: '速查索引', variant: 'alt' }],
        desc: '汇总 RegCreateKeyEx、RegOpenKeyEx、RegSetValueEx、RegQueryValueEx、RegCloseKey 等函数的跳转入口。',
        href: csdn('注册表函数'),
      },
      {
        title: 'RegCreateKeyEx函数',
        tags: [{ text: '代表作' }],
        desc: '包含函数原型、参数说明与创建 / 打开注册表项的完整示例。',
        href: csdn('RegCreateKeyEx函数'),
      },
    ],
  },
  {
    title: 'Java 与 Web 开发',
    items: [
      {
        title: '多个 catch 捕获异常顺序',
        tags: [],
        desc: '针对 Java 异常处理中最容易出错的顺序规则，用具体场景讲清“为什么子类必须写在前面”。',
        href: csdn('多个catch捕获异常顺序'),
      },
      {
        title: '构造器内部多态方法行为探究',
        tags: [],
        desc: '涉及构造器与动态绑定的微妙知识点，适合想深入理解 Java 对象初始化过程时阅读。',
        href: csdn('构造器内部多态方法'),
      },
      {
        title: '通过 request 的 param 参数直接获得实体类对象',
        tags: [],
        desc: '基于反射将表单参数映射到实体类，讨论基本类型、非法参数与数值转换异常的处理方式。',
        href: csdn('通过request的param参数直接获得实体类的对象'),
      },
    ],
  },
  {
    title: '数据库与计算机基础',
    items: [
      {
        title: 'MySQL 引擎',
        tags: [],
        desc: '对比 ISAM、MyISAM、HEAP、InnoDB 四种引擎的读写特性、事务支持与适用场景。',
        href: csdn('mysql引擎'),
      },
      {
        title: '海明校验码',
        tags: [],
        desc: '介绍分组奇偶校验的基本思想，通过添加校验位增大码距来定位错误位。',
        href: csdn('海明校验码'),
      },
    ],
  },
  {
    title: '问题解决与实用工具',
    items: [
      {
        title: '小白也能操作的奇安信卸载方法',
        tags: [{ text: '9,043 阅读', variant: 'hot' }],
        desc: '针对难以常规卸载的安全软件，给出可直接照做的操作步骤，是博客中阅读量最高的一篇。',
        href: csdn('奇安信卸载'),
      },
      {
        title: 'IDEA 创建 Maven 项目报错解决',
        tags: [{ text: '6,718 阅读', variant: 'hot' }],
        desc: '针对 Failed to execute goal org.apache.maven.plugins... 这一常见初始化报错，给出清晰的排查路径。',
        href: csdn('Failed to execute goal org.apache.maven.plugins'),
      },
      {
        title: '谷歌浏览器播放视频没有声音解决',
        tags: [{ text: '6,047 阅读', variant: 'hot' }],
        desc: '通用桌面问题排查，不绑定具体技术栈，适合任何遇到浏览器静音异常的使用者。',
        href: csdn('谷歌浏览器播放视频没有声音'),
      },
      {
        title: 'Python 爬虫之 CSDN 博客迁移',
        tags: [],
        desc: '一组围绕博客内容迁移的爬虫实践：获取文章列表、下载图片、打包保存。',
        href: csdn('csdn博客迁移 爬虫'),
      },
    ],
  },
]

export const picksNote = '以上链接跳转至 CSDN 站内搜索，定位到该博客下的对应文章。'