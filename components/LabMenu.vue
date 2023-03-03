<template>
  <div class="relative sm:static ml-2 sm:flex sm:items-center">
    <button
      @click="isOpen = !isOpen"
      type="button"
      class="block text-gray-300 hover:text-white focus:text-white focus:outline-none relative sm:hidden"
    >
      <CloseIcon class="text-white fill-current" v-show="isOpen" />
      <Navigation24Regular v-show="!isOpen" />
    </button>
    <button
      v-show="isOpen"
      @click="isOpen = false"
      tabindex="-1"
      class="z-40 fixed inset-0 h-screen w-screen bg-black opacity-50 cursor-default"
    ></button>
    <!-- menu for hambuger -->
    <div v-if="isOpen" class="py-2 absolute left-2 z-50 bg-green-700 w-20">
      <a
        v-for="(menu, index) in value"
        :key="index"
        :href="menu.url"
        :class="pathMatch(path, menu.url) ? 'bg-green-900' : ''"
        class="mt-1 block px-2 py-1 sm:mt-0 text-white font-semibold rounded hover:bg-green-900"
      >
        {{ menu.title }}
      </a>
    </div>
    <!-- memu for full page -->
    <div class="sm:flex  hidden">
      <nuxt-link
        class="py-3 px-3 lg:px-6 hover:text-yellow-300 border-b-2 hover:border-yellow-300 border-transparent	"
        :class="
          pathMatch(path, menu.url)
            ? 'text-yellow-300 border-yellow-300'
            : 'text-gray-100'
        "
        v-for="(menu, index) in value"
        :key="index"
        :to="menu.url"
      >
        {{ menu.title }}
      </nuxt-link>
      <!-- <a v-for="(menu, index) in value" :key="index" :href="menu.url"
                :class="pathMatch(path, menu.url) ? 'bg-green-900' : ''"
                class="mt-1 block px-2 sm:mt-0 text-white font-semibold rounded hover:bg-green-900">
            </a> -->
    </div>
  </div>
</template>
<script>
import CloseIcon from "@/components/svg/CloseIcon";
import Navigation24Regular from "@/components/svg/Navigation24Regular";
export default {
  name: "LabMenu",
  components: { CloseIcon, Navigation24Regular },
  props: {
    value: {
      type: Array,
      default: () => [
        {
          title: "主页",
          url: "/",
        },
        {
          title: "研究方向",
          url: "/research",
        },
        {
          title: "发表论文",
          url: "/scholar",
        },
        {
          title: "组内成员",
          url: "/groupmember",
        },
        {
          title: "近期活动",
          url: "/activity",
        },
        {
          title: "研究方法",
          url: "/methodology",
        },

        {
          title: "公开课程",
          url: "/course",
        },
      ],
    },
  },
  // created() {
  //     this.path = this.$route.path
  //     // console.log(this.path)
  //     // pathMatch(this.path,'/course/14')
  // },
  computed: {
    path() {
      return this.$route.path;
    },
  },
  data() {
    return {
      // path: '',
      isOpen: false,
    };
  },
  methods: {
    pathMatch(path, url) {
      // console.log('path:'+path +'::url:'+url)
      if (url === "/") {
        if (path === "/") {
          return true;
        }
        return false;
      }
      return path.includes(url);
    },
  },
};
</script>
