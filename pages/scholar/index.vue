<template>
  <div id="aCourseList" class="bg-fa of">
    <!-- /课程列表 开始 -->
    <section class="container ">
      <section class="m-top-10">
        <section class="c-s-dl">
          <section class="fl">
            <ol>
              <el-form :inline="true" size="small">
                <el-form-item label="Title">
                  <el-input v-model="scholarFilter.title"></el-input>
                </el-form-item>
                <el-form-item label="Authors">
                  <el-input v-model="scholarFilter.authors"></el-input>
                </el-form-item>
                <el-form-item label="year">
                  <el-select v-model="scholarFilter.year" placeholder="请选择">
                    <el-option v-for="year in yearRange" :key="year" :label="year" :value="year">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-form>
            </ol>
            <div class="js-wrap">
            <ol class="js-tap clearfix">
              <li>
                Sort:
              </li>
              <li :class="{ 'current bg-orange': scholarFilter.sortByCitations != 0 }">
                <a title="View" href="javascript:void(0)" @click="setSortByCitations()">View
                  <i class="el-icon-caret-bottom" v-if="scholarFilter.sortByCitations === 1"></i>
                  <i class="el-icon-caret-top" v-if="scholarFilter.sortByCitations === 2"></i>
                </a>
              </li>
              <li :class="{ 'current bg-orange': scholarFilter.sortByDate != 0 }">
                <a title="Create Date" href="javascript:void(0)" @click="setSortByDate()">Create Date
                  <i class="el-icon-caret-bottom" v-if="scholarFilter.sortByDate === 1"></i>
                  <i class="el-icon-caret-top" v-if="scholarFilter.sortByDate === 2"></i>
                </a>
              </li>
            </ol>
            </div>
          </section>
        </section>
        <div class="mt40">
          <!-- /无数据提示 开始-->
          <section class="no-data-wrap" v-if="pageScholar.total = 0">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span class="c-666 fsize14 ml10 vam">No scholar Articlee in current category ...</span>
          </section>
          <!-- /无数据提示 结束-->
          <article class="comm-course-list" v-else>
            <el-table :data="pageScholar.records">
              <el-table-column label="TITLE" min-width="500px">
              <template slot-scope="scope">
                <a :href="`/scholar/${scope.row.id}`" class="scholar-title">{{scope.row.title}}</a>
                <div>{{scope.row.authors}}</div>
                <div>{{scope.row.journal}} {{scope.row.volume}} ({{scope.row.issue}}), {{scope.row.pages}}</div>
              </template>
              </el-table-column>
              <el-table-column prop="totalCitations" label="CITED BY" align="center" min-width="50px">
              </el-table-column>
              <el-table-column prop="year" label="YEAR" min-width="50px" align="center">
              </el-table-column>
            </el-table>
            <div class="clear">
            </div>
          </article>
        </div>
        <!-- 公共分页 开始 -->
        <div>
          <div class="paging">
            <!-- undisable这个class是否存在，取决于数据属性hasPrevious -->
            <a :class="{ undisable: !pageScholar.hasPrevious }" href="#" title="First"
              @click.prevent="goToPage(1)">First</a>
            <a :class="{ undisable: !pageScholar.hasPrevious }"
              @click.prevent="!!pageScholar.hasPrevious && goToPage(pageScholar.current - 1)" href="#"
              title="previous">&lt;</a>
            <a v-for="page in pageScholar.pages" :key="page"
              :class="{ current: pageScholar.current == page, undisable: pageScholar.current == page }"
              @click.prevent="goToPage(page)">{{ page }}</a>
            <a :class="{ undisable: !pageScholar.hasNext }"
              @click.prevent="!!pageScholar.hasNext && goToPage(pageScholar.current + 1)" href="#" title="Next">&gt;</a>
            <a :class="{ undisable: !pageScholar.hasNext }"
              @click.prevent="!!pageScholar.hasNext && goToPage(pageScholar.pages)" href="#" title="末页">End</a>
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
import scholarApi from '@/api/scholar'
export default {
  data() {
    return {
      pageScholar: {
        pages: '',
        records: [],
        hasNext: '',
        hasPrevious: '',
        total: '',
        current: '',
      },
      yearRange: [2001, 2002],
      page: 1,
      limit: 10,
      scholarFilter: {
        title: '',
        authors: '',
        year: '',
        sortByCitations: 0,
        sortByDate: 0,
      }
    }
  },
  created() {
    this.getPageScholar(this.page)

  },
  methods: {
    getPageScholar(page = 1) {
      scholarApi.getPageScholar(page, this.limit, this.scholarFilter)
        .then(response => {
          // console.log(response)
          this.pageScholar = response.data.data
          console.log(this.pageScholar)
          console.log(this.pageScholar.records)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.active{
  background: #bdbdbd;
}
.hide {
  display: none;
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