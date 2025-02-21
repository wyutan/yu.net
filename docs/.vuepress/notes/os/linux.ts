import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  text: 'linux',
  icon: '',
  dir: '/os/linux',
  link: '/os/linux',
  sidebar: [
    {
      prefix: '/os/linux',
      text: 'linux',
      items: [
        { text: '', link: '', },
        {
          text: '命令', 
          prefix: '/os/linux/command',
          items: [
            { text: 'vim', link: 'vim.md' },
            { text: 'find', link: 'find.md' },
            { text: 'sed', link: 'sed.md' },
          ]
        },
        {
          text: '常用', 
          prefix: '/os/linux/常用',
          items: [
            { text: '重置RHEL7.9密码', link: '重置RHEL密码.md' },
            { text: 'LVM创建及扩容', link: 'LVM.md' },
          ]
        },
      ]
    },
  ],
})
