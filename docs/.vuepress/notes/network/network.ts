import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  text: '网络',
  dir: '/os/network',
  link: '/os/network',
  sidebar: [
    {
      prefix: '/network/protocol',
      text: '协议',
      items: [
        {
          text: '协议',
          icon: '',
          collapsed: false,
          items: [
            'bgp',
            'ospf',
          ]
        },
      ],
    },
    {
      prefix: '/network/template',
      text: '模板',
      items: [
        {
          text: '模板',
          icon: '',
          collapsed: false,
          items: [
            'hw_s系列',
            'hw_ce系列',
            'h3c'
          ]
        },
      ],
    },
  ]
})
