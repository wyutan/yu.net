import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  dir: '/network/',
  link: '/network/',
  sidebar: [
    {text: '', prefix: 'template', collapsed: false, items: 'auto', },
    { text: '', prefix: 'protocol', collapsed: false, items: 'auto', },
  ],
})