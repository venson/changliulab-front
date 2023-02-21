<template>
  <div class="bg-white border rounded-lg overflow-hidden hover:cursor-pointer shadow-lg" @click="toCourseDetail">
    <nuxt-img class="aspect-video" :src="value.cover" alt="Image missing"></nuxt-img>
    <div class="p-6">
      <span class="font-semibold text-lg hover:text-gray-600">{{value.title}}</span>
      <span class="rounded text-lg bg-green-400 text-white px-2" v-if="value.isPublic">公开</span>
      <span class="rounded text-lg bg-green-800 text-white px-2" v-else>需注册</span>
    <div class="text-gray-600 text-sm font-semibold mt-4">
      {{value.viewCount}} 浏览
    </div>
    </div>



  </div>

</template>

<script>
export default {
  name: "CourseCard",
  props:['value'],
  methods:{
    toCourseDetail(){
      this.$router.push({path:'/course/'+this.value.id})
    }
  }
}
</script>

<style scoped>


</style>
