import { defineNoteConfig } from 'vuepress-theme-plume'
import protocol from './network/protocol.ts'
import template from './network/template.ts'

export default defineNotesConfig({
  dir: '/network',
  link: '/network/',
  notes: [
    协议,
    模板,
  ]
})
