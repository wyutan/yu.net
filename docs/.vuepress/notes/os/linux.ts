import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  text: 'linux',
  dir: '/os/linux',
  link: '/os/linux',
  sidebar: [
    {
      prefix: '/os/linux',
      text: 'linux',
      items: [ 
        '常用',
        'command', 
      ]
    },  
  ],
})
