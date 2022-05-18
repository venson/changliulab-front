<template>
  <div>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in bannerList" :key="item">
    <img :src="item" style="height:100%;width:100%" alt="图片不见了" />
    </el-carousel-item>
  </el-carousel>
<!-- group news section -->
  <div class="news">
    <el-link class="page-redir" href="http://xxx/news" :underline="false">Group News</el-link> 
      <el-table
    :data="newsData"
    stripe
    :show-header="false"
    style="width: 100%">
    <el-table-column
      prop="date"
      min-width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      min-width="250">
      <template slot-scope="scope">
        <div>
          <span></span>
          <a :href="`news/${scope.row.id}`">{{scope.row.title}}</a>
        </div>
      </template>
    </el-table-column>
  </el-table>
  </div>
<!-- group news section -->


    <el-divider></el-divider>
<!-- course section -->

  <div class="course">
    <el-link class="page-redir" href="http://xxx/course" :underline="false">Public Class</el-link> 
      <el-table
    :data="courseData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="categorylvl1"
      label="分类1"
      min-width="180">
    </el-table-column>
    <el-table-column
      prop="categorylvl2"
      label="分类2"
      min-width="180">
    </el-table-column>
    <el-table-column
      prop="available"
      label="课程状态"
      min-width="250">
      <template slot-scope="scope">
        <div>
          <span v-if="scope.row.available === 'public'">免费公开</span>
          <span v-else-if="scope.row.available === 'register'">免费需注册</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      prop="id"
      label="课程名称"
      min-width="250">
      <template slot-scope="scope">
        <div>
          <span></span>
          <a :href="`course/${scope.row.id}`">{{scope.row.title}}</a>
        </div>
      </template>
    </el-table-column>
  </el-table>
  </div>
<!-- course section -->
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data() {
    return{
      bannerList: [
        require("@/assets/img/pics/banner1.jpeg"),
        require("@/assets/img/pics/banner2.jpeg"),
      ],
      newsData: [
          {
          id: '2',
          date: '2016-05-02',
          title: '中午打雷',
        }, {
          id: '3',
          date: '2016-05-04',
          title: '下午收衣服',
        }, {
          id: '4',
          date: '2016-05-01',
          title: '晚上洗衣服',
        }, {
          id: '5',
          date: '2016-05-03',
          title: '晚上下雨',
        }
      ],

      courseData: [
          {
          id: '2',
          categorylvl1: '实验',
          categorylvl2: '规范',
          available: 'public',
          title: '吃鸡基本要求',
        }, 
          {
          id: '3',
          categorylvl1: '统计学',
          categorylvl2: '概率论',
          available: 'public',
          title: '吃鸡的成功率',
        }, 
          {
          id: '4',
          categorylvl1: '分析',
          categorylvl2: '有机化学分析',
          available: 'register',
          title: '如何鸡的有机成分',
        }, 
      ]
    }

  },
  methods: {
    toNews(val){
      console.log(val)
    }

  }
  
};
</script>
