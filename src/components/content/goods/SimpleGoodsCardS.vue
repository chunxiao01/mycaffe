<template>
  <div class="simple-goods-card-s">
    <div class="simple-goods-card-s-price">
      <price-card :pricedata="pricedata"></price-card>
    </div>
    <div class="simple-goods-card-s-img">
      <img :src="goodspic" alt="" />
    </div>
  </div>
</template>

<script>
import PriceCard from "@/components/common/pricecard/PriceCard.vue"
export default {
  name: "SimpleGoodsCardS",
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
.simple-goods-card-s {
  width: 100%;
  display: flex;
  background-color: rgb(230, 230, 230, 0.5);
  border-radius: 8px;
  padding: 10px;
}
.simple-goods-card-s-price {
  width: 60%;
}
.simple-goods-card-s-img {
  flex: 1;
  text-align: right;
}
.simple-goods-card-s-img img {
  width: 80%;
  margin-top: 26px;
}
</style>
