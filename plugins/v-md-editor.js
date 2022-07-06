import Vue from 'vue'
import VMdPreview from '@kangc/v-md-editor/lib/preview'
// import '@kangc/v-md-editor/lib/style/preview.css'
// import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';

import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
// import '@kangc/v-md-editor/lib/theme/style/github.css'
import '@kangc/v-md-editor/lib/plugins/mermaid/mermaid.css';
// import VueMarkdownEditor from '@kangc/v-md-editor';
import createMermaidPlugin from '@kangc/v-md-editor/lib/plugins/mermaid/cdn';
import createKatexPlugin from '@kangc/v-md-editor/lib/plugins/katex/cdn';
import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list/index';
import hljs from 'highlight.js/lib/core'
import json from 'highlight.js/lib/languages/json';
hljs.registerLanguage('json', json)
// import mermaid from 'mermaid'

// VMdPreview.use(vuepressTheme)
VMdPreview.use(githubTheme, {Hljs: hljs})
// VueMarkdownEditor.use(githubTheme, {
//     hljs: hljs,
// })
VMdPreview.use(createMermaidPlugin())
VMdPreview.use(createKatexPlugin())
// VMdPreview.use(mermaid)
VMdPreview.use(createTodoListPlugin())

// VueMarkdownEditor.use(createKatexPlugin())
// VueMarkdownEditor.use(createTodoListPlugin())
// VueMarkdownEditor.use(createMermaidPlugin())
Vue.use(VMdPreview)
// Vue.use(VueMarkdownEditor)