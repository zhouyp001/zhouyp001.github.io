export const modalData = {
  did: {
    title: 'just-did · 人生日志',
    video: 'https://player.bilibili.com/player.html?bvid=BV1ZqxD6gEWt&page=1&high_quality=1&danmaku=0&autoplay=0',
  },
  gpc: {
    title: 'GPC · GenerateProjectContext',
    video: 'https://player.bilibili.com/player.html?bvid=BV1ov436wEbv&page=1&high_quality=1&danmaku=0&autoplay=0',
  },
  mkstruct: {
    title: 'mkstruct',
    video: 'https://player.bilibili.com/player.html?bvid=BV1f8436vEJf&page=1&high_quality=1&danmaku=0&autoplay=0',
  },
  plateblur: {
    title: '车牌隐藏 · 本地视频脱敏',
    image: '/img/plateblur.gif',
    caption: '数据不出设备',
  },

  /* ---------- 文档型：KEYI-RTIS 使用演示 ---------- */
  rtis: {
    title: '内网截屏翻译 · 离线 OCR',
    doc: {
      cdn: 'https://cdn.jsdelivr.net/gh/zhouyp001/KEYI-RTIS@master/readmedir/使用演示.md',
      raw: 'https://raw.githubusercontent.com/zhouyp001/KEYI-RTIS/master/readmedir/使用演示.md',
      fallbackHref: 'https://github.com/zhouyp001/KEYI-RTIS/blob/master/readmedir/使用演示.md',
      fallbackText: '在 GitHub 中打开使用演示',
      slowHint: '当前网络可能较慢，正在尝试备用镜像…',
      /* 用于解析文档内相对路径；如果仓库默认分支不是 master，改这里 */
      repo: { owner: 'zhouyp001', name: 'KEYI-RTIS', branch: 'master' },
      dir: 'readmedir',
    },
  },

  /* ---------- 文档型：KEYI-BLOG README ---------- */
  blog: {
    title: 'KEYI-BLOG · Java Web 博客系统',
    doc: {
      cdn: 'https://cdn.jsdelivr.net/gh/zhouyp001/KEYI-BLOG@main/README.md',
      raw: 'https://raw.githubusercontent.com/zhouyp001/KEYI-BLOG/main/README.md',
      fallbackHref: 'https://github.com/zhouyp001/KEYI-BLOG/blob/main/README.md',
      fallbackText: '在 GitHub 中查看 README',
      slowHint: '当前网络可能较慢，正在尝试备用镜像…',
      repo: { owner: 'zhouyp001', name: 'KEYI-BLOG', branch: 'main' },
      dir: '',
    },
  },
}
