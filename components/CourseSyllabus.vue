<template>
  <div class="py-4">
    <p class="text-2xl py-4">课程大纲</p>
    <div class="divide-y">
      <div v-for="(chapter, index) in value" :key="index">
        <div class="flex flex-row">
          <div class="flex flex-col items-center px-3 py-4 w-24">
            <div class="tracking-widest">CHAPTER</div>
            <div class="text-6xl text-center">{{ index + 1 }}</div>
          </div>
          <div class="w-full p-4">
            <div class="text-xl mb-6">
              <div class="relative">
                <div class="flex">
                  <p>{{ chapter.title }}</p>
                </div>
              </div>
            </div>
            <div class="text-sm mb-2">{{ chapter.description }}</div>
            <div v-if="chapter.children && chapter.children.length > 0">
              <div class="text-sm text-gray-400 mb-2">
                共{{ chapter.children.length }}小节
                <a @click="showSection(index)">显示全部</a>
              </div>
              <div v-show="chapter.expand">
                <li
                  class="list-none py-1 hover:bg-gray-100"
                  v-for="(section, sectionIndex) in chapter.children"
                  :key="sectionIndex"
                >
                  <div class="flex justify-between">
                    <div class="flex items-center">
                      <nuxt-link :to="{path:`${section.id}`, query:{chapter:`${index}`}}" append>{{
                        section.title
                      }}</nuxt-link>
                    </div>
                  </div>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CourseSyllabus",
  props: ["value"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    showSection(index) {
      if (this.value[index].expand) {
        this.$set(this.value[index], "expand", !this.value[index].expand);
      } else {
        this.$set(this.value[index], "expand", true);
      }
    },
  },
};
</script>
