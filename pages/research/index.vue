<template>
  <div class="flex justify-center items-center">
    <div class="w-full max-w-7xl">
      <ResearchViewer :value="researches" />
    </div>
  </div>
</template>
<script>
import pako from "pako";
import { base64ToBytes } from "@/utils/base64";
import ResearchViewer from "../../components/ResearchViewer.vue";
export default {
    asyncData({ $researchApi }) {
        return $researchApi.getResearch().then((response) => {
            // let html = new Array();
            let researches = response.data;
            // console.log(response);

            researches.forEach((research) => {
                try {
                    const bytes = base64ToBytes(research.publishedHtmlBrBase64);
                    // html.push(pako.inflate(bytes, { to: "string" }));
                    research.html = pako.inflate(bytes, { to: "string" });
                }
                catch (error) {
                  research.html = " "
                    // html.push(" ");
                }
            });
            return {
                researches: researches,
            };
        });
    },
    components: { ResearchViewer }
};
</script>
