// CSDN 归档页数据：内容方向（5）、精选文章（14），对照 b1/csdn.html

export const csdnHomeHref = 'https://blog.csdn.net/ke_yi_'

export function csdnSearchUrl(q) {
  // 与原页面一致：检索词不含空格（原文 href 中的 q 即去除空格后的标题）
  const q0 = q.replace(/\s/g, '')
  return `https://so.csdn.net/so/search?q=${encodeURIComponent(q0)}&t=blog&u=ke_yi_`
}

export const csdnTopics = [
  {
    num: '01',
    name: '算法与数据结构',
    desc: 'BFS、DFS、动态规划、贪心、分治、排序全集、树状数组、线段树、RMQ、STL、计算几何，含 POJ/HDU/牛客题解。',
    count: '51 篇 · 45%',
  },
  {
    num: '02',
    name: 'Windows 系统、API 与排障',
    desc: '注册表操作系列、Win32 API、Linux 基础、系统设置与日常排障（卸载、网络、磁盘、.NET、Maven、Chrome）。',
    count: '37 篇 · 32%',
  },
  {
    num: '03',
    name: 'Java 与 Web 开发',
    desc: '异常捕获顺序、构造器多态、散列实现、迭代器、Maven、Servlet 参数映射、前端 canvas 验证码、Redis 缓存结构设计。',
    count: '11 篇 · 10%',
  },
  {
    num: '04',
    name: '数据库与计算机基础',
    desc: 'MySQL 引擎对比、基础操作、外键 105 错误、SQL 查询与视图；汇编基础、0—3 型文法、海明校验码。',
    count: '9 篇 · 8%',
  },
  {
    num: '05',
    name: 'Python 与工具化',
    desc: 'networkx 笔记、Python 基础、CSDN 博客迁移爬虫系列、R 语言基础、Android R 文件定位。',
    count: '7 篇 · 5%',
  },
]

export const csdnArticles = [
  { title: '项目中的高性能缓存结构设计', cat: '工程实践' },
  { title: '平衡查找树', cat: '算法' },
  { title: '快速排序', cat: '算法' },
  { title: '树状数组解决区间更新单点查询', cat: '算法' },
  { title: '注册表函数', cat: 'Windows' },
  { title: 'RegCreateKeyEx 函数', cat: 'Windows', q: 'RegCreateKeyEx' },
  { title: '多个 catch 捕获异常顺序', cat: 'Java' },
  { title: '构造器内部多态方法行为探究', cat: 'Java' },
  { title: 'MySQL 引擎', cat: '数据库' },
  { title: '海明校验码', cat: '计算机基础' },
  { title: '小白也能操作的奇安信卸载方法', views: '9,043' },
  { title: 'IDEA 创建 Maven 项目报错解决', views: '6,718' },
  { title: '谷歌浏览器播放视频没有声音解决', views: '6,047' },
  { title: 'Python 爬虫之 CSDN 博客迁移', cat: 'Python' },
]
