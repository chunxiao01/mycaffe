<template>
  <div>
    <home-swiper></home-swiper>
    <home-menu-card></home-menu-card>
    <home-banner></home-banner>
    <home-fuli-card></home-fuli-card>
  </div>
</template>

<script>
import HomeSwiper from "./HomeSwiper.vue"
import HomeMenuCard from "./HomeMenuCard.vue"
import HomeBanner from "./HomeBanner.vue"
import HomeFuliCard from "./HomeFuliCard.vue"

export default {
  name: "Home",
  components: {
    HomeSwiper,
    HomeMenuCard,
    HomeBanner,
    HomeFuliCard
  }
}
</script>

<style scoped></style>
