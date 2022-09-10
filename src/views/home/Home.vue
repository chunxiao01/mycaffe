<template>
  <div>
    <home-swiper></home-swiper>
    <home-menu-card></home-menu-card>
  </div>
</template>

<script>
import HomeSwiper from "./HomeSwiper.vue"
import HomeMenuCard from "./HomeMenuCard.vue"

export default {
  name: "Home",
  components: {
    HomeSwiper,
    HomeMenuCard
  }
}
</script>

<style scoped></style>
