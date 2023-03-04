<template>
  <div class="flex justify-center items-center">
    <div class="max-w-7xl w-full divide-y p-4">
      <div class="flex p-4 items-center">
        <nuxt-img class="h-40 w-40 rounded-full" :src="member.avatar" />
        <div class="pl-8">
          <p class="text-3xl">{{ member.name }}</p>
          <p class="text-sm">{{ member.title }}</p>
          <p>{{ member.intro }}</p>
        </div>
      </div>
      <div class="p-8">
        <p class="text-2xl pb-2">职业履历</p>
        <div>{{ member.career }}</div>
      </div>
      <div class="p-8" v-if="researches">
        <p class="text-2xl pb-2">研究方向</p>

        <div class="w-full max-w-7xl" >
          <ResearchViewer :value="researches" />
        </div>
      </div>
      <div class="p-8" v-if="pageScholar && pageScholar.total>0" >
        <p class="text-2xl pb-2">发表论文</p>
        <ScholarTable class="w-full" :scholars="pageScholar.records" />
        <Pagination :page="pageScholar" @goToPage="goToScholarPage" />
      </div>
      <div class="p-8" v-if="pageCourse && pageCourse.total>0">
        <p class="text-2xl pb-2">主讲课程</p>
        <div class="flex flex-col sm:flex-row">
          <CourseCard
            class="sm:basis-1/2 md:basis-1/4"
            v-for="(course, index) in pageCourse.records"
            :key="index"
            :value="course"
          />
        </div>
        <Pagination :page="pageCourse" @goToPage="goToCoursePage" />
      </div>
    </div>
  </div>
</template>

<script>
import CourseCard from "../../components/CourseCard.vue";
import Pagination from "../../components/Pagination.vue";
import ScholarTable from "../../components/ScholarTable.vue";
import pako from "pako";
import { base64ToBytes } from "@/utils/base64";
import ResearchViewer from "../../components/ResearchViewer.vue";
export default {
  watchQuery: ["spage", "cpage"],
  async asyncData({ params, $memberApi, query }) {
    const scholarPage = query.spage ? query.spage : 1;
    const coursePage = query.cpage ? query.cpage : 1;
    const res = await $memberApi.getMemberById(
      params.memberid,
      scholarPage,
      coursePage,
      8,
      8
    );
    console.log(res);
    let researches;
    if (res.data.researches && res.data.researches.length > 0) {
      researches = res.data.researches;
      researches.forEach((research) => {
        try {
          const bytes = base64ToBytes(research.publishedHtmlBrBase64);
          // html.push(pako.inflate(bytes, { to: "string" }));
          research.html = pako.inflate(bytes, { to: "string" });
        } catch (error) {
          research.html = " ";
          // html.push(" ");
        }
      });
    }
    return {
      member: res.data.member,
      pageCourse: res.data.courses,
      pageScholar: res.data.scholars,
      researches: researches,
      // pageCourse: courseRes.data,
      // pageScholar: scholarRes.data,
      // scholarPageNum: scholarPage,
      // coursePageNum: coursePage,
    };
  },
  components: { CourseCard, Pagination, ScholarTable },
  methods: {
    goToCoursePage(page) {
      this.$router.push(
        { path: "" },
        { query: { spage: this.scholarPageNum, cpage: page } }
      );
    },
    goToScholarPage(page) {
      this.$router.push(
        { path: "" },
        { query: { spage: page, cpage: this.coursePageNum } }
      );
    },
  },
};
</script>
