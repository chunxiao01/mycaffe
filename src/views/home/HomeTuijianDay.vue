<template>
  <div class="home-tuijian-day">
    <div class="home-tuijian-day-container">
      <div class="home-tuijian-day-title">
        <div class="home-tuijian-day-title-text">
          <span>🧡今日特惠，领券后低至11.9元</span>
        </div>
        <div class="home-tuijian-day-title-more">
          <span>查看全部</span>
        </div>
      </div>
      <div class="home-tujian-day-content">
        <swiper ref="hometujiandaySwiper" :options="swiperOptions">
          <swiper-slide
            v-for="(item, index) in homecouponlistdata"
            :key="index"
          >
            <home-coupon :homecoupondata="item"></home-coupon>
          </swiper-slide>
        </swiper>
        <home-simple-goods-card></home-simple-goods-card>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper"
import "swiper/css/swiper.css"

import HomeCoupon from "./HomeCoupon.vue"
import HomeSimpleGoodsCard from "./HomeSimpleGoodsCard.vue"

export default {
  name: "HomeTuijianDay",
  props: {
    homecouponlistdata: {
      type: Array,
      default() {
        return [
          {
            text: "4.5",
            text_unit: "折",
            text_info: {
              text_info_valid: "限定饮品券",
              text_info_valid_tip: "有效期至",
              text_info_valid_date: "2022-09-21"
            }
          }
        ]
      }
    }
  },
  data() {
    return {
      swiperOptions: {
        // direction: "vertical"
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    HomeCoupon,
    HomeSimpleGoodsCard
  }
}
</script>

<style scoped>
.home-tuijian-day {
  width: 100%;
  padding: 5px 10px;
}
.home-tuijian-day-container {
  width: 100%;
  background: #fff;
  border-radius: 8px;
  box-shadow: 5px 5px 5px 0 rgba(192, 192, 192, 0.2);
}

.home-tuijian-day-title {
  width: 100%;
  display: flex;
}

.home-tuijian-day-title-text {
  flex: 1;
  text-align: left;
  font-size: 18px;
  font-weight: bolder;
  margin: 10px 0 10px 10px;
}

.home-tuijian-day-title-more {
  width: 50px;
  line-height: 20px;
  text-align: right;
  font-size: 12px;
  margin: 10px 10px 10px 0;
}

.home-tujian-day-content {
  width: 100%;
  padding: 5px;
}
</style>
