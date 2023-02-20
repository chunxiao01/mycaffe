<template>
  <div class="free-card-swiper">
    <swiper ref="FreeCardSwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in freecardswiperlist" :key="index">
        <img :src="item.src" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper"
import "swiper/css/swiper.css"

export default {
  name: "FreeCardSwiper",
  data() {
    return {
      swiperOptions: {
        loop: true,
        autoplay: {
          disableOnInteraction: false,
          delay: 5000
        },
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
        }
      },
      freecardswiperlist: [
        { src: require("assets/img/home/homeswiper/swiper1.webp") },
        { src: require("assets/img/home/homeswiper/swiper2.webp") },
        { src: require("assets/img/home/homeswiper/swiper3.webp") },
        { src: require("assets/img/home/homeswiper/swiper4.webp") },
        { src: require("assets/img/home/homeswiper/swiper5.webp") }
      ]
    }
  },
  // computed: {
  //   swiper() {
  //     return this.$refs.mySwiper.$swiper
  //   }
  // },
  // mounted() {
  //   console.log("Current Swiper instance object", this.swiper)
  //   this.swiper.slideTo(3, 1000, false)
  // },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style scoped>
.free-card-swiper {
  width: 100%;
  padding: 10px 10px 5px 10px;
}
.free-card-swiper img {
  width: 100%;
  border-radius: 8px;
}
.free-card-swiper :deep(.swiper-pagination-bullet-active) {
  background: var(--base-theme-color) !important;
}
</style>
