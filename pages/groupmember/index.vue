<template>
  <div class=" flex  justify-center items-center">
    <div class="max-w-7xl w-full p-8">
      <div class="my-4 bg-gray-100">
        <button
          class="pr-4 text-center p-4"
          :class="
            level === MemberLevel.PI
              ? 'text-green-600 border-b-2 border-green-800'
              : ''
          "
          @click="goTo(MemberLevel.PI)"
        >
          主要成员
        </button>
        <button
          class="pr-4 text-center p-4"
          :class="
            level === MemberLevel.CURRENT_MEMBER
              ? 'text-green-600 border-b-2 border-green-800'
              : ''
          "
          @click="goTo(MemberLevel.CURRENT_MEMBER)"
         >当前成员</button>
        <button
          class="pr-4 text-center p-4"
          :class="
            level === MemberLevel.FORMER_MEMBER
              ? 'text-green-600 border-b-2 border-green-800'
              : ''
          "
          @click="goTo(MemberLevel.FORMER_MEMBER)"
        >毕业成员</button>
        <button
          class="pr-4 text-center p-4"
          :class="
            level === MemberLevel.INTERN
              ? 'text-green-600 border-b-2 border-green-800'
              : ''
          "
          @click="goTo(MemberLevel.INTERN)"
        >实习</button>
      </div>

      <div class="flex flex-col sm:flex-row " >
        <MemberCard
          v-show="pageMember.total>0"
          class="sm:basis-1/2 md:basis-1/4 m-2"
          v-for="(member, index) in pageMember.records"
          :key="index"
          :member="member"
        />
        <div v-show="pageMember.total===0" class="w-full">
          No Content

        </div>
      </div>
      <Pagination :page="pageMember"/>
    </div>
  </div>
</template>

<script>
import MemberCard from "../../components/MemberCard.vue";
import { MemberLevel } from "@/common/types";
import Pagination from "../../components/Pagination.vue";
export default {
  watchQuery: ["page", "level"],
  asyncData({ param, error, $memberApi, query }) {
    const page = query.page ? query.page : 1;
    const level = query.level ? query.level : MemberLevel.PI;
    return $memberApi.getPageMembersByLevel(page, 8, level).then((response) => {
      console.log(response.data);
      return { pageMember: response.data,
              level: level };
    });
  },
  data() {
    return {
      MemberLevel: MemberLevel,
    };
  },
  methods: {
    goToPI() {
      this.$router.push({
        path: "/groupmember",
        query: { page: 1, level: MemberLevel.PI },
      });
    },
    goToCM() {
      this.$router.push({
        path: "/groupmember",
        query: { page: 1, level: MemberLevel.CURRENT_MEMBER },
      });
    },
    goTo(level) {
      this.$router.push({
        path: "/groupmember",
        query: { page: 1, level: level },
      });
    },
  },
  components: { MemberCard, Pagination },
};
</script>
