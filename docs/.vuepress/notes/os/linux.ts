
import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  text: '常用',
  dir: '/os/linux/常用',
  link: '/os/linux/常用',
  sidebar: [
    {
      prefix: '/os/linux/常用',
      items: [
        { text: '重置RHEL7.9密码', link: '重置RHEL密码' },
        { text: 'LVM创建及扩容', link: 'LVM' },
        { text: '免密登录', link: '免密登录' },
       ]
    },  
  ],
})

export default defineNoteConfig({
  text: '命令',
  dir: '/os/linux/command',
  link: '/os/linux/command',
  sidebar: [
    {
      prefix: '/os/linux/command',
      items: [
        { text: 'vim', link: 'vim' },
        { text: 'find', link: 'find' },
        { text: 'sed', link: 'sed' },
       ]
    },  
  ],
})

