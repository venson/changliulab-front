
<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- /课程列表 开始 -->
    <section class="container">
      <section class="c-sort-box">
        <section class="c-s-dl">
          <dl>
            <dt>
              <span class="c-999 fsize14">Category</span>
            </dt>
            <dd class="c-s-dl-li">
              <ul class="clearfix">
                <li>
                  <a title="All" href="#" @click="clearCateFilter()">All</a>
                </li>
                <li v-for="(subject,index) in topSubjectNestedList" :key="index" :class="{active:oneIndex==index}">
                  <a title="subject.title" href="#" @click="setTopSubject(subject, index)">{{subject.title}}</a>
                </li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>
              <span class="c-999 fsize14"></span>
            </dt>
            <dd class="c-s-dl-li">
              <ul class="clearfix">
                <li v-for="(subject,index) in subSubjectList" :key="index" :class="{active:twoIndex==index}">
                  <a title="subject.title" href="#" @click="setSubSubject(subject,index)">{{subject.title}}</a>
                </li>
              </ul>
            </dd>
          </dl>
          <div class="clear"></div>
        </section>
        <div class="js-wrap">
          <!-- <section class="fr">
            <span class="c-ccc">
              <i class="c-master f-fM">1</i>/
              <i class="c-666 f-fM">1</i>
            </span>
          </section> -->
          <section class="fl">
            <ol class="js-tap clearfix">
              <li>
                Sort:
              </li>
              <li :class="{'current bg-orange': filter.viewSort!=0}">
                <a title="View" href="javascript:void(0)" @click="setViewSort()">View
                  <i class="el-icon-caret-bottom" v-if="filter.viewSort ===1"></i>
                  <i class="el-icon-caret-top" v-if="filter.viewSort ===2"></i>
                  </a>
              </li>
              <li :class="{'current bg-orange': filter.gmtCreateSort!=0}">
                <a title="Create Date" href="javascript:void(0)" @click="setGmtCreateSort()">Create Date
                  <i class="el-icon-caret-bottom" v-if="filter.gmtCreateSort===1"></i>
                  <i class="el-icon-caret-top" v-if="filter.gmtCreateSort ===2"></i>
                  </a>
              </li>
              <li :class="{'current bg-orange': filter.updateSort!=0}">
                <a title="Update Date" href="javascript:void(0)" @click="setUpdateSort()">Update Date&nbsp;
                  <i class="el-icon-caret-bottom" v-if="filter.updateSort ===1"></i>
                  <i class="el-icon-caret-top" v-if="filter.updateSort ===2"></i>
                </a>
              </li>
            </ol>
          </section>
        </div>
        <div class="mt40">
          <!-- /无数据提示 开始-->
          <section class="no-data-wrap" v-if="data.total=0">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span class="c-666 fsize14 ml10 vam">No courses in current category ...</span>
          </section>
          <!-- /无数据提示 结束-->
          <article class="comm-course-list" v-else>
            <ul class="of" id="bna">
              <li v-for="course in data.records">
                <div class="cc-l-wrap">
                  <section class="course-img">
                    <img :src="course.cover" class="img-responsive" alt="">
                    <div class="cc-mask">
                      <a :href="`/course/${course.id}`" title="Start" class="comm-btn c-btn-1">Start</a>
                    </div>
                  </section>
                  <h3 class="hLh30 txtOf mt10">
                    <a :href="`/course/${course.id}`" title="course.title" class="course-title fsize18 c-333">{{course.title}}</a>
                  </h3>
                  <section class="mt10 hLh20 of">
                      <span class="fr jgTag bg-green" v-if="course.available === 0">
                        <i class="c-fff fsize12 f-fA">免费公开</i>
                      </span>
                      <span class="fr jgTag bg-green" v-else-if="course.available === 1">
                        <i class="c-fff fsize12 f-fA">免费需注册</i>
                      </span>
                    <span class="fl jgAttr c-ccc f-fA">
                      <i class="c-999 f-fA">{{course.viewCount}} Views</i>
                    </span>
                  </section>
                </div>
              </li>
            </ul>
            <div class="clear"></div>
          </article>
        </div>
        <!-- 公共分页 开始 -->
        <div>
          <div class="paging">
            <!-- undisable这个class是否存在，取决于数据属性hasPrevious -->
            <a 
            :class="{undisable: !data.hasPrevious}"
            href="#" title="First"
            @click.prevent="goToPage(1)"
            >First</a>
            <a
            :class="{undisable: !data.hasPrevious}"
            @click.prevent="!!data.hasPrevious && goToPage(data.current -1)" 
            href="#" title="previous"
            >&lt;</a>
            <a v-for="page in data.pages" :key="page" 
            :class="{current: data.current == page, undisable: data.current == page}"
            @click.prevent="goToPage(page)"
            >{{page}}</a>
            <a 
            :class="{undisable: !data.hasNext}"
            @click.prevent="!!data.hasNext && goToPage(data.current +1)" 
            href="#" title="Next">&gt;</a>
            <a 
            :class="{undisable: !data.hasNext}"
            @click.prevent="!!data.hasNext && goToPage(data.pages)" 
            href="#" title="末页">End</a>
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
import courseApi from "@/api/course"
export default {
  data(){
    return {
      page: 1,
      data: {},
      topSubjectNestedList: [],
      subSubjectList: [],
      filter: {
      viewSort: 0,
      gmtCreateSort: 0,
      updateSort: 0,
      },
      oneIndex: -1,
      twoIndex: -1,
    }

  },
  created(){
    this.getPageCourseList(1,8,this.filter)
    this.getAllSubject()

  },
  methods:{
    setViewSort(){
      this.filter.gmtCreateSort = 0
      this.filter.updateSort = 0
      if(this.filter.viewSort< 2){
        this.filter.viewSort +=1
      }else{
        this.filter.viewSort = 0
      }
      this.goToPage(this.page)
    },
    setGmtCreateSort(){
      this.filter.viewSort= 0
      this.filter.updateSort = 0
      if(this.filter.gmtCreateSort< 2){
        this.filter.gmtCreateSort +=1
      }else{
        this.filter.gmtCreateSort = 0
      }
      this.goToPage(this.page)
    },
    setUpdateSort(){
      this.filter.viewSort= 0
      this.filter.gmtCreateSort= 0
      if(this.filter.updateSort< 2){
        this.filter.updateSort +=1
      }else{
        this.filter.updateSort = 0
      }
      this.goToPage(this.page)
    },
    getPageCourseList(page, limit,filter){
      courseApi.getPageCourseList(page,limit,filter)
      .then(response => {
        this.data = response.data.data
        console.log(this.data)
      })
    },
    getAllSubject(){
      courseApi.getAllSubject().then(response =>{
        this.topSubjectNestedList = response.data.data.list
      })
    },
    goToPage(page){
      this.getPageCourseList(page,8,this.filter)
    },
    setTopSubject(subject, index){
      this.subSubjectList = subject.children
      this.twoIndex = -1
      this.oneIndex = index
      this.filter.subjectParentId = subject.id
      this.filter.subjectId = ''
      console.log(this.filter)
      this.goToPage(this.page)
    },
    setSubSubject(subject, index){
      this.twoIndex = index
      this.filter.subjectId = subject.id
      this.goToPage(this.page)
    },
    clearCateFilter(){
      this.setTopSubject('')
      this.oneIndex = -1
    }

  }
};
</script>

<style>
.active{
  background: #bdbdbd;
}
.hide {
  display: none;
}
.show {
  display: block;
}

</style>