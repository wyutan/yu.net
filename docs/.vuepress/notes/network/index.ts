import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  dir: 'network',
  link: '/network/',
  sidebar: [
      { text: '网络', link: '/network/' },
      { text: '模板', prefix: 'template', collapsed: false, items: 'auto',},
      { text: '协议', prefix: 'protocol', collapsed: false, items: 'auto',},
  ] 
})
