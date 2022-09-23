<template>
  <div class="cart">
    <div class="cart-content">
      <transition-group name="cart">
        <div
          class="cart-content-off"
          key="cart-off"
          v-show="!isflodCart"
          @click="foldCart"
        >
          <div class="cart-content-off-container">
            <div class="cart-content-off-img">
              <img
                src="~assets/img/common/icons/shoppingbag.svg"
                alt=""
                srcset=""
              />
              <span class="cart-off-number" v-show="getCartCount">{{
                getCartCount
              }}</span>
            </div>
          </div>
        </div>
        <div class="cart-content-on" key="cart-on" v-show="isflodCart">
          <div
            class="cart-content-on-container-mask"
            v-show="isSHowCartContent"
            @click="showCart"
          ></div>
          <div class="cart-content-on-container" v-show="isSHowCartContent">
            <div class="cart-content-on-title">
              <div class="cart-content-on-title-content">
                <div class="cart-content-on-checkall">
                  <span
                    class="cart-content-on-checkall-checked"
                    v-if="isCheckedAll"
                  >
                    <img src="~assets/img/common/icons/checked2.svg" alt="" />
                  </span>
                  <span class="cart-content-on-checkall-unchecked" v-else>
                    <img src="~assets/img/common/icons/unchecked2.svg" alt=""
                  /></span>
                  <span class="cart-content-on-checkall-count">
                    <span class="cart-content-on-checkall-count-text"
                      >已选购商品</span
                    >
                    <span class="cart-content-on-checkall-count-number"
                      >({{ getCartCount }}件)</span
                    >
                  </span>
                </div>
                <div class="cart-content-on-clear">
                  <img src="~assets/img/common/icons/clear.svg" alt="" />
                  <span class="cart-content-on-clear-text">清空购物车</span>
                </div>
              </div>
            </div>
            <div class="cart-content-main">
              <scroll
                scrollWrapperName="cartContentScroll"
                id="cartContentScroll"
                ref="cartContentScrollRef"
              >
                <cart-goods-list>
                  <cart-goods-item
                    v-for="item in getCartGoodsListData"
                    :CartGoodsItemData="item"
                    :key="item.goods_final_id"
                  ></cart-goods-item>
                </cart-goods-list>
              </scroll>
            </div>
          </div>
          <div class="cart-content-on-btn">
            <div class="cart-content-on-btn-content">
              <div class="cart-content-on-img" @click="showCart">
                <img
                  src="~assets/img/common/icons/shoppingbag.svg"
                  alt=""
                  srcset=""
                />
                <span class="cart-on-number" v-show="getCartCount">{{
                  getCartCount
                }}</span>
              </div>
              <div class="cart-content-on-text" @click="showCart">
                <span class="cart-content-on-text-price"
                  >预计到手
                  <span class="cart-content-on-text-price-number"
                    >￥{{ getCartPrice }}</span
                  ></span
                >
              </div>
              <div class="cart-content-on-action" @click="cartGoToBuy">
                <span class="cart-content-on-action-btn">去结算</span>
              </div>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll.vue"
import CartGoodsList from "./CartGoodsList.vue"
import CartGoodsItem from "./CartGoodsItem.vue"

import {
  GET_CART_TOTAL_COUNT,
  GET_CART_TOTAL_PRICE
} from "@/store/mutations-type"

export default {
  name: "Cart",
  data() {
    return {
      isflodCart: false,
      isSHowCartContent: false,
      isCheckedAll: true,
      CartGoodsListData: []
    }
  },
  computed: {
    getCartCount() {
      return this.$store.getters[GET_CART_TOTAL_COUNT]
    },
    getCartPrice() {
      return this.$store.getters[GET_CART_TOTAL_PRICE]
    },
    getCartGoodsListData() {
      return this.$store.state.cartDatas
    }
  },
  methods: {
    foldCart() {
      this.isflodCart = !this.isflodCart
    },
    showCart() {
      this.isSHowCartContent = !this.isSHowCartContent
      this.$nextTick(() => {
        this.$refs.cartContentScrollRef.scrollRefresh()
      })
    },
    cartGoToBuy() {
      this.$router
        .push({
          name: "Login"
        })
        .catch((err) => false)
    }
  },
  components: {
    Scroll,
    CartGoodsList,
    CartGoodsItem
  }
}
</script>

<style scoped>
.cart-content {
  position: relative;
}
.cart-content-off {
  position: absolute;
  right: 10px;
  bottom: 10px;
}
.cart-content-off-container {
  width: 100%;
}
.cart-content-off-img {
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 1px 1px 6px 6px rgba(192, 192, 192, 0.3);
  display: flex;
  position: relative;
}
.cart-content-off-img img {
  width: 24px;
  margin: auto;
}
.cart-off-number {
  display: inline-block;
  width: 22px;
  height: 22px;
  line-height: 22px;
  position: absolute;
  right: 0;
  top: -5px;
  background-color: #c1a179;
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
  border-radius: 50%;
  border: 1px solid #fff;
}
.cart-content-on {
  width: 100%;
  background-color: #fff;
  border-radius: 8px 8px 0 0;
}

.cart-content-on-btn {
  width: 100%;
  padding: 10px;
  position: relative;
  z-index: 1;
}
.cart-content-on-btn-content {
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 1px 1px 10px 10px rgba(192, 192, 192, 0.3);
  display: flex;
}
.cart-content-on-img {
  width: 50px;
  height: 50px;
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  position: relative;
}
.cart-content-on-img img {
  width: 24px;
  margin: auto;
}
.cart-on-number {
  display: inline-block;
  width: 22px;
  height: 22px;
  line-height: 22px;
  position: absolute;
  right: 0;
  top: -5px;
  background-color: #c1a179;
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
  border-radius: 50%;
  border: 1px solid #fff;
}
.cart-content-on-action {
  width: 80px;
}
.cart-content-on-action-btn {
  display: block;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 0 20px 20px 0;
  background-color: var(--base-theme-color);
  color: #fff;
  font-size: 18px;
  font-weight: bolder;
}
.cart-content-on-text {
  flex: 1;
}
.cart-content-on-text-price {
  display: block;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  font-weight: bold;
  color: #000;
  padding-left: 10px;
}
.cart-content-on-text-price-number {
  color: #ed5837;
}

.cart-enter-active {
  animation: cart-in 0.5s;
}
.cart-leave-active {
  animation: cart-in 0.5s reverse;
}
@keyframes cart-in {
  from {
    opacity: 0;
    transform: translate(60px, 0);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}
.cart-content-on-container-mask {
  position: absolute;
  left: 0;
  bottom: 70px;
  width: 100%;
  height: calc(100vh - 70px);
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.cart-content-on-container {
  width: 100%;
  position: relative;
  z-index: 1;
}
.cart-content-on-title {
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  border-radius: 8px 8px 0 0;
}
.cart-content-on-title-content {
  width: 100%;
  padding: 10px;
  display: flex;
}

.cart-content-on-checkall {
  flex: 1;
}
.cart-content-on-checkall-checked,
.cart-content-on-checkall-unchecked {
  margin-right: 10px;
}

.cart-content-on-checkall-checked img,
.cart-content-on-checkall-unchecked img {
  width: 24px;
  vertical-align: middle;
}
.cart-content-on-checkall-count {
  height: 24px;
  line-height: 24px;
  vertical-align: middle;
}
.cart-content-on-checkall-count-text {
  font-size: 14px;
  font-weight: bolder;
  margin-right: 5px;
}
.cart-content-on-checkall-count-number {
  font-size: 14px;
  font-weight: bolder;
}
.cart-content-on-clear {
  flex: 1;
  text-align: right;
}

.cart-content-on-clear img {
  width: 16px;
  margin-right: 10px;
  vertical-align: middle;
}
.cart-content-on-clear-text {
  display: inline-block;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  color: #999;
}

.cart-content-main {
  width: 100%;
  background-color: #fff;
  padding: 10px;
}
.cart-content-main ul {
  margin: 0;
  padding: 0;
}
.cart-content-main ul li {
  margin: 0;
  padding: 0;
  list-style: none;
}
#cartContentScroll {
  width: 100%;
  max-height: calc(50vh - 35px);
  background-color: #fff;
  overflow: hidden;
}
</style>
