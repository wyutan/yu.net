import { defineNotesConfig } from 'vuepress-theme-plume'
import network from './network.ts'
import linux from './linux.ts'
import 容器 from './容器.ts'
import about from './about'

export default defineNotesConfig({
  // 声明所有笔记的目录，(默认配置，通常您不需要声明它)
  dir: '/',
  link: '/',
  // 在这里添加 note 配置
  notes: [
    network,
    linux,
    容器,
    about,
  ]
})
