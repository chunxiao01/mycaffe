<template>
  <div class="freecard">
    <free-card-swiper></free-card-swiper>
    <free-card-price></free-card-price>
    <free-card-joint></free-card-joint>
    <free-card-detail></free-card-detail>
    <free-card-desc></free-card-desc>
  </div>
</template>

<script>
import FreeCardSwiper from "./FreeCardSwiper.vue"
import FreeCardPrice from "./FreeCardPrice.vue"
import FreeCardJoint from "./FreeCardJoint.vue"
import FreeCardDetail from "./FreeCardDetail.vue"
import FreeCardDesc from "./FreeCardDesc.vue"

export default {
  name: "FreeCard",
  components: {
    FreeCardSwiper,
    FreeCardPrice,
    FreeCardJoint,
    FreeCardDetail,
    FreeCardDesc
  }
}
</script>

<style scoped></style>
