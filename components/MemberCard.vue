
<template>
  <div class=" bg-white border rounded-lg overflow-hidden hover:cursor-pointer shadow-lg " @click="toCourseDetail">
    <div class="flex justify-center  my-6 ">
    <nuxt-img class="hover:animate-pulse w-1/2 rounded-full aspect-square" :src="member.avatar" alt="Image missing"></nuxt-img>
    </div>
    <div class=" pb-4 text-center">
        <div class="font-semibold text-xl">
        {{member.name}} {{ member.title }}
        </div>
        <hr
  class="my-4 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
        <div>
        {{member.intro}}
        </div>
        <!-- <div class="border-t pt-2 border-gray-400 border-dashed">
            {{member.career}}
        </div> -->
    </div>
  </div>

</template>

<script>
export default {
  name: "MemberCard",
  props:['member'],
  methods:{
    toCourseDetail(){
      this.$router.push({path:'/groupmember/'+this.member.id})
    }
  }
}
</script>

<style scoped>


</style>
