<template>

  <div class="flex justify-center items-center">
    <div class="w-full max-w-7xl ">
        <div class="p-4">
        <div class="text-center text-3xl p-2">{{ title }}</div>
        <div class="text-center text-base">{{ activityDate }}</div>
        </div>
      <div class=" p-8 markdown-body" v-html="activity"></div>
    </div>
  </div>
</template>
<script>
import pako from 'pako'
import { base64ToBytes } from '@/utils/base64';
export default{
  asyncData({ $activityApi,params}) {
    return $activityApi.getActivity(params.id).then((response) => {
    //   console.log(response)
      let html
      try {
        const bytes = base64ToBytes(response.data.htmlBrBase64);
        html = pako.inflate(bytes, { to: "string" });
      } catch (error) {
        html = " ";
      }
      return {
        activity:html,
        title:response.data.title,
        activityDate:response.data.activityDate,
      };
    });
  },
}
</script>
