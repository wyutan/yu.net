import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  dir: '/容器/',
  link: '/容器/',
  sidebar: [
    { text: 'Docker 笔记', prefix: 'docker', collapsed: false, items: 'auto', },
    { text: 'Kubernetes笔记', prefix: 'k8s/note', collapsed: false, items: 'auto', },
    { text: 'YAML', prefix: 'k8s/yaml', collapsed: false, items: 'auto', },
  ],
})
