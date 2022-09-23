<template>
  <div class="cart-goods-item">
    <div class="cart-goods-item-container">
      <div class="cart-goods-item-check-btn" @click="cartCheck">
        <span class="cart-goods-item-check" v-if="getCartItemChecked">
          <img src="~assets/img/common/icons/checked2.svg" alt="" />
        </span>
        <span class="cart-goods-item-uncheck" v-else>
          <img src="~assets/img/common/icons/unchecked2.svg" alt="" />
        </span>
      </div>
      <div class="cart-goods-item-info">
        <div class="cart-goods-item-info-img">
          <img v-lazy="CartGoodsItemData.goodspic" alt="" />
        </div>
        <div class="cart-goods-item-info-detail">
          <div class="cart-goods-item-info-detail-name">
            <span class="cart-goods-item-info-detail-name-text">{{
              CartGoodsItemData.goodsname
            }}</span>
          </div>
          <div class="cart-goods-item-info-detail-type">
            <span class="cart-goods-item-info-detail-type-text">{{
              getCartGoodsOpton
            }}</span>
          </div>
          <div class="cart-goods-item-info-detail-price">
            <span class="cart-goods-item-info-detail-price-new"
              >￥{{ CartGoodsItemData.goodsprice_final }}</span
            >
            <span
              class="cart-goods-item-info-detail-price-old"
              v-if="CartGoodsItemData.goodsprice_old"
              >￥{{ CartGoodsItemData.goodsprice_old }}</span
            >
          </div>
        </div>
      </div>
      <div class="cart-goods-item-action">
        <span class="cart-goods-item-action-sub" @click="goodsSellNumSub">
          <img src="~assets/img/common/icons/action_sub.svg" alt="" />
        </span>
        <span class="cart-goods-item-action-number">{{
          getCartItemCount
        }}</span>
        <span class="cart-goods-item-action-add" @click="goodsSellNumAdd">
          <img src="~assets/img/common/icons/action_add.svg" alt="" />
        </span>
      </div>
    </div>
    <span
      class="cart-goods-item-shoptype"
      v-if="CartGoodsItemData.goodsshoptype"
      >仅限门店自取</span
    >
  </div>
</template>

<script>
import { ADD_CART_ACTION, CHECK_CART_ACTION } from "@/store/mutations-type"

export default {
  name: "CartGoodsItem",
  props: {
    CartGoodsItemData: {
      type: Object,
      default() {
        return {
          goods_final_id: null,
          goodsid: null,
          goodsname: null,
          goodspic: null,
          goodsoption: null,
          goodsprice_new: null,
          goodsprice_old: null,
          goodsprice_pre: null,
          goodsprice_off: null,
          goodsprice_off_number: null,
          goodsprice_final: null,
          goodsprice_coupon: null,
          goodspiece: null,
          goodsshoptype: null,
          goodschecked: null
        }
      }
    }
  },
  computed: {
    getCartGoodsOpton() {
      if (this.CartGoodsItemData.goodsid) {
        const name = this.CartGoodsItemData.goodsname
        let price = this.CartGoodsItemData.goodsprice_new
        let other_price = 0
        let option_arr = []
        this.CartGoodsItemData.goodsoption.forEach((item) => {
          let itemoption = item.goodsselltypeDetailNameSelected
          const reg = /\d/
          if (item.goodsselltypeName.indexOf("杯") === -1) {
            if (reg.test(itemoption)) {
              other_price = itemoption.replace(/[^\d]/g, "")
              const optionname = itemoption.replace(/\d/g, "").replace("元", "")
              // price = parseFloat(price) + parseFloat(other_price)
              option_arr.push(optionname)
            } else {
              option_arr.push(itemoption)
            }
          }
        })
        return option_arr.join("/")
      }
    },
    getCartItemCount() {
      return this.CartGoodsItemData.goodspiece
    },
    getCartItemChecked() {
      return this.CartGoodsItemData.goodschecked
    }
  },
  methods: {
    cartCheck() {
      const payload = {
        goods_final_id: this.CartGoodsItemData.goods_final_id,
        goodschecked: this.CartGoodsItemData.goodschecked
      }
      this.$store.dispatch(CHECK_CART_ACTION, payload)
    },
    goodsSellNumSub() {
      if (this.goodspieces < 2) {
        this.$toast.showCallBack("确定删除该商品吗？", 500).then(() => {
          this.$toast.showCallBack("已删除!", 500).then(() => {})
        })
      }
      const payload = {
        cartData: this.CartGoodsItemData,
        cartDataType: "one_count", //购物车商品数量
        cartcount: -1 //一次只减少一个
      }
      this.$store.dispatch(ADD_CART_ACTION, payload)
    },
    goodsSellNumAdd() {
      if (this.goodspieces > 98) {
        return false
      }
      this.goodspieces++
      const payload = {
        cartData: this.CartGoodsItemData,
        cartDataType: "one_count", //购物车商品数量
        cartcount: 1 //一次只增加一个
      }
      this.$store.dispatch(ADD_CART_ACTION, payload)
    }
  }
}
</script>

<style scoped>
.cart-goods-item {
  width: 100%;
  padding: 15px 0;
  position: relative;
}
.cart-goods-item-container {
  width: 100%;
  background-color: #fff;
  display: flex;
}
.cart-goods-item-check-btn {
  width: 24px;
  height: 72px;
  line-height: 72px;
  margin-right: 10px;
}
.cart-goods-item-check img,
.cart-goods-item-uncheck img {
  width: 24px;
  vertical-align: middle;
}
.cart-goods-item-action {
  width: 90px;
  display: flex;
}

.cart-goods-item-action-sub {
  display: inline-block;
  flex: 1;
  height: 72px;
  line-height: 72px;
  display: flex;
}
.cart-goods-item-action-sub img {
  width: 24px;
  margin: auto;
}
.cart-goods-item-action-number {
  display: inline-block;
  flex: 1;
  height: 72px;
  line-height: 72px;
  font-size: 18px;
  font-weight: bolder;
  text-align: center;
}
.cart-goods-item-action-add {
  display: inline-block;
  flex: 1;
  height: 72px;
  line-height: 72px;
  display: flex;
}
.cart-goods-item-action img {
  width: 24px;
  margin: auto;
}
.cart-goods-item-info {
  flex: 1;
  display: flex;
  position: relative;
}
.cart-goods-item-info-img {
  width: 40px;
  display: flex;
  margin-right: 5px;
}
.cart-goods-item-info-img img {
  width: 36px;
  margin: auto;
}
.cart-goods-item-info-detail {
  flex: 1;
}
.cart-goods-item-info-detail-name {
  width: 100%;
  margin-bottom: 5px;
}
.cart-goods-item-info-detail-name-text {
  font-size: 16px;
  font-weight: bolder;
}
.cart-goods-item-info-detail-type {
  width: 100%;
  margin-bottom: 5px;
}
.cart-goods-item-info-detail-type-text {
  font-size: 12px;
  color: #999;
}
.cart-goods-item-info-detail-price {
  width: 100%;
}
.cart-goods-item-info-detail-price-new {
  font-size: 16px;
  font-weight: bolder;
  color: #f04e2a;
  height: 22px;
  line-height: 22px;
}
.cart-goods-item-info-detail-price-old {
  font-size: 12px;
  color: #a1a5a9;
  text-decoration: line-through;
  margin-left: 5px;
  height: 22px;
  line-height: 22px;
}
.cart-goods-item-shoptype {
  display: block;
  position: absolute;
  left: 35px;
  bottom: 5px;
  font-size: 12px;
  color: var(--base-theme-color);
}
</style>
