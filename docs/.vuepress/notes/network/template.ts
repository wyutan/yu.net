import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  text: '模板',
  dir: '/network/template',
  link: '/network/template',
  sidebar: [
    {
      prefix: '/network/template',
      text: '模板',
      items: [
        { text: '华为CE系列', link: 'hw_ce' },
        { text: '华为S系列', link: 'hw_s' },
        { text: 'h3c', link: 'h3c' },
       ]
    },  
  ],
})
