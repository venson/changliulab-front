<template>
    <div>
        <v-md-preview :text="methodology.publishedMd"></v-md-preview>
    </div>
</template>
<script>
import methodologyApi from '@/api/methodology'
export default({
    data(){
        return {
            lang: 'zh',
        methodology: {
            publishedMd: 'No content',
        }
        }
    },
    created() {
        this.getMethodology(this.lang)
    },
    methods: {
        getMethodology(lang){
            methodologyApi.getMethodology(lang)
            .then(response=>{
                console.log(response)
                this.methodology = response.data.data.item
            })

        }
    },

})
</script>