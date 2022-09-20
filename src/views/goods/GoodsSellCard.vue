<template>
  <div class="goods-sell-card">
    <div class="goods-sell-img">
      <img src="" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsSellCard",
  data() {
    return {
      goodsSellData: null
    }
  },
  created() {
    console.log(this.$route.params)
    this.goodsSellData = this.$route.params
    console.log(this.goodsSellData)
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
</style>
