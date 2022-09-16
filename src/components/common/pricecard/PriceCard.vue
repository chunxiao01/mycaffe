<template>
  <div class="pricecard">
    <div class="pricecard-goodsname">{{ pricedata.goodsname }}</div>
    <div class="pricecard-price">
      <div class="pricecard-pricename">{{ pricedata.pricename }}</div>
      <div class="pricecard-pricedetail">
        <span class="pricecard-new-price">￥{{ pricedata.newprice }}</span>
        <span class="pricecard-old-price">￥{{ pricedata.oldprice }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PriceCard",
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
    }
  }
}
</script>

<style scoped>
.pricecard {
  width: 100%;
}
.pricecard-goodsname {
  font-size: 14px;
  font-weight: bolder;
}

.pricecard-price {
  width: 100%;
  position: relative;
  margin-top: 30px;
}
.pricecard-pricename {
  width: 100%;
  position: absolute;
  bottom: 30px;
  height: 26px;
  line-height: 26px;
  background-color: var(--base-theme-color);
  font-size: 14px;
  font-weight: bolder;
  text-align: center;
  color: #fff;
  border-radius: 0 0 8px 8px;
}
.pricecard-pricedetail {
  width: 100%;
  height: 36px;
  line-height: 40px;
  background-color: #c1a179;
  text-align: center;
  color: #fff;
  border-radius: 0 0 8px 8px;
}
.pricecard-new-price {
  font-size: 14px;
  font-weight: bolder;
  color: #fff;
}
.pricecard-old-price {
  font-size: 13px;
  color: #fff;
  text-decoration: line-through;
  margin-left: 5px;
}
</style>
