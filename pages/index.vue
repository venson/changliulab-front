<template>
  <div>
  <el-carousel :interval="3000" arrow="always">
    <el-carousel-item v-for="(item, index) in bannerList" :key="index">
    <img :src="item.imageUrl" style="height:100%;width:100%" alt="图片不见了" />
    </el-carousel-item>
  </el-carousel>
<!-- group news section -->

  <div>
        <section class="container">
          <div class="comm-title">
            <h2 class="tac">
              <span class="c-333">近期活动</span>
            </h2>
          </div>
          </section>
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
      <div>
        <section class="container">
          <div class="comm-title">
            <h2 class="tac">
              <span class="c-333">组内成员</span>
            </h2>
          </div>
          <div>
            <article class="i-member-list">
              <ul class="of">
                <li v-for="member in memberList" :key="member.id">
                  <section class="i-member-wrap">
                    <div class="i-member-pic">
                      <a :href="`/groupmember/${member.id}`" :title="member.name">
                        <img :alt="member.name" :src="member.avatar">
                      </a>
                    </div>
                    <div class="mt10 hLh30 txtOf tac">
                      <a href="/member/1" :title="member.name" class="fsize18 c-666">{{member.name}}</a>
                    </div>
                    <div class="hLh30 txtOf tac">
                      <span class="fsize14 c-999">{{member.career}}</span>
                    </div>
                    <div class="mt15 i-q-txt">
                      <p
                        class="c-999 f-fA"
                      >{{member.intro}}</p>
                    </div>
                  </section>
                </li>
                
              </ul>
              <div class="clear"></div>
            </article>
            <section class="tac pt20">
              <a href="/groupmember" title="All members" class="comm-btn c-btn-2">全部成员</a>
            </section>
          </div>
        </section>
      </div>

    <el-divider></el-divider>
<!-- course section -->

  <!-- <div class="course">
    <el-link class="page-redir" href="http://xxx/course" :underline="false">Public Class</el-link> 
      <el-table
    :data="courseList"
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
  </div> -->
  <!-- more beautiful course list -->
      <div>
        <section class="container">
          <div class="comm-title">
            <h2 class="tac">
              <span class="c-333">优秀课程</span>
            </h2>
          </div>
          <div>
            <article class="comm-course-list">
              <ul class="of" id="bna">
                <li v-for="course in courseList" :key="course.id">
                  <div class="cc-l-wrap">
                    <section class="course-img">
                      <img
                        :src="course.cover"
                        class="img-responsive"
                        :alt="course.title"
                      >
                      <div class="cc-mask">
                        <!-- <a :href="`/course/${course.id}`" title="Start" class="comm-btn c-btn-1">Start</a> -->
                        <a :href="`/course/${course.id}`" title="Start" class="comm-btn c-btn-1">开始</a>
                      </div>
                    </section>
                    <h3 class="hLh30 txtOf mt10">
                      <a :href="`/course/${course.id}`" :title="course.title" class="course-title fsize18 c-333">{{course.title}}</a>
                    </h3>
                    <section class="mt10 hLh20 of">
                      <span class="fr jgTag bg-green" v-if="course.available === 0">
                      <!-- <span class="fr jgTag bg-green" v-show="course.available === 0"> -->
                        <i class="c-fff fsize12 f-fA">免费公开</i>
                      </span>
                      <!-- <span class="fr jgTag bg-green" v-show="course.available === 1"> -->
                      <span class="fr jgTag bg-green" v-else-if="course.available === 1">
                        <i class="c-fff fsize12 f-fA">免费需注册</i>
                      </span>
                      <span class="fl jgAttr c-ccc f-fA">
                        <i class="c-999 f-fA">{{course.viewCount}}人学习</i>
                      </span>
                    </section>
                  </div>
                </li>
               
              </ul>
              <div class="clear"></div>
            </article>
            <section class="tac pt20">
              <a href="/course" title="All members" class="comm-btn c-btn-2">全部课程</a>
            </section>
            <el-divider></el-divider>
            </div>
            </section>
            </div>
<!-- course section -->
  </div>
</template>

<script>
import banner from "@/api/banner"
import index from '@/api/index'
export default {
  name: 'MainPage',
  data() {
    return{
      bannerList: [
        {
        imageUrl: '',
        }
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
      courseList: [],
      memberList: [],
    }

  },
    created(){
    this.getBannerList()
    this.getIndexData()
  },
  methods: {
    toNews(val){
      console.log(val)
    },
    getIndexData(){
      index.getIndexData()
      .then(response => {
        this.courseList = response.data.data.course
        this.memberList = response.data.data.member
      })
    },
    getBannerList(){
      banner.getBannerList()
      .then(response =>{
        this.bannerList = response.data.data.item
      })
    },

  }
  
};
</script>
