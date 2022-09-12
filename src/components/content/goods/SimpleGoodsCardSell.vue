<template>
  <div class="simple-goods-card-sell">
    <div class="simple-goods-card-sell-img">
      <img :src="simplegoodscardselldata.goodspic" alt="" />
    </div>
    <div class="simple-goods-card-sell-info">
      <div class="simple-goods-card-sell-name">
        {{ simplegoodscardselldata.goodsname }}
      </div>
      <div class="simple-goods-card-sell-price">
        <span class="simple-goods-card-sell-price-new"
          >￥{{ simplegoodscardselldata.newprice }}</span
        >
        <span class="simple-goods-card-sell-price-old"
          >￥{{ simplegoodscardselldata.oldprice }}</span
        >
      </div>
    </div>
    <div class="simple-goods-card-sell-action">
      <span class="simple-goods-card-sell-actio-add">+</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SimpleGoodsCardSell",
  props: {
    simplegoodscardselldata: {
      type: Object,
      default() {
        return {
          goodsname: null,
          goodspic: null,
          newprice: null,
          oldprice: null
        }
      }
    }
  }
}
</script>

<style scoped>
.simple-goods-card-sell {
  width: 100%;
  display: flex;
  margin: 10px 0;
}
.simple-goods-card-sell-img {
  width: 45px;
}
.simple-goods-card-sell-img img {
  width: 45px;
}
.simple-goods-card-sell-action {
  width: 40px;
  text-align: center;
}
.simple-goods-card-sell-action span {
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 18px;
  margin-top: 25px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.6);
  text-align: center;
  color: #000;
  font-size: 16px;
}
.simple-goods-card-sell-info {
  flex: 1;
  margin-left: 10px;
}
.simple-goods-card-sell-name {
  font-size: 16px;
  margin: 5px 0 5px 10px;
}
.simple-goods-card-sell-price {
  margin: 5px 0 5px 10px;
}
.simple-goods-card-sell-price-new {
  font-size: 18px;
  font-weight: bolder;
  color: #000;
}
.simple-goods-card-sell-price-old {
  font-size: 13px;
  color: #000;
  text-decoration: line-through;
  margin-left: 5px;
}
</style>
