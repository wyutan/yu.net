import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  dir: '/容器/',
  link: '/容器/',
  sidebar: [
    { text: 'docker笔记', prefix: 'docker', collapsed: false, items: 'auto', },
  ],
})
