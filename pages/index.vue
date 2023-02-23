<template>
  <div class="px-4 max-w-7xl mx-auto divide-y">
    <div v-if="banners">
      <ImgCarousel :value="banners" />
      <!-- <LabCarousel  :value="banners"/> -->
    </div>
    <div class="pt-8">
      <div class=" text-center font-semibold text-3xl">近期活动</div>
      <div class="">
        <ActivityTable :value="activityList" />
        <!-- <div v-for="(activity,index) in activityList" :key="index" class="sm:basis-1/2 md:basis-1/4 mx-1">
          <div>{{activity.title}}</div>
        </div> -->
      </div>
    </div>
    <div class="py-4" v-if="memberList">
      <div class="py-4 text-center font-semibold text-3xl">实验室成员</div>
      <div class="flex flex-col sm:flex-row">
        <div
          v-for="(member, index) in memberList"
          class="sm:basis-1/2 md:basis-1/4 mx-1"
          :key="index"
        >
          <MemberCard :member="member" />
        </div>
      </div>
    </div>

    <div class="py-4" v-if="courseList">
      <div class="m-8 text-center font-semibold text-3xl">优秀课程</div>
      <div class="flex flex-col sm:flex-row">
        <div
          v-for="(course, index) in courseList"
          :key="index"
          class="sm:basis-1/2 md:basis-1/4 mx-1"
        >
          <CourseCard :value="course" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActivityTable from "../components/ActivityTable.vue";
import CourseCard from "../components/CourseCard.vue";
import ImgCarousel from "../components/ImgCarousel.vue";
import LabCarousel from "../components/LabCarousel.vue";
import MemberCard from "../components/MemberCard.vue";
export default {
  name: "MainPage",
  async asyncData({ $indexApi, $bannerApi }) {
    const index = await $indexApi.getIndexData();
    const banners = await $bannerApi.getBannerList();
    // console.log(res.member);
    return {
      courseList: index && index.data.course,
      activityList: index && index.data.activity,
      memberList: index && index.data.member,
      banners: banners && banners.data,
    };
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
  components: {
    MemberCard,
    CourseCard,
    ActivityTable,
    ImgCarousel,
    LabCarousel,
  },
};
</script>
