import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  text: 'linux',
  dir: '/os/linux',
  link: '/os/linux',
  sidebar: [
    {
      items: [
        {
          text: '常用',
          dir: '常用',
          collapsed: false,
          items: [
            { text: '重置RHEL7.9密码', link: '重置RHEL密码' },
            { text: '创建及扩容LVM', link: 'LVM' },
            { text: '免密登录', link: '免密登录' },
          ]
        },
      ],
    },
    {
      items: [
        {
          text: '命令',
          dir: 'command',
          collapsed: false,
          items: [
            { text: 'vim', link: 'vim' },
            { text: 'find', link: 'find' },
            { text: 'sed', link: 'sed' },
          ]
        },
      ],
    },
  ]
})
