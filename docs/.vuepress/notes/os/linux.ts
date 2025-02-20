import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  text: 'linux',
  dir: '/os/Linux',
  link: '/os/Linux',
  sidebar: [
    {
      prefix: '/os/Linux',
      text: 'linux',
      items: [
        { text: 'Test', link: 'test.md', },
        {
          text: '命令', 
          link: '/os/Linux/command',
          items: [
            { text: 'vim', link: 'vim.md' },
            { text: 'find', link: 'find.md' },
            { text: 'sed', link: 'sed.md' },
          ]
        },
        {
          text: '常用', 
          link: '/os/Linux/常用',
          items: [
            { text: '重置RHEL7.9密码', link: '重置RHEL密码.md' },
            { text: 'LVM创建及扩容', link: 'LVM.md' },
          ]
        },
      ]
    },
  ],
})
