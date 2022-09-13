<template>
  <div class="simple-goods-card-m">
    <div class="simple-goods-card-m-price">
      <price-card :pricedata="pricedata"></price-card>
    </div>
    <div class="simple-goods-card-m-img">
      <img :src="goodspic" alt="" />
    </div>
  </div>
</template>

<script>
import PriceCard from "@/components/common/pricecard/PriceCard.vue"
export default {
  name: "SimpleGoodsCardM",
  props: {
    pricedata: {
      type: Object,
      default() {
        return {
          goodsname: null,
          pricename: null,
          newprice: null,
          oldprice: null
        }
      }
    },
    goodspic: {
      type: String,
      default: null
    }
  },
  components: {
    PriceCard
  }
}
</script>

<style scoped>
.simple-goods-card-m {
  width: 100%;
  background-color: rgb(230, 230, 230, 0.5);
  border-radius: 8px;
  padding: 10px;
}
.simple-goods-card-m-price {
  width: 60%;
}
.simple-goods-card-m-img {
  width: 100%;
  text-align: right;
}
.simple-goods-card-m-img img {
  width: 50%;
  margin-top: 40px;
}
</style>
