<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- member list -->
    <section class="container">
      <header class="comm-title all-teacher-title">
        <section class="c-tab-title">
          <a id="subjectAll" title="all" href="#">All Group Members</a>
          <!-- <c:forEach var="subject" items="${subjectList }">
                            <a id="${subject.subjectId}" title="${subject.subjectName }" href="javascript:void(0)" onclick="submitForm(${subject.subjectId})">${subject.subjectName }</a>
          </c:forEach>-->
        </section>
      </header>
      <section class="c-sort-box unBr">
        <div>
          <!-- /无数据提示 开始 -->
          <section class="no-data-wrap" v-if="data.total===0">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span class="c-666 fsize14 ml10 vam">Not members ...</span>
          </section>
          <!-- /无数据提示 结束 -->
          <article class="i-teacher-list" v-if="data.total>0">
            <ul class="of">
              <li v-for="member in data.records" :key="member.id">
                <section class="i-teach-wrap" >
                  <div class="i-teach-pic">
                    <a :href="`/groupmember/${member.id}`" :title="member.name" >
                      <img :src="member.avatar" alt="teacher.name">
                    </a>
                  </div>
                  <div class="mt10 hLh30 txtOf tac">
                    <a :href="`/groupmember/${member.id}`" :title="member.name" class="fsize18 c-666">{{member.name}}</a>
                  </div>
                  <div class="hLh30 txtOf tac">
                    <span class="fsize14 c-999">{{member.intro}}</span>
                  </div>
                  <div class="mt15 i-q-txt">
                    <p class="c-999 f-fA">{{member.carrer}}</p>
                  </div>
                </section>
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
    <!-- /讲师列表 结束 -->
  </div>
</template>

<script>
import teacherApi from '@/api/teacher'
export default {
    asyncData({param, error}){
        return teacherApi.getTeacherList(1,8)
        .then(response => {
            return {data: response.data.data}
            console.log(data)
        })

    },
    methods: {
      goToPage(page){
        teacherApi.getTeacherList(page, 8)
        .then(response=>{
          this.data = response.data.data
          console.log(this.data)
        })
      }
    },
}

</script>