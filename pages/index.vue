<template>
  <div class="px-4 max-w-7xl mx-auto divide-y">
    <div v-if="banners && banners.length>0">
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
    <div class="py-4" v-if="memberList && memberList.length>0">
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

    <div class="py-4" v-if="courseList && courseList.length>0">
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
    console.log(index);
    console.log(banners);
    return {
      courseList: index.data && index.data.course,
      activityList: index.data && index.data.activity,
      memberList: index.data && index.data.member,
      banners: banners.data && banners.data,
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
