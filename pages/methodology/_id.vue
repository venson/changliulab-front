
<template>
  <div class="flex justify-center items-center">
    <div class="w-full max-w-7xl ">
      <div class=" p-8 markdown-body" v-html="methodology"></div>
    </div>
  </div>
</template>
<script>
import pako from 'pako'
import { base64ToBytes } from '@/utils/base64';
export default{

  asyncData({ $methodologyApi,params}) {
    return $methodologyApi.getMethodologyById(params.id).then((response) => {
      let html
      try {
        const bytes = base64ToBytes(response.data.publishedHtmlBrBase64);
        html = pako.inflate(bytes, { to: "string" });
      } catch (error) {
        html = " ";
      }
      return {
        methodology:html,
      };
    });
  },
}
</script>