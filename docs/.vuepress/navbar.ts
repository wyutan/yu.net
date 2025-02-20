import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  //{ text: '博客', link: '/blog/' },
  //{ text: '标签', link: '/blog/tags/' },
  //{ text: '归档', link: '/blog/archives/' },
  {
    text: '网络',
    icon: '',
    items: [
      {
        text: '协议',
        icon: '',
        link: '/network/protocol/',
      },
      {
        text: '模板',
        icon: '',
        link: '/network/template/',
      },
    ]
  },
  { text: '关于', icon: '',  link: '/about/' },
])
