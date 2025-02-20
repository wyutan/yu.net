import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  text: 'linux',
  dir: '/os/linux',
  link: '/os/linux',
  sidebar: [
    {
      prefix: '/os/linux',
      text: '',
      items: [ 
        { text: 'command', link: '/command', sidebar: 'auto' },
        { text: '常用', link: '/常用', sidebar: 'auto' },
      ]
    },  
  ],
})
