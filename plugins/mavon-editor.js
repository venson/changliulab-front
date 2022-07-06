import Vue from 'vue';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import markdownItMermaid from "@liradb2000/markdown-it-mermaid";

Vue.use(mavonEditor);
const markdownIt = mavonEditor.mavonEditor.getMarkdownIt()
markdownIt.set({ breaks: false})
markdownIt.use(markdownItMermaid)