<template>
  <div class="home-simple-goods-rank">
    <div class="home-simple-goods-rank-container">
      <simple-goods-card-sell
        :simplegoodscardselldata="simplegoodscardselldatalist[0]"
      ></simple-goods-card-sell>
      <simple-goods-card-sell
        :simplegoodscardselldata="simplegoodscardselldatalist[1]"
      ></simple-goods-card-sell>
      <simple-goods-card-sell
        :simplegoodscardselldata="simplegoodscardselldatalist[2]"
      ></simple-goods-card-sell>
      <simple-goods-card-sell
        :simplegoodscardselldata="simplegoodscardselldatalist[3]"
      ></simple-goods-card-sell>
    </div>
  </div>
</template>

<script>
import SimpleGoodsCardSell from "@/components/content/goods/SimpleGoodsCardSell.vue"
export default {
  name: "HomeSimpleGoodsRank",
  props: {
    simplegoodscardselldatalist: {
      type: Array,
      default() {
        return [
          {
            goodsname: null,
            goodspic: null,
            newprice: null,
            oldprice: null
          }
        ]
      }
    }
  },
  components: {
    SimpleGoodsCardSell
  }
}
</script>

<style scoped>
.home-simple-goods-rank {
  width: 100%;
  padding: 10px;
}
.home-simple-goods-rank-container {
  width: 100%;
  background-color: rgb(230, 230, 230, 0.5);
  border-radius: 8px;
  padding: 10px;
  padding-bottom: 5px;
}
</style>
