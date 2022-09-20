<template>
  <div class="goods-sell-card">
    <div class="goods-sell-img" v-if="goodsSellData.goodssellinfo">
      <swiper ref="GoodsSellImgSwiper" :options="swiperOptions">
        <swiper-slide
          v-for="(item, index) in goodsSellData.goodssellinfo.goodssellpic"
          :key="index"
        >
          <img :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="goods-sell-options" v-if="goodsSellData.goodssellinfo">
      <div class="goods-sell-option-container">
        <div class="goods-sell-option-title">
          <span class="goods-sell-option-title-text">{{
            goodsSellData.goodsname
          }}</span>
        </div>
        <div class="goods-sell-option-content">
          <goods-sell-option
            :goodsSellOptionData="goodsSellData.goodssellinfo.goodsselltype"
          ></goods-sell-option>
        </div>
      </div>
      <div class="goods-sell-collect">
        <div class="goods-sell-collect-icon" v-if="!isGoodsCollected">
          <img src="~/assets/img/common/icons/collect.svg" alt="" />
        </div>
        <div class="goods-sell-collect-icon" v-else>
          <img src="~/assets/img/common/icons/collected.svg" alt="" />
        </div>
        <div class="goods-sell-collect-text">收藏口味</div>
      </div>
    </div>
    <div class="goods-sell-desc-content" v-if="goodsSellData.goodssellinfo">
      <div class="goods-sell-desc-container">
        <div class="goods-sell-desc-title">
          <span class="goods-sell-desc-title-text">商品描述</span>
        </div>
        <goods-sell-desc
          :goodsSellDescData="goodsSellData.goodssellinfo.goodssellinfopic"
        ></goods-sell-desc>
      </div>
    </div>
    <div class="goods-sell-close-page" @click="closePageClick">
      <close-page></close-page>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper"
import "swiper/css/swiper.css"

import ClosePage from "@/components/content/close/ClosePage.vue"

import GoodsSellOption from "./GoodsSellOption.vue"
import GoodsSellDesc from "./GoodsSellDesc.vue"

export default {
  name: "GoodsSellCard",
  data() {
    return {
      goodsSellData: {
        goodsid: null,
        goodspic: null,
        goodsname: null,
        goodstips: null,
        goodsdesc: null,
        goodsdescfill: null,
        goodsprice_new: null,
        goodsprice_old: null,
        goodsSelected: false,
        goodspieces: null,
        goodssellinfo: {
          goodssellpic: null,
          goodsinfopic: null,
          goodsselltype: [
            {
              goodsselltypeId: null,
              goodsselltypeName: null,
              goodsselltypeDetails: [
                {
                  goodsselltypeDetailId: null,
                  goodsselltypeDetailName: null,
                  goodsselltypeDetailMark: null,
                  goodsselltypeDetailSelect: false
                }
              ]
            }
          ]
        }
      },
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
      isGoodsCollected: false
    }
  },
  created() {
    this.goodsSellData = this.$route.params
  },
  methods: {
    closePageClick() {
      this.$router.go(-1)
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    ClosePage,
    GoodsSellOption,
    GoodsSellDesc
  }
}
</script>

<style scoped>
.goods-sell-img {
  width: 100%;
}
.goods-sell-img img {
  width: 100%;
}

.goods-sell-options {
  width: 100%;
  background-color: #fff;
  position: relative;
  margin-top: -5px;
}

.goods-sell-option-container {
  width: 100%;
  padding: 20px;
}

.goods-sell-option-title {
  width: 100%;
  margin-bottom: 10px;
}

.goods-sell-option-title-text {
  font-size: 18px;
  font-weight: bolder;
  color: #000;
}

.goods-sell-collect {
  position: absolute;
  right: 20px;
  top: -15px;
  background-color: #fff;
  z-index: 995;
  width: 50px;
  height: 50px;
}
.goods-sell-collect-icon {
  text-align: center;
  background-color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-bottom: 10px;
  margin-left: 10px;
}
.goods-sell-collect-icon img {
  width: 18px;
  margin-top: 6px;
}
.goods-sell-collect-text {
  font-size: 12px;
  color: #999;
  background-color: #fff;
}

.goods-sell-desc-content {
  width: 100%;
  padding: 10px;
}
.goods-sell-desc-container {
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px;
}

.goods-sell-desc-title {
  margin: 10px 0;
}

.goods-sell-desc-title-text {
  font-size: 16px;
  font-weight: bolder;
  color: #000;
}
.goods-sell-close-page {
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 990;
}
</style>
