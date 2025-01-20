import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://pic2.ziyuan.wang/user/1725338975/2025/01/15a2b079aa481cf9f1b125ceb6c98d6_c80c9e8442cea.png',
  // 是否启用深色模式切换按钮
  appearance: true,
  transition: {
    page: true,
    postList: true,
    appearance: 'fade'
  },
  copyright: {
    license: {
      // 许可证名称
      name: 'MIT',
      // 许可证地址
      url: 'https://github.com/tldssc/echo-space/blob/master/LICENSE'
    },
  },
  footer: false,
  profile: {
    // 个人信息
    avatar: 'https://pic2.ziyuan.wang/user/1725338975/2025/01/15a2b079aa481cf9f1b125ceb6c98d6_c80c9e8442cea.png',
    name: 'echo',
    description: '一个在北京打工的北漂仔',
    circle: true,
    location: '北京',
  },
  // 社交链接
  social: [
    { icon: 'github', link: 'https://github.com/tldssc' },
  ],
  // 导航栏配置
  navbar,
  // 笔记配置+
  notes,
})
