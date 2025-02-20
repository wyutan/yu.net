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
        'hw_ce系列',
        'hw_s系列',
        'h3c',
          ]
    },  
  ],
})
