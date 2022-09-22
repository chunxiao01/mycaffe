<template>
  <div class="cart-goods-item">
    <div class="cart-goods-item-container">
      <div class="cart-goods-item-check-btn">
        <span class="cart-goods-item-check" v-if="isChecked">
          <img src="~assets/img/common/icons/checked2.svg" alt="" />
        </span>
        <span class="cart-goods-item-uncheck" v-else>
          <img src="~assets/img/common/icons/unchecked2.svg" alt="" />
        </span>
      </div>
      <div class="cart-goods-item-info">
        <div class="cart-goods-item-info-img">
          <img src="~assets/img/goods/menugoods/cat3.png" alt="" />
        </div>
        <div class="cart-goods-item-info-detail">
          <div class="cart-goods-item-info-detail-name">
            <span class="cart-goods-item-info-detail-name-text"
              >青森苹果丝绒拿铁</span
            >
          </div>
          <div class="cart-goods-item-info-detail-type">
            <span class="cart-goods-item-info-detail-type-text"
              >冰/标准甜/加奶油</span
            >
          </div>
          <div class="cart-goods-item-info-detail-price">
            <span class="cart-goods-item-info-detail-price-new">￥22</span>
            <span class="cart-goods-item-info-detail-price-old">￥35</span>
          </div>
        </div>
      </div>
      <div class="cart-goods-item-action">
        <span class="cart-goods-item-action-sub" @click="goodsSellNumSub">
          <img src="~assets/img/common/icons/action_sub.svg" alt="" />
        </span>
        <span class="cart-goods-item-action-number">{{ goodspieces }}</span>
        <span class="cart-goods-item-action-add" @click="goodsSellNumAdd">
          <img src="~assets/img/common/icons/action_add.svg" alt="" />
        </span>
      </div>
    </div>
    <span class="cart-goods-item-shoptype">仅限门店自取</span>
  </div>
</template>

<script>
export default {
  name: "CartGoodsItem",
  data() {
    return {
      isChecked: true,
      goodspieces: 1
    }
  },
  methods: {
    goodsSellNumSub() {
      if (this.goodspieces < 2) {
        return false
      }
      this.goodspieces--
    },
    goodsSellNumAdd() {
      if (this.goodspieces > 98) {
        return false
      }
      this.goodspieces++
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
