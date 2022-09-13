<template>
  <div class="home-product-list">
    <product-list :productlistdata="homeproductlistdata"></product-list>
  </div>
</template>

<script>
import ProductList from "@/components/content/goods/ProductList.vue"

export default {
  name: "HomeProductList",
  props: {
    homeproductlistdata: {
      type: Array,
      default() {
        return [
          {
            product_id: "product_001",
            product_name: "元气弹系列2.0即溶咖啡",
            product_pic: require("assets/img/goods/simplegoods/goods-cat1.png"),
            product_post: "特递包邮",
            product_size: "10gX18颗",
            product_desc: "元气弹系列2.0即溶咖啡",
            product_price_new: 89,
            product_price_old: 129,
            product_desc_tips: ["赠品"],
            product_sale: "7300+"
          },
          {
            product_id: "product_002",
            product_name: "精品冷萃冻干咖啡",
            product_pic: require("assets/img/goods/simplegoods/goods-cat2.png"),
            product_post: "特递包邮",
            product_size: "3gX12颗",
            product_desc: "风味漫游系列即溶咖啡",
            product_price_new: 89,
            product_price_old: 129,
            product_desc_tips: ["赠品"],
            product_sale: "42100+"
          },
          {
            product_id: "product_003",
            product_name: "吸猫系列2.0挂耳咖啡",
            product_pic: require("assets/img/goods/simplegoods/goods-cat3.png"),
            product_post: "特递包邮",
            product_size: "10gX20袋",
            product_desc: "吸猫系列2.0挂耳咖啡",
            product_price_new: 79,
            product_price_old: 99,
            product_desc_tips: ["赠品"],
            product_sale: "5900+"
          },
          {
            product_id: "product_004",
            product_name: "精品挂耳咖啡",
            product_pic: require("assets/img/goods/simplegoods/goods-cat4.png"),
            product_post: "特递包邮",
            product_size: "10gX8袋",
            product_desc: "精品挂耳咖啡",
            product_price_new: 49.9,
            product_price_old: 79.9,
            product_desc_tips: ["赠品"],
            product_sale: "9200+"
          },
          {
            product_id: "product_005",
            product_name: "鲜萃咖啡液",
            product_pic: require("assets/img/goods/simplegoods/goods-cat1.png"),
            product_post: "特递包邮",
            product_size: "25mLX9包",
            product_desc: "鲜萃咖啡液",
            product_price_new: 69,
            product_price_old: 129,
            product_desc_tips: ["满减", "赠品"],
            product_sale: "900+"
          }
        ]
      }
    }
  },
  components: {
    ProductList
  }
}
</script>

<style scoped>
.home-product-list {
  width: 100%;
  margin-top: 10px;
}
</style>
