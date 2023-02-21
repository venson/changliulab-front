<template>
  <div class="h-24 relative my-2">
    <a
      class="absolute bottom-8 w-5 bg-gray-500 hover:bg-blue-800 group hover:cursor-pointer flex"
      v-for="(citation, index) in plotData"
      :key="index"
      :style="{ left: +(index * 36 + 8) + 'px', height: citation.y + 'px' }"
      ><div
        class="invisible group-hover:visible absolute bottom-3 left-1 whitespace-nowrap bg-white text-gray-800 border border-solid border-gray-600 text-center text-xs"
        >{{ citation.value ? citation.value : 0 }}</div
      >
      <span class="absolute -bottom-4 -left-1 text-xs" :style="{ width: '36px' }"
        >{{ citation.x }}
      </span>
    </a>
    <div
      class="absolute bottom-8 border-t border-b-0 border-solid border-gray-600 w-full"
      :style="{ width: value.length * 36 + 'px', minWidth: '500px' }"
    ></div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Array,
      default: () => [
        { year: 2010, citations: 2 },
        { year: 2011, citations: 3 },
        { year: 2012, citations: 4 },
      ],
    },
  },
  data() {
    return {
    };
  },
  computed: {
    maxCitation(){
        const citations = this.value.map((o) => o.citations);
        return Math.max(...citations)
    },
    plotData(){
        return this.value.map((o) =>{ return {x: o.year, y: (56*o.citations)/ this.maxCitation, value: o.citations}})
    },
  },
  mounted() {
  },
};
</script>
