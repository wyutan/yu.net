import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  dir: '/network/',
  link: '/network/',
  sidebar: [
    { text: '配置模板', prefix: 'template', collapsed: false, items: 'auto', },
    { text: '网络协议', prefix: 'protocol', collapsed: false, items: 'auto', },
    { text: '自动化脚本', prefix: '自动化脚本', collapsed: false, items: 'auto', },
  ],
})
