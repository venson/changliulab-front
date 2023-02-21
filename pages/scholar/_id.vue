<template>
  <div class="max-w-7xl mx-auto">
    <div class="flex flex-row items-center my-4">
      <div class="mx-4">
        <a
          class="text-lg text-green-800 hover:underline underline-offset-4"
          :href="scholar.titleLinkUrl"
          >{{ scholar.title }}</a
        >
      </div>
      <div class="mx-4">
        <a
          class="text-base hover:underline underline-offset-4"
          :href="scholar.linkUrl"
          >{{ scholar.linkText }}</a
        >
      </div>
    </div>
    <div class="flex flex-col sm:flex-row">
      <ScholarForm :scholar="scholar" :citations="citations" />

      <div class="sm:basis-60 shrink-0">
        <div>Authors in lab</div>
        <div class="flex flex-row sm:flex-col ">
          <div
            class="basis-1/2 m-2"
            v-for="(member, index) in members"
            :key="index"
          >
            <MemberCard :member="member" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MemberCard from "../../components/MemberCard.vue";
import ScholarForm from "../../components/ScholarForm.vue";

export default {
  asyncData({ params, $scholarApi }) {
    return $scholarApi.getScholarById(params.id).then((res) => {
      // console.log(res)
      console.log(res.data.scholar);
      console.log(res.data.citations);
      console.log(res.data.members);
      return {
        scholar: res.data.scholar,
        citations: res.data.citations,
        members: res.data.members,
      };
    });
  },
  created() {
    // console.log(this.$route)
  },
  mounted() {
    // this.echartsInit()
  },
  data() {
    return {};
  },
  components: { MemberCard },
};
</script>
