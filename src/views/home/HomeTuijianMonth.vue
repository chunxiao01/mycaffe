<template>
  <div class="home-tuijian-month">
    <div class="home-tuijian-month-container">
      <div class="home-tuijian-month-title">
        <div class="home-tuijian-month-title-text">九月好喝榜</div>
        <div class="home-tuijian-month-title-text-detail">
          跟着大家选，款款都不错
        </div>
      </div>
      <div class="home-tuijian-month-content">
        <swiper ref="hometujianmonthSwiper" :options="swiperOptions">
          <swiper-slide
            v-for="(item, index) in hometuijianmonthranklistdata"
            :key="index"
          >
            <home-simple-goods-rank
              :simplegoodscardselldatalist="item"
            ></home-simple-goods-rank>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper"
import "swiper/css/swiper.css"

import HomeSimpleGoodsRank from "./HomeSimpleGoodsRank.vue"

export default {
  name: "HomeTuijianMonth",
  props: {
    hometuijianmonthranklistdata: {
      type: Array,
      default() {
        return [
          [
            {
              goodsname: "生椰拿铁",
              goodspic: require("assets/img/goods/simplegoods/goods-cat1.png"),
              newprice: 18,
              oldprice: 29
            },
            {
              goodsname: "偷心西梅拿铁",
              goodspic: require("assets/img/goods/simplegoods/goods-cat2.png"),
              newprice: 19,
              oldprice: 32
            },
            {
              goodsname: "椰云拿铁",
              goodspic: require("assets/img/goods/simplegoods/goods-cat3.png"),
              newprice: 19,
              oldprice: 29
            },
            {
              goodsname: "葡萄冰萃咖啡",
              goodspic: require("assets/img/goods/simplegoods/goods-cat4.png"),
              newprice: 19,
              oldprice: 32
            }
          ],
          [
            {
              goodsname: "陨石厚乳拿铁",
              goodspic: require("assets/img/goods/simplegoods/goods-cat1.png"),
              newprice: 19,
              oldprice: 32
            },
            {
              goodsname: "冰丝绒拿铁",
              goodspic: require("assets/img/goods/simplegoods/goods-cat2.png"),
              newprice: 18,
              oldprice: 29
            },
            {
              goodsname: "耶加雪菲•美式",
              goodspic: require("assets/img/goods/simplegoods/goods-cat3.png"),
              newprice: 17,
              oldprice: 29
            },
            {
              goodsname: "冰香草丝绒拿铁",
              goodspic: require("assets/img/goods/simplegoods/goods-cat4.png"),
              newprice: 19,
              oldprice: 32
            }
          ],
          [
            {
              goodsname: "冰厚乳拿铁",
              goodspic: require("assets/img/goods/simplegoods/goods-cat1.png"),
              newprice: 16,
              oldprice: 29
            },
            {
              goodsname: "耶加•生椰Dirty",
              goodspic: require("assets/img/goods/simplegoods/goods-cat2.png"),
              newprice: 21,
              oldprice: 35
            },
            {
              goodsname: "耶加•Dirty",
              goodspic: require("assets/img/goods/simplegoods/goods-cat3.png"),
              newprice: 19,
              oldprice: 32
            },
            {
              goodsname: "冲绳黑糖丝绒拿铁",
              goodspic: require("assets/img/goods/simplegoods/goods-cat4.png"),
              newprice: 19,
              oldprice: 32
            }
          ]
        ]
      }
    }
  },
  data() {
    return {
      swiperOptions: {
        // direction: "vertical"
        slidesPerView: 1.3,
        spaceBetween: 5
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    HomeSimpleGoodsRank
  }
}
</script>

<style scoped>
.home-tuijian-month {
  width: 100%;
  padding: 10px;
}
.home-tuijian-month-container {
  width: 100%;
  background: url(~assets/img/bg/bg1.jpg) center center no-repeat;
  border-radius: 8px;
}

.home-tuijian-month-title {
  padding: 5px;
}
.home-tuijian-month-title-text {
  font-size: 18px;
  font-weight: bolder;
  margin: 5px 0 5px 10px;
}
.home-tuijian-month-title-text-detail {
  font-size: 16px;
  margin: 5px 0 10px 10px;
}
</style>
