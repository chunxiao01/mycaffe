<template>
  <div class="product-list-item">
    <div class="product-list-item-container">
      <div class="product-list-item-info">
        <div class="product-list-item-img">
          <img :src="productlistitemdata.product_pic" alt="" />
        </div>
        <div class="product-list-item-post">
          {{ productlistitemdata.product_post }}
        </div>
        <div class="product-list-item-size">
          {{ productlistitemdata.product_size }}
        </div>
      </div>
      <div class="product-list-item-desc">
        <div class="product-list-item-desc-text">
          {{ productlistitemdata.product_desc }}({{
            productlistitemdata.product_size
          }})
        </div>
        <div class="product-list-item-desc-price">
          <span class="product-list-item-desc-price-new"
            >￥{{ productlistitemdata.product_price_new }}</span
          >
          <span class="product-list-item-desc-price-old"
            >￥{{ productlistitemdata.product_price_old }}</span
          >
        </div>
        <div class="product-list-item-desc-tips">
          <span v-for="tip in productlistitemdata.product_desc_tips">
            {{ tip }}
          </span>
        </div>
      </div>
      <div class="product-list-item-action">
        <span class="product-list-item-sale"
          >已售卖{{ productlistitemdata.product_sale }}件</span
        >
        <span class="product-list-item-add">＋</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductListItem",
  props: {
    productlistitemdata: {
      type: Object,
      default() {
        return {
          product_id: null,
          product_name: null,
          product_pic: null,
          product_post: null,
          product_size: null,
          product_desc: null,
          product_price_new: null,
          product_price_old: null,
          product_desc_tips: [],
          product_sale: null
        }
      }
    }
  }
}
</script>

<style scoped>
.product-list-item {
  width: 100%;
  padding: 5px;
}
.product-list-item-container {
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
}

.product-list-item-info {
  width: 100%;
  position: relative;
}
.product-list-item-img {
  width: 100%;
}
.product-list-item-img img {
  width: 100%;
}
.product-list-item-post {
  position: absolute;
  top: 10px;
  right: 5px;
  width: 60px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  font-size: 12px;
  color: #fff;
  border-radius: 8px;
  background-color: var(--base-theme-color);
}
.product-list-item-size {
  position: absolute;
  bottom: 10px;
  left: 5px;
  width: 60px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  font-size: 12px;
  color: #fff;
  border-radius: 8px;
  background-color: #f93737;
}

.product-list-item-desc {
  width: 100%;
  padding: 10px;
}
.product-list-item-desc-text {
  width: 100%;
  font-size: 16px;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.product-list-item-desc-price {
  width: 100%;
  margin-bottom: 5px;
}
.product-list-item-desc-price-new {
  font-size: 18px;
  font-weight: bolder;
}
.product-list-item-desc-price-old {
  font-size: 13px;
  text-decoration: line-through;
  margin-left: 5px;
}

.product-list-item-desc-tips {
  width: 100%;
}
.product-list-item-desc-tips span {
  display: inline-block;
  margin: 5px 5px 0 0;
  padding: 3px;
  background-color: rgba(246, 232, 232, 0.8);
  font-size: 13px;
  color: #f93737;
}
.product-list-item-action {
  width: 100%;
  display: flex;
  padding: 0 10px 10px 10px;
}
.product-list-item-sale {
  display: inline-block;
  flex: 1;
  height: 24px;
  line-height: 24px;
  font-size: 13px;
  color: #999;
}
.product-list-item-add {
  display: inline-block;
  width: 24px;
  height: 24px;
  line-height: 20px;
  border-radius: 50%;
  background-color: var(--base-theme-color);
  text-align: center;
  color: #fff;
  font-size: 16px;
}
</style>
