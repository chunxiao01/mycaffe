<template>
  <div class="product-list">
    <div class="product-list-container">
      <product-list-item
        class="product-list-item"
        v-for="(item, index) in productlistdata"
        :productlistitemdata="item"
        :key="item.product_id"
      ></product-list-item>
    </div>
  </div>
</template>

<script>
import ProductListItem from "./ProductListItem.vue"
export default {
  name: "ProductList",
  props: {
    productlistdata: {
      type: Array,
      default() {
        return [
          {
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
        ]
      }
    }
  },
  components: { ProductListItem }
}
</script>

<style scoped>
.product-list {
  width: 100%;
}
.product-list-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.product-list-item {
  width: 50%;
}
</style>
