import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', icon: 'mdi:home', link: '/' },
  //{ text: '博客', link: '/blog/' },
  //{ text: '标签', link: '/blog/tags/' },
  //{ text: '归档', link: '/blog/archives/' },
  { 
    text: '网络',
    icon: 'lucide:network',
    items: [
      { text: '配置模板', link: '/network/template/', },
      { text: '网络协议', link: '/network/protocol/',},
    ]
  },
  {
    text: 'os',
    icon: 'ix:operating-system',
    items: [
      { text: 'linux', icon: 'skill-icons:linux-light', link: '/os/linux/', },
    ]
  }, 
  { text: '容器', icon: 'carbon:container-services', link: '/容器/', },
  { text: '疑难杂症', icon: 'icon-park-outline:thinking-problem',  link: '/疑难杂症/疑难杂症.md', },
  { text: '关于', icon: 'clarity:heart-line',  link: '/about/', },
])
