<template>
  <div class="home-menu-banner">
    <div class="home-menu-banner-content">
      <swiper ref="homemenubannerSwiper" :options="swiperOptions">
        <swiper-slide v-for="(item, index) in homeswiperlist" :key="index">
          <img :src="item.src" />
          <div class="home-menu-banner-content-btn">
            <span>马上下单＞</span>
          </div>
        </swiper-slide>
        <div class="home-menu-banner-swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper"
import "swiper/css/swiper.css"

export default {
  name: "HomeBanner",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".home-menu-banner-swiper-pagination",
          dynamicBullets: true
        }
      },
      homeswiperlist: [
        { src: require("assets/img/home/homebanner/banner1.png") }
      ]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style scoped>
.home-menu-banner {
  width: 100%;
  padding: 5px 10px;
  position: relative;
}

.home-menu-banner-content-img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 5px 5px 5px 0 rgba(192, 192, 192, 0.2);
}

.home-menu-banner-content img {
  width: 100%;
}

.home-menu-banner-content-btn {
  position: absolute;
  bottom: 10px;
  right: 5px;
}
.home-menu-banner-content-btn span {
  display: inline-block;
  width: 60px;
  height: 24px;
  line-height: 24px;
  font-size: 12px;
  color: #000;
  text-align: right;
  background-color: #fff;
  border-radius: 20px;
}
</style>
