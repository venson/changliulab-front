<template>
  <div class="">
    <div class="">
      <div class="sm:hidden fixed top-8">
        <button @click="isOpen = !isOpen" class="flex items-center bg-white">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
            <path v-if="!isOpen" fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
          </svg><span>课程目录</span>
        </button>

        <button v-if="isOpen" @click="isOpen = false" tabindex="-1"
          class="fixed inset-0 h-screen w-screen bg-black opacity-50 cursor-default"></button>
      </div>
      <div class="sm:block sm:w-[16.5rem] h-full fixed top-10 bg-gradient-to-b from-green-700 to-green-200"
        :class="isOpen ? 'block' : ' hidden'">
        <CourseTree :value="courseTree"></CourseTree>
      </div>
      <div class="sm:pl-[18.5rem] w-full mt-12 pr-8">
        <iframe v-if="videoLink" :src="videoLink" scrolling="no" border="0" frameborder="no" framespacing="0"
          allowfullscreen="true" style="height: 400px; width: 60%"></iframe>
        <div v-html="section"></div>
      </div>
    </div>
</div>
</template>

<script>
import CourseTree from "@/components/CourseTree.vue";
import pako from "pako";
import { base64ToBytes } from "@/utils/base64";
const videoLinkReg = /src\s*=\s*"(.+?)"/;
export default {
  layout: "course",
  components: { CourseTree },
  data() {
    return {
      isOpen: true,
    };
  },
  async asyncData({ params, $courseApi }) {
    const tree = await $courseApi.getCourseTreeById(params.courseid);
    const section = await $courseApi.getSectionById(params.sectionid);
    let html;
    let videoLink;
    console.log('section',section)
    try {
      const bytes = base64ToBytes(section.data.htmlBrBase64);
      html = pako.inflate(bytes, { to: "string" });
    } catch (error) {
      html = " ";
    }
    console.log(html);
    console.log(videoLink);
    try {
      videoLink = section.videoLink.match(videoLinkReg)[1];
    } catch (error) { }
    return {
      courseTree: tree.data,
      section: html,
      videoLink: videoLink,
    };
  },
};
</script>
