<template>
  <div class="banner">
    <div class="banner-content">
      <swiper
        ref="bannercontentswiper"
        :options="swiperOptions"
        class="banner-content-swiper"
      >
        <swiper-slide v-for="(item, index) in bannerswiperlist" :key="index">
          <div class="banner-content-swiper-slide">
            <img
              class="banner-swiper-img"
              src="~/assets/img/common/icons/bell.svg"
            />
            <span class="banner-swiper-text"> {{ item.banner_text }} </span>
          </div>
        </swiper-slide>
      </swiper>
      <div class="banner-content-alltext" v-show="bannerfoldup">
        <ul class="banner-content-alltext-ul">
          <li
            class="banner-content-alltext-li"
            v-for="(item, index) in bannerswiperlist"
            :key="index"
          >
            <img
              class="banner-content-alltext-li-img"
              src="~/assets/img/common/icons/bell.svg"
            />
            <span class="banner-content-alltext-li-text">
              {{ item.banner_text }}
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="banner-fold" @click="bannerfoldClick">
      <span class="banner-fold-down" v-if="!bannerfoldup">﹀</span>
      <span class="banner-fold-up" v-else>︿</span>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper"
import "swiper/css/swiper.css"

export default {
  name: "Banner",
  props: {
    bannerswiperlist: {
      type: Array,
      default() {
        return [{ banner_text: "" }]
      }
    }
  },
  data() {
    return {
      swiperOptions: {
        direction: "vertical",
        loop: true,
        autoplay: {
          disableOnInteraction: false,
          delay: 5000
        }
      },
      bannerfoldup: false
    }
  },
  methods: {
    bannerfoldClick() {
      this.bannerfoldup = !this.bannerfoldup
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style scoped>
.banner {
  width: 100%;
  padding: 5px;
  position: relative;
}
.banner-content {
  width: 100%;
  background-color: #f3f6fb;
}
.banner-content-swiper {
  height: 36px;
}
.banner-content-swiper-slide {
  height: 36px;
  line-height: 36px;
  display: flex;
  padding: 5px;
}
.banner-swiper-img {
  width: 18px;
  margin: auto;
}
.banner-swiper-text {
  flex: 1;
  display: inline-block;
  height: 36px;
  line-height: 28px;
  font-size: 14px;
  color: var(--base-theme-color);
  margin-left: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.banner-fold {
  position: absolute;
  top: 16px;
  right: 10px;
  width: 50px;
  height: 16px;
  text-align: right;
  font-size: 14px;
  font-weight: bolder;
  color: var(--base-theme-color);
  z-index: 100;
}
.banner-content-alltext {
  width: 100%;
  padding: 10px 5px;
  background-color: #f3f6fb;
}
.banner-content-alltext-ul {
  margin: 0;
  padding: 0;
}
.banner-content-alltext-li {
  list-style: none;
  margin-top: 8px;
  display: flex;
}
.banner-content-alltext-li-img {
  width: 14px;
  margin: auto;
}
.banner-content-alltext-li-text {
  flex: 1;
  margin-left: 5px;
  font-size: 12px;
  color: var(--base-theme-color);
}
</style>
