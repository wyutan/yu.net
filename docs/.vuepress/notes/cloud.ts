import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  dir: '/os/cloud',
  sidebar: [
    { text: '云计算学习笔记', link: '/os/cloud/', collapsed: false, items: 'auto', },
  ]
})
