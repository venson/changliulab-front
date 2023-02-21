<template>
  <div class="flex justify-center items-center">
    <div class="max-w-7xl w-full divide-y">
      <div class="flex p-4">
        <nuxt-img class="h-40 w-40 rounded-full" :src="member.avatar" />
        <div class="pl-4">
          <p class="text-3xl">{{ member.name }}</p>
          <p class="text-sm">{{ member.title }}</p>
          <p>{{ member.intro }}</p>
          <p>{{ member.career }}</p>
        </div>
      </div>
      <div class="p-4">
        <p class="text-2xl pb-2">职业履历</p>
        <div>{{ member.career }}</div>
      </div>
      <div class="p-4">
        <p class="text-2xl pb-2">发表论文</p>
        <ScholarTable class="w-full" :scholars="pageScholar.records" />
        <Pagination :page="pageScholar" @goToPage="goToScholarPage"/>
      </div>
      <div class="p-4">
        <p class="text-2xl pb-2">主讲课程</p>
        <div class="flex flex-col sm:flex-row">
          <CourseCard
          class="sm:basis-1/2 md:basis-1/4"
           v-for="(course, index) in pageCourse.records" :key="index" :value="course" />
        </div>
        <Pagination :page="pageCourse" @goToPage="goToCoursePage"/>

      </div>
    </div>
  </div>
</template>

<script>
import CourseCard from '../../components/CourseCard.vue';
import Pagination from '../../components/Pagination.vue';
import ScholarTable from '../../components/ScholarTable.vue';

export default {
  watchQuery:['spage','cpage'],
    async asyncData({ params, error, $memberApi, $courseApi, $scholarApi, query, }) {
        const scholarPage = query.spage ? query.spage : 1;
        const coursePage = query.cpage ? query.cpage : 1;
        const memberRes = await $memberApi.getMemberById(params.memberid);
        const scholarRes = await $scholarApi.getPageScholarByMemberId(params.memberid, scholarPage, 8);
        const courseRes = await $courseApi.getPageCourseByMemberId(params.memberid, coursePage, 8);
        return {
            member: memberRes.data,
            pageCourse: courseRes.data,
            pageScholar: scholarRes.data,
            scholarPageNum: scholarPage,
            coursePageNum: coursePage,
        };
    },
    components: { CourseCard, Pagination, ScholarTable },
    methods: {
      goToCoursePage(page){
        this.$router.push({path:''}, {query:{spage:this.scholarPageNum, cpage:page}})
      },
      goToScholarPage(page){
        this.$router.push({path:''}, {query:{spage:page, cpage:this.coursePageNum}})
      }
    },
};
</script>
