import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  text: 'docker',
  dir: '/容器/docker',
  link: '/容器/docker',
  sidebar: [
    {
      prefix: '/容器/docker',
      text: '',
      items: [ 
        { text: 'docker参数修改', link: 'docker参数' },
      ]
    },  
  ],
})
