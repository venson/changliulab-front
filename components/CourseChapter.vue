<template>
    <div>
        <div>
            <h1>课程内容</h1>
            <div v-for="(chapter,index) in course">
                <div class="flex flex-row">
                    <div class="flex flex-col items-center px-3 pt-4 w-24">
                        <div class="tracking-widest">CHAPTER</div>
                        <div class="text-6xl text-center">{{index+1}}</div>
                    </div>
                    <div>
                        <div class="text-xl mb-6">{{chapter.title}}</div>
                        <div class="text-sm mb-2">{{chapter.description}}</div>
                        <div class="text-sm text-gray-400">
                            共{{chapter.children.length}}小节 
                            <a @click="showSection(index)">显示全部</a>
                        </div>
                        <div v-if="showAllSection[index]">
                            <li v-for="(section,index) in chapter.children">
                                <a :href="`${coursePath}/section/${section.id}`">
                                    {{section.title}}
                                </a>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default{
    data(){
        return {
            showAllSection:[]
        }
    },
    created(){
        this.showAllSection=new Array(this.course.length)
        let params = this.$route.params
        this.coursePath= `/course/learn/${params.courseid}`
        this.sectionId = params.sectionid
    },
    props:{
        course:{
        type:Array
    }},
    methods:{
        showSection(index){
            this.showAllSection.splice(index,1,!this.showAllSection[index])
        }

    }

}
</script>