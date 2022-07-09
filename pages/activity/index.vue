<template>
  <div id="aCourseList" class="bg-fa of">
    <!-- /课程列表 开始 -->
    <section class="container ">
      <section class="m-top-10">
        <div class="mt40">
          <article class="comm-course-list">
            <el-table :data="pageList.records">
              <el-table-column  min-width="500px">
              <template slot-scope="scope">
                <a :href="`/activity/${scope.row.id}`" class="scholar-title">{{scope.row.title}}</a>
                <div>
                    <span>{{scope.row.authorMemberName}}</span>
                    <span>{{scope.row.activityDate}} </span>
                </div>
              </template>
              </el-table-column>
            </el-table>
          </article>
        </div>
        <!-- 公共分页 开始 -->
        <div>
          <div class="paging">
            <!-- undisable这个class是否存在，取决于数据属性hasPrevious -->
            <a :class="{ undisable: !pageList.hasPrevious }" href="#" title="First"
              @click.prevent="goToPage(1)">First</a>
            <a :class="{ undisable: !pageList.hasPrevious }"
              @click.prevent="!!pageList.hasPrevious && goToPage(pageList.current - 1)" href="#"
              title="previous">&lt;</a>
            <a v-for="page in pageList.pages" :key="page"
              :class="{ current: pageList.current == page, undisable: pageList.current == page }"
              @click.prevent="goToPage(page)">{{ page }}</a>
            <a :class="{ undisable: !pageList.hasNext }"
              @click.prevent="!!pageList.hasNext && goToPage(pageList.current + 1)" href="#" title="Next">&gt;</a>
            <a :class="{ undisable: !pageList.hasNext }"
              @click.prevent="!!pageList.hasNext && goToPage(pageList.pages)" href="#" title="末页">End</a>
            <div class="clear"></div>
          </div>
        </div>
        <!-- 公共分页 结束 -->
      </section>
    </section>
    <!-- /课程列表 结束 -->
  </div>
</template>
<script>
import activityApi from '@/api/activity'
export default{
    data(){
        return {
            pageList: {
                records: [],
            },
            page: 1,
            limit: 5,
        }
    },
    created(){
        this.getPageList(this.page)

    },
    methods: {
        getPageList(page=1){
            activityApi.getPageList(page,this.limit)
            .then(response => {
                this.pageList = response.data.data
                console.log(this.pageList)
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.active{
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
.m-top-10{
  margin-top: -10;
}
.scholar-title{
  font-size: 16px;
  padding: 8px 0;
  color: #660099;
}

</style>