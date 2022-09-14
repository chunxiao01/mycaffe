<template>
  <div class="home_swiper">
    <swiper ref="homeSwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in homeswiperlist" :key="index">
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
  name: "HomeSwiper",
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
      homeswiperlist: [
        { src: require("assets/img/home/homeswiper/swiper1.png") },
        { src: require("assets/img/home/homeswiper/swiper2.png") },
        { src: require("assets/img/home/homeswiper/swiper3.png") },
        { src: require("assets/img/home/homeswiper/swiper4.png") },
        { src: require("assets/img/home/homeswiper/swiper5.png") }
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
.home_swiper {
  width: 100%;
}
.home_swiper img {
  width: 100%;
}
.home_swiper >>> .swiper-pagination-bullet-active {
  background: var(--base-theme-color) !important;
}
</style>
