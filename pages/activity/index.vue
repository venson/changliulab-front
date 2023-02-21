<template>
  <div class="flex justify-center items-center">
    <div class="max-w-7xl w-full p-8">
      <ActivityTable :value="pageActivity.records" />
      <Pagination :page="pageActivity"/>
    </div>
  </div>
</template>
<script>
import ActivityTable from "../../components/ActivityTable.vue";
import Pagination from "../../components/Pagination.vue";
export default {
  asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
    $activityApi,
  }) {
    const page = query.page ? query.page : 1;
    return $activityApi.getPageActivity(page, 8).then((res) => {
      return { pageActivity: res.data };
    });
  },
  data() {
    return {
      pageList: {
        records: [],
      },
      page: 1,
      limit: 5,
    };
  },
  created() {},
  methods: {},
  components: { ActivityTable, Pagination },
};
</script>

<style lang="scss" scoped>
.active {
  background: #bdbdbd;
}
.show {
  display: block;
}
/* .pos-rel{
  position: relative;
} */

.formStar {
  font-family: "PingFangSC-Semibold", "PingFang SC Semibold", "PingFang SC",
    sans-serif;
  font-weight: 200;
  font-style: normal;
  font-size: 12px;
  color: #fb0404;
  padding: 0px;
}
.formLabel {
  font-size: 12px;
  color: #333333;
  font-family: "MicrosoftYaHeiLight", "微软雅黑 Light", "微软雅黑", sans-serif;
  font-weight: 100;
  line-height: 20px;
}
.m-top-10 {
  margin-top: -10;
}
.scholar-title {
  font-size: 16px;
  padding: 8px 0;
  color: #660099;
}
</style>
