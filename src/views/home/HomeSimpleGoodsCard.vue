<template>
  <div class="home-simple-goods-card">
    <div class="home-simple-goods-card-item">
      <div class="home-simple-goods-card-item-0">
        <simple-goods-card-m
          :pricedata="pricedatalist[0]"
          :goodspic="goodspiclist[0]"
        ></simple-goods-card-m>
      </div>
    </div>
    <div class="home-simple-goods-card-item">
      <div class="home-simple-goods-card-item-1">
        <simple-goods-card-s
          :pricedata="pricedatalist[1]"
          :goodspic="goodspiclist[1]"
        ></simple-goods-card-s>
      </div>
      <div class="home-simple-goods-card-item-1">
        <simple-goods-card-s
          :pricedata="pricedatalist[2]"
          :goodspic="goodspiclist[2]"
        ></simple-goods-card-s>
      </div>
    </div>
  </div>
</template>

<script>
import SimpleGoodsCardS from "components/content/goods/SimpleGoodsCardS.vue"
import SimpleGoodsCardM from "components/content/goods/SimpleGoodsCardM.vue"

export default {
  name: "HomeSimpleGoodsCard",
  props: {
    pricedatalist: {
      type: Array,
      default() {
        return [
          {
            goodsname: "椰云拿铁",
            pricename: "新人价",
            newprice: 9,
            oldprice: 29
          },
          {
            goodsname: "生椰拿铁",
            pricename: "新人价",
            newprice: 9,
            oldprice: 29
          },
          {
            goodsname: "厚乳拿铁",
            pricename: "新人价",
            newprice: 9,
            oldprice: 29
          }
        ]
      }
    },
    goodspiclist: {
      type: Array,
      default() {
        return [
          require("assets/img/goods/simplegoods/goods-cat1.png"),
          require("assets/img/goods/simplegoods/goods-cat2.png"),
          require("assets/img/goods/simplegoods/goods-cat3.png")
        ]
      }
    }
  },
  components: {
    SimpleGoodsCardS,
    SimpleGoodsCardM
  }
}
</script>

<style scoped>
.home-simple-goods-card {
  width: 100%;
  display: flex;
}
.home-simple-goods-card-item {
  flex: 1;
}
.home-simple-goods-card-item-0 {
  width: 100%;
  padding: 5px 5px 5px 0;
  height: 100%;
}
.home-simple-goods-card-item-1 {
  width: 100%;
  padding: 5px 0 5px 5px;
}
</style>
