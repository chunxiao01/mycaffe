<template>
  <div class="goods-sell-desc">
    <img v-for="(item, index) in goodsSellDescData" v-lazy="item" alt="" />
  </div>
</template>

<script>
export default {
  name: "GoodsSellDesc",
  props: {
    goodsSellDescData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  mounted() {
    console.log(this.goodsSellDescData)
  }
}
</script>

<style scoped>
.goods-sell-desc img {
  width: 100%;
}
</style>
