<template>
  <div class="flex justify-center" v-if="page.total && page.pages > 1">
    <nav aria-label="Page navigation example">
      <ul class="flex list-style-none">
        <li
          class="page-item disabled m-2"
          :class="page.hasNext ? '' : 'disable'"
        >
          <button
            type="button"
            class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full"
            :class="
              page.hasPrevious
                ? 'text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'
                : 'text-gray-500 pointer-events-none focus:shadow-none'
            "
            tabindex="-1"
            :aria-disabled="!page.hasPrevious"
            @click="goToPage(page.current - 1)"
          >
            <ArrowLeft />
          </button>
        </li>
        <li v-if="leftDot" class="inline-flex items-center m-2">
          <span>...</span>
        </li>
        <li
          class="page-item m-2 flex justify-center items-center"
          :class="page.current === pageNumber ? 'active' : ''"
          v-for="pageNumber in pageNumbers"
          :key="pageNumber"
        >
          <!-- <button
            type="button"
            class="page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded-full"
            :class="
              page.current === pageNumber
                ? 'bg-blue-600 text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md'
                : 'bg-transparent text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'
            "
            @click="goToPage(pageNumber)"
          >
            {{ pageNumber }} <span class="visually-hidden">(current)</span>
          </button> -->
          <button
            type="button"
            class="page-link w-8 h-8 relative  border-0 outline-none transition-all duration-300 rounded-full"
            :class="
              page.current === pageNumber
                ? 'bg-blue-600 text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md'
                : 'bg-transparent text-gray-800 hover:text-gray-800  focus:shadow-none'
            "
            @click="goToPage(pageNumber)"
          >
            {{ pageNumber }} <span class="visually-hidden">(current)</span>
          </button>
        </li>
        <!-- <li class="page-item active"><a
                        class="page-link relative block py-1.5 px-3 border-0 bg-blue-600 outline-none transition-all duration-300 rounded-full text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
                        href="#">2 <span class="visually-hidden">(current)</span></a></li> -->
        <!-- <li class="page-item"><a
                        class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                        href="#">3</a></li> -->
        <!-- <li class="page-item"
                :class="page.hasNext? '':'disable'"><a
                        class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full"
                        :class="!page.hasNext? 'text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none':'text-gray-500 pointer-events-none focus:shadow-none'"
                        @click="goToPage(page.current+1)" tabindex="1" :aria-disabled="!page.hasNext">Next</a></li> -->
        <li v-if="rightDot" class="inline-flex items-center m-2">
          <span>...</span>
        </li>
        <li class="page-item m-2" :class="page.hasNext ? '' : 'disable'">
          <button
            type="button"
            class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full"
            :class="
              page.hasNext
                ? 'text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'
                : 'text-gray-500 pointer-events-none focus:shadow-none'
            "
            @click="goToPage(page.current + 1)"
            tabindex="1"
            :aria-disabled="!page.hasNext"
          >
            <ArrowRight />
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import ArrowLeft from './svg/ArrowLeft.vue';
import ArrowRight from './svg/ArrowRight.vue';
export default {
    components:{ ArrowLeft, ArrowRight },
  name: "PaginationLab",
  props: {
    page: {
      type: Object,
    },
    displayLength: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      pageNumbers: [],
      leftDot: false,
      rightDot: false,
    };
  },
  created() {
  },
  mounted() {
    this.process();
  },
  methods: {
    goToPage(pageNumber) {
      console.log("goto", pageNumber);
      if (
        pageNumber <= this.page.pages &&
        pageNumber >= 1 &&
        pageNumber !== this.page.current
      ) {
        console.log("goto", pageNumber);
        this.$emit("goToPage", pageNumber);
      }
    },
    process() {
      if (!this.page || !this.page.total || this.page.total === 0) {
        return;
      }
      if (this.displayLength % 2 === 0) {
        this.displayLength++;
      }
      let pages = this.page.pages;

      if (pages <= this.displayLength && pages > 0) {
        this.pageNumbers = Array(pages)
          .fill()
          .map((_, i) => i + 1);
        // this.pageNumber=Array.from({length: this.page.pages}, (_, i) => i + 1)
      } else if (this.page.current <= this.displayLength/2) {
        this.pageNumbers = Array(this.displayLength)
          .fill()
          .map((_, i) => i + 1);
        this.leftDot = false;
        this.rightDot = true;
      } else if (this.pageNumber >= pages - this.displayLength/2) {
        this.pageNumbers = Array(this.displayLength)
          .fill()
          .map((_, i) => i + pages - this.displayLength + 1);
        this.leftDot = true;
        this.rightDot = false;
      } else {
        this.pageNumbers = Array(this.displayLength)
          .fill()
          .map((_, i) => i + current - Math.floor(this.displayLength / 2));
      }
    },
  },
};
</script>
