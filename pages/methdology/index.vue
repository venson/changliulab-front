<template>
  <div class="flex justify-center items-center">
    <div class="w-full max-w-7xl">
      <div class="p-8" v-html="methodology"></div>
    </div>
  </div>
</template>
<script>
import pako from "pako";
import { base64ToBytes } from "@/utils/base64";
import { Language } from "@/common/types";
export default({
  asyncData({ $methodologyApi }) {
    return $methodologyApi.getMethodology(Language.CHINESE).then((response) => {
      let html;
      try {
        const bytes = base64ToBytes(response.data.publishedHtmlBrBase64);
        html = pako.inflate(bytes, { to: "string" });
      } catch (error) {
        html = " ";
      }
      return {
        methodology: html,
      };
    });
  },
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