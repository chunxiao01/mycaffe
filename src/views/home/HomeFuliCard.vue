<template>
  <div class="home-fuli-card">
    <div class="home-fili-card-container">
      <div class="home-fuli-card-title">
        <div class="home-fuli-card-title-text">
          <span>福利中心</span>
        </div>
        <div class="home-fuli-card-title-more">
          <span>查看全部</span>
        </div>
      </div>
      <div class="home-fuli-card-content">
        <swiper ref="homefulicardSwiper" :options="swiperOptions">
          <swiper-slide v-for="(item, index) in homefulilist" :key="index">
            <div class="home-fuli-card-item">
              <div class="home-fuli-card-item-text">{{ item.text }}</div>
              <div class="home-fuli-card-item-text-detail">
                {{ item.text_detail }}
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper"
import "swiper/css/swiper.css"

export default {
  name: "HomeFuliCard",
  data() {
    return {
      swiperOptions: { slidesPerView: 2.15, spaceBetween: 5 },
      homefulilist: [
        {
          text: "lucky送福利",
          text_detail: "领4.8折券"
        },
        {
          text: "邀请好友",
          text_detail: "每邀1位好友各得20元"
        },
        {
          text: "#喝咖啡挑战",
          text_detail: "再喝一杯达成"
        },
        {
          text: "本月咖啡星人",
          text_detail: "马上冲榜"
        }
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
.home-fuli-card {
  width: 100%;
  padding: 5px 10px;
}

.home-fili-card-container {
  width: 100%;
  background: #fff;
  border-radius: 8px;
  box-shadow: 5px 5px 5px 0 rgba(192, 192, 192, 0.2);
}

.home-fuli-card-title {
  width: 100%;
  display: flex;
}
.home-fuli-card-title-text {
  flex: 1;
  text-align: left;
  font-size: 18px;
  font-weight: bolder;
  margin: 10px;
}
.home-fuli-card-title-more {
  flex: 1;
  line-height: 20px;
  text-align: right;
  font-size: 12px;
  margin: 10px;
}

.home-fuli-card-content {
  display: flex;
  padding: 5px 5px 10px 5px;
}
.home-fuli-card-item {
  flex: 1;
  padding: 10px;
  background-color: rgba(246, 232, 232, 0.8);
  border-radius: 8px;
}
.home-fuli-card-content .home-fuli-card-item:not(:last-child) {
  margin-right: 5px;
}
.home-fuli-card-content .home-fuli-card-item:not(:first-child) {
  margin-left: 5px;
}
.home-fuli-card-item-text {
  font-size: 16px;
  font-weight: bolder;
  margin: 10px 0 3px 0;
}
.home-fuli-card-item-text-detail {
  font-size: 12px;
  color: #f55555;
  margin: 3px 0 10px 0;
}
</style>
