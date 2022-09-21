<template>
  <div class="goods-sell-add-cart">
    <div class="goods-sell-add-cart-info">
      <div class="goods-sell-add-cart-price">
        <div class="goods-sell-add-cart-price-detail">
          <span class="goods-sell-add-cart-price-new"
            >￥{{ goodsSellAddCartData.goodsprice_new }}</span
          >
          <span
            class="goods-sell-add-cart-price-old"
            v-if="goodsSellAddCartData.goodsprice_old"
            >￥{{ goodsSellAddCartData.goodsprice_old }}</span
          >
          <span
            class="goods-sell-add-cart-price-pre"
            v-if="goodsSellAddCartData.goodsprice_pre"
            ><span class="goods-sell-add-cart-price-pre-tip">预估到手</span
            ><span class="goods-sell-add-cart-price-pre-text"
              >￥{{ goodsSellAddCartData.goodsprice_pre }}</span
            ></span
          >
          <span class="goods-sell-add-cart-price-desc">
            <img src="~assets/img/common/icons/tips.svg" alt="" />
          </span>
        </div>
      </div>
      <div class="goods-sell-add-cart-number">
        <span class="goods-sell-add-cart-sub">
          <img src="~assets/img/common/icons/action_sub.svg" alt="" />
        </span>
        <span class="goods-sell-add-cart-text">{{ goodspieces }}</span>
        <span class="goods-sell-add-cart-add">
          <img src="~assets/img/common/icons/action_add.svg" alt="" />
        </span>
      </div>
    </div>
    <div class="goods-sell-add-cart-name">{{ goodSellAddCartName }}</div>
    <div class="goods-sell-add-cart-action">
      <div class="goods-sell-add-cart-action-buy">
        <span class="goods-sell-add-cart-action-buy-btn">立即购买</span>
      </div>
      <div class="goods-sell-add-cart-action-add">
        <span class="goods-sell-add-cart-action-add-btn">加入购物车</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsSellAddCart",
  props: {
    goodsSellAddCartData: {
      type: Object,
      default() {
        return {
          goodsid: null,
          goodsname: null,
          goodsprice_new: null,
          goodsprice_old: null,
          goodsprice_pre: null,
          goodsoptionselected: null
        }
      }
    }
  },
  data() {
    return {
      goodspieces: 1
    }
  },
  computed: {
    goodSellAddCartName() {
      if (this.goodsSellAddCartData.goodsid) {
        const name = this.goodsSellAddCartData.goodsname
        let price = this.goodsSellAddCartData.goodsprice_new
        let option = ""
        let other_price = 0
        this.goodsSellAddCartData.goodsoptionselected.forEach((item) => {
          let itemoption = item.goodsselltypeDetailNameSelected
          const reg = /\d/
          if (item.goodsselltypeName.indexOf("杯") === -1) {
            if (reg.test(itemoption)) {
              other_price = itemoption.replace(/[^\d]/g, "")
              const optionname = itemoption.replace(/\d/g, "").replace("元", "")
              // price = parseFloat(price) + parseFloat(other_price)
              option += "+" + optionname + "￥" + other_price
            } else {
              option += "+" + itemoption + "￥" + other_price
            }
          }
        })
        return name + "￥" + price + option
      }
    }
  }
}
</script>

<style scoped>
.goods-sell-add-cart {
  width: 100%;
  background-color: #fff;
  padding: 10px;
}
.goods-sell-add-cart-info {
  width: 100%;
  display: flex;
  margin-bottom: 5px;
}
.goods-sell-add-cart-price {
  flex: 1;
}
.goods-sell-add-cart-price-detail {
  width: 100%;
  margin-bottom: 5px;
}
.goods-sell-add-cart-price-new {
  font-size: 18px;
  font-weight: bolder;
  color: #f04e2a;
  height: 20px;
  line-height: 20px;
}
.goods-sell-add-cart-price-old {
  font-size: 14px;
  color: #a1a5a9;
  text-decoration: line-through;
  margin-left: 5px;
  margin-right: 5px;
  height: 20px;
  line-height: 20px;
}

.goods-sell-add-cart-price-pre {
  margin-right: 5px;
}
.goods-sell-add-cart-price-pre-tip {
  display: inline-block;
  padding: 2px;
  background-color: rgba(246, 232, 232, 0.8);
  border-radius: 8px;
  font-size: 16px;
  color: #e57156;
}
.goods-sell-add-cart-price-pre-text {
  display: inline-block;
  padding: 2px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bolder;
  color: #fff;
  background-color: #f85631;
}

.goods-sell-add-cart-price-desc img {
  width: 16px;
}

.goods-sell-add-cart-name {
  font-size: 14px;
  color: #999;
  margin: 3px 0;
}
.goods-sell-add-cart-number {
  width: 90px;
  display: flex;
}
.goods-sell-add-cart-sub {
  display: inline-block;
  flex: 1;
  height: 30px;
  line-height: 30px;
  display: flex;
}
.goods-sell-add-cart-sub img {
  width: 24px;
  margin: auto;
}
.goods-sell-add-cart-text {
  display: inline-block;
  flex: 1;
  height: 24px;
  line-height: 24px;
  margin-top: 3px;
  font-size: 16px;
  font-weight: bolder;
  text-align: center;
}
.goods-sell-add-cart-add {
  display: inline-block;
  flex: 1;
  height: 30px;
  line-height: 30px;
  display: flex;
}
.goods-sell-add-cart-add img {
  width: 24px;
  margin: auto;
}

.goods-sell-add-cart-action {
  width: 100%;
  display: flex;
}
.goods-sell-add-cart-action-buy {
  flex: 1;
  padding: 10px;
}
.goods-sell-add-cart-action-buy-btn {
  display: inline-block;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  color: #c3aa89;
  background-color: #fff;
  border: 1px solid #c3aa89;
  border-radius: 20px;
}

.goods-sell-add-cart-action-add {
  flex: 1;
  padding: 10px;
}
.goods-sell-add-cart-action-add-btn {
  display: inline-block;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  color: #fff;
  background-color: var(--base-theme-color);
  border-radius: 20px;
}
</style>
