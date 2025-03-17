import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  dir: '/os/linux',
  link: '/os/linux',
  sidebar: [
    { text: 'linux学习笔记', link: '/os/linux/' },
    { text: 'linux笔记', prefix: 'note', collapsed: false, items: 'auto', },
    { text: 'linux命令', prefix: 'command', collapsed: false, items: 'auto', },
    { text: '常用功能', prefix: '常用', collapsed: false, items: 'auto', },
  ]
})
