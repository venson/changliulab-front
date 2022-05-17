<template>
  <div>
<div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
        <div v-for="banner in bannerList" :key="banner.id" class="swiper-slide" style="background: #040B1B;">
            <a target="_blank" :href="banner.linkUrl">
              <img width="100%"
                :src="banner.imageUrl"
                :alt="banner.title"/>
            </a>
        </div>
    </div>
    <div class="swiper-pagination swiper-pagination-white"></div>
    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
</div>
    <h1>sdfasdfasdf</h1>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
