import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  text: 'docker',
  dir: '/容器/docker',
  link: '/容器/docker',
  sidebar: [
    {
      prefix: '/容器/docker',
      text: 'docker',
      items: [ 
        { text: 'docker参数修改', link: 'docker参数' },
        { text: 'docker配置GPU', link: 'docker配置GPU' },
      ]
    },  
  ],
})
