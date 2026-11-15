// 弹窗数据：原 modal.js 的 modalData 六键位原样迁移
// 视频键位：B 站 bvid；图片键位：站内图片；文档键位：GitHub 仓库 Markdown（CDN → raw 回退）

export const modalData = {
  did: {
    title: 'just-did · 人生日志',
    type: 'video',
    bvid: 'BV1ZqxD6gEWt',
  },
  gpc: {
    title: 'GPC · GenerateProjectContext',
    type: 'video',
    bvid: 'BV1ov436wEbv',
  },
  mkstruct: {
    title: 'mkstruct',
    type: 'video',
    bvid: 'BV1f8436vEJf',
  },
  plateblur: {
    title: '车牌隐藏 · 本地视频脱敏',
    type: 'image',
    image: {
      src: '/assets/images/projects/plateblur.gif',
      alt: '车牌隐藏',
      caption: '数据不出设备',
    },
  },
  rtis: {
    title: '内网截屏翻译 · 离线 OCR',
    type: 'doc',
    doc: {
      cdn: 'https://cdn.jsdelivr.net/gh/zhouyp001/KEYI-RTIS@master/readmedir/使用演示.md',
      raw: 'https://raw.githubusercontent.com/zhouyp001/KEYI-RTIS/master/readmedir/使用演示.md',
      fallbackHref: 'https://github.com/zhouyp001/KEYI-RTIS/blob/master/readmedir/使用演示.md',
      fallbackText: '在 GitHub 中打开使用演示',
      slowHint: '当前网络可能较慢，正在尝试备用镜像…',
      repo: { owner: 'zhouyp001', name: 'KEYI-RTIS', branch: 'master' },
      dir: 'readmedir',
    },
  },
  blog: {
    title: 'KEYI-BLOG · Java Web 博客系统',
    type: 'doc',
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

export function bilibiliEmbed(bvid) {
  return `https://player.bilibili.com/player.html?bvid=${bvid}&page=1&high_quality=1&danmaku=0&autoplay=0`
}
