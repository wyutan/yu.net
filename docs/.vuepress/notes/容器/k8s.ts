import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  dir: '/容器/k8s',
  link: '/容器/k8s',
  sidebar: [
        { text: 'yaml文件', link: '/容器/k8s' },
        { text: 'yaml', prefix: 'yaml', collapsed: false, items: 'auto', },
      ]
})
