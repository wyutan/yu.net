import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  text: 'yaml',
  dir: '/yaml/',
  link: '/network/',
  sidebar: [
    {
      prefix: '/network/',
      items: [
        { text: 'mysql', link: 'mysql' },
        { text: 'zabbix', link: 'zabbix' },
       ]
    },  
  ],
})
