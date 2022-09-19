<template>
  <div class="shop-address">
    <div class="shop-address-name">
      {{ shopAddressInfo.shopAddressName }} ＞
    </div>
    <div class="shop-address-distance">
      距您{{ shopAddressInfo.shopAddressDistance }}m
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopAddress",
  props: {
    shopAddressInfo: {
      type: Object,
      default() {
        return {
          shopAddressName: "",
          shopAddressDistance: 0
        }
      }
    }
  }
}
</script>

<style scoped>
.shop-address {
  width: 100%;
  padding: 5px;
}
.shop-address-name {
  font-size: 15px;
  margin-bottom: 3px;
}
.shop-address-distance {
  font-size: 12px;
  color: #999;
}
</style>
