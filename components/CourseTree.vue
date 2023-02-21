<template>
    <div class="relative mx-2 z-50">
        <nav>
            <ul>
                <li v-for="(chapter, index) in value" :key="index">
                    <div>
                        <h2 class="px-6 py-2">
                            <button class=" text-base font-bold w-full text-left hover:bg-gray-300"
                                @click="setChapterVisible(index)">{{ chapter.title }}</button>
                        </h2>
                        <div v-show="chapter.expand || index===parseInt($route.query.chapter)">
                            <ul>
                                <li v-for="(section, sindex) in chapter.children" :key="sindex">
                                    <nuxt-link :to="{path:`${section.id}`, query:{chapter:`${index}`}}">
                                        <div
                                            class="pr-6 py-2 pl-6 hover:pl-4 hover:border-solid  hover:border-l-8 hover:border-green-900 hover:bg-gray-300"
                                            :class="$route.params.sectionid===section.id? 'bg-gray-200 border-green-800 border-solid border-l-8':''">
                                            {{ section.title }}
                                        </div>
                                    </nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>

            </ul>
        </nav>
    </div>

</template>
<script>

export default {
    props: {
        value: {
            type: Array
        }
    },

    created() {
    },
    methods: {
        setChapterVisible(index) {
            // console.log(this.$route.query.chapter)
            this.$set(this.value[index], 'expand', !this.value[index].expand)
        }
    },

}

</script>