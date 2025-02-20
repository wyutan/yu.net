import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  text: '操作系统',
  dir: '/network',
  link: '/network/',
  sidebar: [
    '',
    {
      prefix: '/network',
      text: '网络',
      items: [
        {
          prefix: 'protocol',
          text: '协议',
          collapsed: false,
          items: 'auto',
        },
        {
          prefix: 'template',
          text: '模板',
          collapsed: false,
          items: 'auto',
        },
      ],
    },    
  ]  
})
