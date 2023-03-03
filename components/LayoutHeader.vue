<template>
    <header class="">
        <!-- <div class="relative">
            <nuxt-img class="object-cover h-24 sm:h-32 w-full" :src="backgroundimg"></nuxt-img>
            <div class="absolute top-8 sm:top-12 px-2">
                <div class="text-2xl text-white sm:text-4xl sm:px-4 italic">Welcome to Chang Liu LAB</div>
                <div class="text-md  text-white sm:text-xl lg:text-2xl sm:px-4 italic">Trees cell wall formation and wall signal Group</div>
            </div>
            <div class="flex justify-between items-center max-w-7xl mx-auto">
                <LabMenu class=""  ></LabMenu>
                <LabAvatar></LabAvatar>
            </div>
        </div> -->
        <div class="relative">
            <nuxt-img class="object-cover h-24 sm:h-32 w-full" :src="backgroundimg"></nuxt-img>

            <div class="absolute top-8 sm:top-12 px-2 ">
                <div class="font-extrabold sm:text-4xl sm:px-4">

                    <span>Welcome to</span>
                    <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-500  to-teal-400  ">Chang Liu Team</span>
                </div>
                <!-- <div class="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-green-200 via-green-700  to-green-300  text-white sm:text-4xl sm:px-4 italic">Welcome to Chang Liu Team</div> -->
                <div class="text-md  text-green-700 sm:text-xl lg:text-2xl sm:px-4 italic">Trees cell wall formation and wall signal Group</div>
            </div>
            <div class="bg-emerald-400">

                <div class="flex justify-between items-center max-w-7xl mx-auto ">
                    <LabMenu class=""  ></LabMenu>
                    <LabAvatar></LabAvatar>
                </div>
            </div>
        </div>
    </header>

</template>

<script>
import LabMenu from './LabMenu.vue';
import LabAvatar from './LabAvatar.vue';
export default{
    components:{LabMenu , LabAvatar},
    name: "LayoutDefault",
    props:['backgroundimg'],
    created(){
    },
    data(){
        return {
            isOpen:false,
            menus:[
                {
                    title:'主页',
                    url:'/'
                },
                {
                    title:'研究方向',
                    url:'/research'
                },
                {
                    title:'发表论文',
                    url:'/scholar'
                },
                {
                    title:'组内成员',
                    url:'/groupmember'
                },
                {
                    title:'近期活动',
                    url:'/activity'
                },
                {
                    title:'研究方法',
                    url:'/methodology'
                },

                {
                    title:'公开课程',
                    url:'/course'
                },
            ]
        }
    },
    methods:{}
}
</script>