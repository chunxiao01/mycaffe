<template>
  <div class="order-item">
    <div class="order-item-container">
      <div class="order-item-title">
        <div class="order-item-title-shoptype">
          {{ orderItemData.order_shoptype }}
        </div>
        <div class="order-item-title-address">
          {{ orderItemData.order_shop }}
        </div>
        <div class="order-item-title-state">
          {{ orderItemData.order_state }}
        </div>
      </div>
      <div
        class="order-item-content"
        v-for="item in orderItemData.order_goods"
        :key="item.goodsoptionid"
      >
        <div class="order-item-content-goods-info">
          <div class="order-item-content-goods-info-img">
            <img v-lazy="item.goodspic" alt="" />
          </div>
          <div class="order-item-content-goods-info-name">
            <span class="order-item-content-goods-info-name-text">
              {{ item.goodsname }}
            </span>
            <span class="order-item-content-goods-info-option">
              {{ item.goodsoption }}
            </span>
          </div>
          <div class="order-item-content-goods-info-count">
            x{{ item.goodspiece }}
          </div>
        </div>
      </div>
      <div class="order-item-order">
        <div class="order-item-order-time">
          <span class="order-item-order-time-text">{{
            orderItemData.order_createtime
          }}</span>
        </div>
        <div class="order-item-order-price">
          <span class="order-item-order-price-count"
            >共{{ orderItemData.order_goodscount }}件商品，合计：</span
          >
          <span class="order-item-order-price-number"
            >￥{{ orderItemData.order_goodsprice }}</span
          >
        </div>
      </div>
      <div class="order-item-action">
        <div class="order-item-action-btn">
          <span class="order-item-action-btn-again">再来一单</span>
          <span class="order-item-action-btn-invoice">开发票</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderItem",
  props: {
    orderItemData: {
      type: Object,
      default() {
        return {
          order_id: null,
          order_shoptype: null,
          order_shop: null,
          order_state: null,
          order_goods: [
            {
              goodsid: null,
              goodsname: null,
              goodspic: null,
              goodsoptionid: null,
              goodsoption: null,
              goodspiece: null
            }
          ],
          order_createtime: null,
          order_paytime: null,
          order_goodscount: null,
          order_goodsprice: null,
          order_type: null
        }
      }
    }
  }
}
</script>

<style scoped>
.order-item {
  width: 100%;
  padding: 5px;
}
.order-item-container {
  width: 100%;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
}
.order-item-title {
  width: 100%;
  padding: 5px 0 10px 0;
  display: flex;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
}
.order-item-title-shoptype {
  width: 32px;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  color: #fffbf4;
  background-color: #c0a278;
  text-align: center;
  margin-right: 5px;
}
.order-item-title-address {
  flex: 1;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  color: #000;
}
.order-item-title-state {
  width: 50px;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  color: #000;
  text-align: center;
}

.order-item-content {
  width: 100%;
  padding: 5px 0 10px 0;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
}
.order-item-content-goods-info {
  width: 100%;
  display: flex;
}
.order-item-content-goods-info-img {
  width: 60px;
  text-align: center;
  margin-right: 10px;
}
.order-item-content-goods-info-img img {
  width: 60px;
}
.order-item-content-goods-info-name {
  flex: 1;
  margin: auto;
}
.order-item-content-goods-info-name-text {
  display: block;
  font-size: 18px;
  font-weight: bold;
  color: #000;
}
.order-item-content-goods-info-option {
  display: block;
  font-size: 16px;
  color: #a1a1a1;
  margin: auto;
}
.order-item-content-goods-info-count {
  width: 30px;
  font-size: 18px;
  color: #a1a1a1;
  text-align: center;
  margin: auto;
}

.order-item-order {
  width: 100%;
  display: flex;
  margin-bottom: 20px;
}
.order-item-order-time {
  flex: 1;
  font-size: 12px;
  color: #a1a1a1;
}
.order-item-order-price {
  flex: 1;
  font-size: 12px;
  color: #000;
  text-align: right;
}
.order-item-order-price-number {
  font-size: 14px;
  font-weight: bold;
  color: #000;
}

.order-item-action {
  width: 100%;
}
.order-item-action-btn {
  width: 100%;
  text-align: right;
}
.order-item-action-btn-again,
.order-item-action-btn-invoice {
  display: inline-block;
  width: 80px;
  height: 24px;
  line-height: 24px;
  border-radius: 20px;
  border: 1px solid var(--base-theme-color);
  font-size: 14px;
  color: var(--base-theme-color);
  text-align: center;
  margin: 0 5px;
}
</style>
