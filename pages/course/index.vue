<template>
  <div class="flex justify-center items-center">
    <div class="max-w-7xl w-full p-8">
      <div class="flex relative pb-8 justify-between">
        <div class="flex">
          <div v-for="(pSubject, index) in subjects" :key="index">
            <div class="group">
              <nuxt-link
                :to="{ path: '/course', query: { pid: `${pSubject.id}` } }"
                class="text-cente hover:text-green-600 p-4"
                :class="
                  $route.query.pid === pSubject.id ? 'text-green-600' : ''
                "
                >{{ pSubject.title }}
              </nuxt-link>
              <div
                class="group-hover:visible absolute top-8 left-0 invisible px-4"
              >
                <nuxt-link
                  :to="{
                    path: '/course',
                    query: { pid: `${pSubject.id}`, sid: `${subject.id}` },
                  }"
                  class="px-4"
                  :class="
                    $route.query.sid === subject.id ? 'text-green-600' : ''
                  "
                  v-for="(subject, subIndex) in pSubject.children"
                  :key="subIndex"
                >
                  {{ subject.title }}</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
        <div>Sort</div>
      </div>
      <div class="flex flex-col sm:flex-row">
        <CourseCard
          class="sm:basis-1/2 md:basis-1/4 m-2"
          v-for="(course, index) in pageCourse.records"
          :key="index"
          :value="course"
        />
      </div>
      <Pagination :page="pageCourse" />
    </div>
  </div>
</template>
<script>
import { sortType } from "../../common/types";
import CourseCard from "../../components/CourseCard.vue";
import Pagination from "../../components/Pagination.vue";
export default {
  watchQuery: ["pid", "sid", "sort"],
  async asyncData({ $courseApi, query }) {
    const sort = query.sort ? query.sort : sortType.CREATE;
    const filter = {
      subjectId: query.sid,
      subjectParentId: query.pid,
      sort: sort,
    };
    const page = query.page ? query.page : 1;
    const subject = await $courseApi.getAllSubject();
    const course = await $courseApi.getPageCourse(page, 8, filter);
    console.log(subject);
    console.log(course);
    return {
      pageCourse: course.data,
      subjects: subject.data,
    };
  },
  data() {
    return {
      sortType: sortType,
    };
  },
  created() {},
  methods: {},
  components: { CourseCard, Pagination },
};
</script>

<style></style>
