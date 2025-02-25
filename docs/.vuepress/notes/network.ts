import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  dir: '/network/',
  link: '/network/',
  sidebar: [
    {text: '配置模板', prefix: 'template', collapsed: false, items: 'auto', },
  ],
}),

export default defineNoteConfig({
  dir: '/network/',
  link: '/network/',
  sidebar: [
    { text: '网络协议', prefix: 'protocol', collapsed: false, items: 'auto', },
  ],
})
