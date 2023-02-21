<template>
  <div class="carousel w-full">
    <div v-for="(img,index) in value" :key="index" :id="index" class="carousel-item relative w-full">
      <img
      :src="img.imageOutlinkUrl===''? img.imageUrl: img.imageOutlinkUrl"
        class="w-full aspect-16/6"
      />
      <div
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
      >
        <a :href="`#${index}`" class="btn btn-circle">❮</a>
        <a :href="`#${index+1}`" class="btn btn-circle">❯</a>
      </div>
    </div>
    <!-- <div id="slide2" class="carousel-item relative w-full">
      <img
        src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
        class="w-full"
      />
      <div
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
      >
        <a href="#slide1" class="btn btn-circle">❮</a>
        <a href="#slide3" class="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide3" class="carousel-item relative w-full">
      <img
        src="/images/stock/photo-1414694762283-acccc27bca85.jpg"
        class="w-full"
      />
      <div
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
      >
        <a href="#slide2" class="btn btn-circle">❮</a>
        <a href="#slide4" class="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide4" class="carousel-item relative w-full">
      <img
        src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
        class="w-full"
      />
      <div
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
      >
        <a href="#slide3" class="btn btn-circle">❮</a>
        <a href="#slide1" class="btn btn-circle">❯</a>
      </div>
    </div> -->
  </div>
</template>

<script>
// import 'tw-elements'
export default {
  name: "LabCarousel",
  props: ["value"],
};
</script>

<style scoped></style>
