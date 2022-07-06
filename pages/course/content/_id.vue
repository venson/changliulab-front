
<template>
    <!-- /课程详情 开始 -->
    <el-container class="course-section">
      <el-header class="path-wrap txtOf hLh30 course-path">
        <a href="#" title class="c-999 fsize14">Courses</a>
        \
        <a href="#" title class="c-999 fsize14">{{ course.l1Subject }}</a>
        \
        <span class="c-333 fsize14">{{ course.l2Subject }}</span>
      </el-header>
          <el-container class="course-section">
          <el-aside class="course-tree">
            <el-tree :data="chapterSectionList" node-key="id" default-expand-all :props="props"
              :expand-on-click-node="false" @node-click="handleNodeClick">
              <span class="custom-tree-node"  slot-scope="{ node, data }">
                <span style="display:inline-block"> {{ node.label }}</span>
              </span>
            </el-tree>
          </el-aside>
          <el-container class="course-detail">
          
            <!-- <el-main height="calc(100vh-226px)"> -->
            <!-- <el-main class="course-detail" > -->
            <el-header class="frame-bili">
              <iframe class="frame-bili" :src="current.src" scrolling="no" border="0" frameborder="no" framespacing="0"
                allowfullscreen="true" style="height:100%;width:100%" v-if="current.src"></iframe>
            </el-header>
              <el-main class="frame-md">
              <v-md-preview :text="current.content" height="800px"></v-md-preview>
              </el-main>
            <!-- </el-main> -->

            <!-- Markdown editor -->
            <!-- <el-footer class="frame-md">
            </el-footer> -->
          
          
          </el-container>
          </el-container>
    </el-container>

</template>
<script>
import courseApi from "@/api/course"

export default {
  // head(){
  //   return {
  //     script:[
  //       {
  //         hid: 'mermaid',
  //         src: 'https://unpkg.com/mermaid/dist/mermaid.min.js',
  //         defer: true,
  //         callback: () =>{this.mermaidLoaded =true}
  //       }
  //     ]
  //   }
  // },
  data() {
    return {
      contentEditor: '',
      mermaidLoaded: false,
      test: '# title',
      current: {
        content: '',
        title: ''
      },
      section: {
        title: ''
      },
      chapter: {
        title: ''
      },
      course: {},
      props: {
        label: 'title',
        isLeaf: 'isLeaf'
      },
    }

  },
  // asyncData({params, error}){
  //     debugger
  //     const courseData = courseApi.getCourseInfo(params.id)
  //     const chapterSectionListData =courseApi.getChapterSection(this.courseId).then((response) => {
  //     return{
  //       course: courseData.data.data.course
  //     }
  //   });
  // }
  async asyncData({ params, error }) {
    let courseInfoData = await courseApi.getCourseInfo(params.id)
    // courseInfoData.then(response => {
    //     return {
    //     course: response.data.data.course,
    //     chapterList: response.data.data.chapter
    //     }
    //     console.log(this.course)
    // })
    let chapterSectionListData = await courseApi.getChapterSection(params.id)
    let contentData = await courseApi.getChapterSection(params.id)
    console.log("chapterSection")
    console.log(chapterSectionListData.data.data.list)

    console.log("end chapterSection")
    return {
      course: courseInfoData.data.data.course,
      chapterList: courseInfoData.data.data.chapter,
      chapterSectionList: chapterSectionListData.data.data.list,
    }
  },
  methods: {
    handleNodeClick(data, node) {
      console.log(data)
      console.log("node")
      console.log(node)
      console.log(node.data.id)
      if (node.level === 1) {
        this.getChapter(node.data.id)
        this.getChapterContent(node.data.id)
      } else {
        this.getSection(node.data.id)
        this.getSectionContent(node.data.id)
      }
      console.log(this.current)

    },
    getSectionContent(id) {
      console.log(id)
      // debugger
      return Promise.resolve(
        courseApi.getSectionContent(id)
          .then(response => {
            console.log("getSectionContent")
            console.log(response)
            if (response.data.data.item) {

              this.current.content = response.data.data.item.content
              this.content = response.data.data.item
              console.log("content")
              console.log(this.content)
            } else {
              this.current.content = "<h3>No Content available, edit right now</h3>"
            }
            console.log(this.current)
          }))

    },
    // get the content for the chapter by id
    getChapterContent(id) {
      courseApi.getChapterContent(id)
        .then(response => {
          if (response.data.item) {
            this.current.content = response.data.data.item.content
            this.content = response.data.data.item
            console.log("content")
            console.log(this.content)
          } else {
            this.current.content = "<h3>No Content available, edit right now</h3>"
          }
        })
    },
    // get chapter section for tree display

    getSection(id) {
      courseApi.getSection(id)
        .then(response => {
          console.log("##get section")
          const reg = /src="(.+?)"/
          // console.log(response)
          this.section = response.data.data.item;
          this.current.title = this.section.title
          this.current.sort = this.section.sort
          this.current.videoLink = this.section.videoLink
          this.current.src = this.current.videoLink.match(reg)[1]
          console.log("print current")
          console.log(this.current.videoLink.match(reg)[1])
          console.log(this.current)
          // console.log(this.current.videoLink)
          // console.log(reg.match(this.current.videoLink))
          console.log(this.current.videoLink.match(reg))
          console.log("##get section")
        })

    },
    getChapter(id) {
      courseApi.getChapter(id)
        .then(response => {
          this.chapter = response.data.data.item;
          this.current.title = this.chapter.title
          this.current.sort = this.chapter.sort
          this.current.videoLink = ''
          this.current.src = ''
          console.log(this.current)
        })
    },
  },
}
</script>

<style>
.course-detail{
  height: calc(100vh-356px) !important;
}
.course-tree{
  width: 10vw;
  height: calc(100vh -256px);
}
.frame-bili{
  height: 40vh !important;
}
.frame-md{
  height: 50vh;
}
.course-section{
  height: calc(100vh - 356px) !important;
  /* height: calc(70vh); */
}
.course-path{
  height: 30px !important;
}
</style>