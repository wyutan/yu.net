import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  text: '协议',
  dir: '/network/protocol',
  link: '/network/protocol',
  sidebar: [
    {
      prefix: '/network/protocol',
      text: '网络协议',
      items: [ 
        'bgp',
        'ospf', 
      ]
    },  
  ],
})
