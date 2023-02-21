<template>
    <div class="bg-gradient-to-r from-[#032f71] to-[#0c60b5] text-white px-4 py-8">
        <div class="max-w-7xl mx-auto">
            <div class="mb-4">
                <nuxt-link to="/course">公开课</nuxt-link><span> &gt; </span>
                <nuxt-link :to="{path:'/course',query:{pid:`${course.l1SubjectId}`}}">{{ course.l1Subject }}</nuxt-link><span> &gt; </span>
                <nuxt-link :to="{path:'/course',query:{pid:`${course.l1SubjectId}`,sid:`${course.l2SubjectId}`}}">{{ course.l2Subject }}</nuxt-link>
            </div>
            <div class="flex flex-col md:flex-row">
                <div class="md:w-1/2">
                    <div class="sm:flex sm:flex-row">
                        <div class="sm:w-1/2">
                        <div class="mb-4">
                            <div class="text-3xl font-bold">{{ course.title }}</div>
                            <div class="text-sm">{{ course.description }}</div>
                        </div>
                        <div class="flex flex-row items-center p-4">
                            <nuxt-img class="w-7 h-7 rounded-full mr-2" :src="course.avatar"></nuxt-img>
                            <span>{{ course.memberName }}, {{ course.memberTitle }}</span>
                        </div>
                        </div>
                        <div class="mt-2 md:hidden">
                            <nuxt-img class="aspect-video h-28" :src="course.cover"></nuxt-img>
                        </div>
                    </div>

                    <div class="sm:flex sm:flex-row sm:items-center">
                        <nuxt-link :to="{path: startId, query:{chapter:0},append: true}">
                        <button class="h-20 mt-3 w-full sm:w-48 rounded text-xl bg-blue-500"
                        >开始学习</button>

                        </nuxt-link>
                        <div class="pt-6 sm:pt-0 text-sm sm:pl-6">{{ course.isPublic ? '免费公开' : '需注册' }}</div>
                    </div>
                    <div class="p-6 text-base">{{ course.viewCount }} 人已学习</div>
                </div>
                <div class="hidden mt-2 mb-3 md:block w-1/2 ">
                    <nuxt-img class="aspect-video max-h-60" :src="course.cover"></nuxt-img>
                </div>
            </div>


        </div>
    </div>

</template>
<script>
export default {
    props: {
        course: {
            type: Object,
        },
        startId:{
            type:String,
        }
    },
    methods:{
        goToCourse(){
            // if(this.defaultSectionId){
            // this.$router.push({path:'/course/learn/'+this.course.id +'/section/'+this.defaultSectionId})
            // }else{
            // this.$router.push({path:'/course/learn/'+this.course.id})
            // }

        }
    }

}
</script>