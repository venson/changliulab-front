<template>
  <div class=" flex justify-center items-center">
    <div class="w-full max-w-7xl">
    <ScholarTable :scholars="pageScholar.records"/>
    <Pagination :page="pageScholar" @goToPage="goToPage" />

    </div>
    <!-- /课程列表 开始 -->
    <!-- /课程列表 结束 -->
  </div>

  <!-- <div class="max-w-screen-2xl mx-auto"> -->
</template>

<script>
import ScholarTable from "../../components/ScholarTable.vue";
import Pagination from "../../components/Pagination.vue";
export default {
  components: {ScholarTable, Pagination},
  watchQuery: ['page','sort'],
  data() {
    return {
    };
  },
  asyncData({ $scholarApi,params,route,query }) {
    console.log('params', params)
    console.log('route',route)
    console.log('query',query.page)
    console.log('fullpath', route.fullPath)
    const pageNum = query.page? query.page: 1;
    return $scholarApi.getPageScholar(pageNum, 8).then((res) => {
      return {
        pageScholar: res.data,
      };
    });
  },
  created() {},
  methods: {
    goToPage(pageNum){
      this.$router.push({path:'/scholar', query:{page: pageNum}})
      // this.$route.go()
      // this.$scholarApi.getPageScholar(page,1).then((res) =>{
      //   this.pageScholar = res.data;
      // })
    }
  },
};
</script>

</style>
