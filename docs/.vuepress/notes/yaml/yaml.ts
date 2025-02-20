import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  text: 'yaml',
  dir: '/yaml/',
  link: '/yaml/',
  sidebar: [
    {
      prefix: '/yaml/',
      items: [
        'mysql',
        'zabbix',
       ]
    },  
  ],
})
