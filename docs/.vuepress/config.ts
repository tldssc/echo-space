import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  // 基础配置
  base: '/',
  lang: 'zh-CN',
  title: 'echo-space',
  description: 'echo-space',

  bundler: viteBundler(),

  // 主题配置
  theme: plumeTheme({
    hostname: 'https://echobloom.top',
    docsRepo: 'https://github.com/tldssc/echo-space',
    docsBranch: 'master',
    docsDir: 'docs',
    blog: {
      // 是否启用归档页
      archives: false,
    },
    plugins: {
      // 阅读统计
      readingTime: {
        wordPerMinute: 300
      },
      // 评论
      comment: {
        provider: 'Giscus',
        comment: true,
        repo: 'tldssc/echo-space',
        repoId: 'R_kgDONal7mQ',
        category: 'Announcements',
        categoryId: 'DIC_kwDONal7mc4CmJ3K',
        mapping: 'pathname',
        reactionsEnabled: true,
        inputPosition: 'top',
      },
    },
  }),
})
