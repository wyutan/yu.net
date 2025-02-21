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
      { text: '协议', icon: '', link: '/network/protocol/', },
      { text: '模板', icon: '', link: '/network/template/', },
    ]
  },
  {
    text: 'os',
    items: [
      { text: 'linux', icon: 'skill-icons:linux-light', link: '/os/linux/', },
    ]
  }, 
  {
    text: '容器',
    items: [
      { text: 'docker', icon: 'logos:docker-icon', link: '/容器/docker/', },
    ]
  },
  { text: 'yaml', icon: 'file-icons:yaml-alt2',  link: '/yaml/', },
  { text: '疑难杂症', icon: 'icon-park-outline:thinking-problem',  link: '/疑难杂症/疑难杂症.md', },
  { text: '关于', icon: 'clarity:heart-line',  link: '/about/', },
])
