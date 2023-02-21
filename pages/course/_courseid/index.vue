<template>
  <div id="" class="">
    <div>
    <CourseDetail :course="course" :start-id="course.syllabus[0].children[0].id"></CourseDetail>
    </div>
    <div class="max-w-7xl mx-auto">
      <CourseSyllabus :value="course.syllabus"/>
    </div>
  </div>
</template>
<script>
import CourseDetail from "@/components/CourseDetail.vue"
import CourseChapter from "@/components/CourseChapter.vue"
import CourseSyllabus from "@/components/CourseSyllabus.vue"

export default{
  components:{ CourseDetail, CourseChapter, CourseSyllabus },
  data() {
    return {
      courseId:'',
      courseTree: '',
      courseInfo: {
        l1Subject: '',
        l2Subject: '',
        viewCount: '',
        totalHour:'',
        intro: '',
        avatar: '',
        memberName:'',
        isPublic: false,
      },
      course: {
        description: ''
      }
    }
  },
  created() {

  },
  async asyncData({params,$courseApi}){
    // console.log(params.id)
    return $courseApi.getCourseByCourseId(params.courseid).then(res=>{
      console.log(res)
      return {
        course :res.data,
      }

    })
  },
  methods: {
  },
}
</script>
