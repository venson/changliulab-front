<template>
    <div>
        <v-md-preview :text="research.publishedMd"></v-md-preview>
    </div>
</template>
<script>
import researchApi from '@/api/research'
export default({
    data(){
        return {
        research: {
            publishedMd: '',

        },
        lang:'zh'
        }
    },
    created(){
        this.getResearch(this.lang)
    },
    methods: {
        getResearch(lang){
            researchApi.getResearch(lang)
            .then(response=>{
                console.log(response)
                this.research = response.data.data.item
            })

        }
    },

})
</script>