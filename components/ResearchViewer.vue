<template>
  <div class="divide-y">
    <div class="py-8" v-for="(research, index) in value" :key="index">
        <div class="flex justify-between items-center px-16">
            <div class="text-4xl">{{ research.title}}</div>
            <ResearchMember :value="research.members"/>
        </div>
      <div class="p-8" v-html="research.html"></div>
    </div>
  </div>
</template>

<script>
import ResearchMember from './ResearchMember.vue';

export default {
    name: "ResearchViewer",
    props: ["value"],
    components: { ResearchMember }
}
</script>

<style lang="scss" scoped></style>
