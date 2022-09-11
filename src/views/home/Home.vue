<template>
  <div>
    <home-swiper></home-swiper>
    <home-menu-card></home-menu-card>
    <home-banner></home-banner>
    <home-tuijian-day></home-tuijian-day>
    <home-fuli-card></home-fuli-card>
    <home-tuijian-month></home-tuijian-month>
  </div>
</template>

<script>
import HomeSwiper from "./HomeSwiper.vue"
import HomeMenuCard from "./HomeMenuCard.vue"
import HomeBanner from "./HomeBanner.vue"
import HomeTuijianDay from "./HomeTuijianDay.vue"
import HomeFuliCard from "./HomeFuliCard.vue"
import HomeTuijianMonth from "./HomeTuijianMonth.vue"

export default {
  name: "Home",
  components: {
    HomeSwiper,
    HomeMenuCard,
    HomeBanner,
    HomeTuijianDay,
    HomeFuliCard,
    HomeTuijianMonth
  }
}
</script>

<style scoped></style>
