<template>
  <div class="menu">
    <div class="menu-container">
      <div class="menu-top-content">
        <div class="ment-top-together-btn">
          <together-btn @togetherClick="menuTogetherClick"></together-btn>
        </div>
        <div class="ment-top-search">
          <search
            :searchPlaceholder="menuSearchPlaceholder"
            @searchGoods="menuSearchGoods"
          ></search>
        </div>
      </div>
      <div class="menu-top-shop-content">
        <shop-address
          class="menu-shop-address"
          :shop-address-info="menushopAddressInfo"
        ></shop-address>
        <shop-type
          class="menu-shop-type"
          @shoptypebSelecte="menuShopTypebSelecte"
        ></shop-type>
      </div>
      <div class="menu-top-banner">
        <banner :bannerswiperlist="menuBannerSwiperList"></banner>
      </div>
    </div>
  </div>
</template>

<script>
import TogetherBtn from "@/components/common/together/TogetherBtn.vue"
import Search from "@/components/common/search/Search.vue"
import ShopAddress from "@/components/common/shopaddress/ShopAddress.vue"
import ShopType from "@/components/common/shoptype/ShopType.vue"
import Banner from "@/components/common/banner/Banner.vue"

export default {
  name: "Menu",
  data() {
    return {
      menuSearchPlaceholder: "搜搜你想喝的饮品",
      menushopAddressInfo: {
        shopAddressName: "中电软件园店",
        shopAddressDistance: 0
      },
      menuBannerSwiperList: [
        { banner_text: "厚乳拿铁2岁了！浓醇厚乳，无限回购" },
        { banner_text: "生如瑰夏，豆中传奇！SCA84精品级，重磅上市" }
      ]
    }
  },
  methods: {
    menuTogetherClick() {
      console.log("一起去拼单!")
    },
    menuSearchGoods(value) {
      if (value) {
        console.log(value)
      }
    },
    menuShopTypebSelecte(value) {
      console.log(value)
    }
  },
  components: {
    TogetherBtn,
    Search,
    ShopAddress,
    ShopType,
    Banner
  }
}
</script>

<style scoped>
.menu {
  width: 100%;
}
.menu-container {
  width: 100%;
  padding: 10px;
  background-color: #fff;
}
.menu-top-content {
  width: 100%;
  display: flex;
}
.ment-top-together-btn {
  width: 100px;
}
.ment-top-search {
  flex: 1;
  margin-left: 5px;
}

.menu-top-shop-content {
  width: 100%;
  display: flex;
  padding: 5px 0;
}
.menu-shop-type {
  width: 120px;
}
.menu-shop-address {
  flex: 1;
}
</style>
