<template>
  <div class="menu">
    <div class="menu-top-container" ref="menuTopContainer">
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
          @shoptypebSelect="menuShopTypebSelect"
        ></shop-type>
      </div>
      <div class="menu-top-banner">
        <banner :bannerswiperlist="menuBannerSwiperList"></banner>
      </div>
    </div>
    <div class="menu-main-container">
      <div class="menu-list-type">
        <scroll
          scrollWrapperName="menuTypeListScroll"
          id="menuListTypeScroll"
          ref="menuListTypeScrollRef"
          :probeType="0"
        >
          <menu-group
            :menugroupdata="menutypedatas"
            :menuGroupSelectedData="menuGroupSelectedData"
            ref="menuGroupRef"
            @menuTypeSelect="menuTypeSelect"
          ></menu-group>
        </scroll>
      </div>
      <div class="menu-list-content">
        <div class="menu-list-content-container">
          <scroll
            scrollWrapperName="menuContentScroll"
            id="menuContentScroll"
            ref="menuContentScrollRef"
            :probeType="3"
            :observeImage="true"
            @scrollPosition="debounceMenuContentScrollPosition"
          >
            <menu-content
              :menuContentData="menuContentDatas"
              ref="menuContentRef"
              :currentGoodsTypeSelectedId="currentGoodsTypeSelectedId"
            ></menu-content>
          </scroll>
          <goods-group-title
            :goodsGroupTitleData="getGoodsGroupTitle"
          ></goods-group-title>
        </div>
      </div>
    </div>
    <div class="goods-sell-cart" v-if="menutypedatas">
      <cart></cart>
    </div>
  </div>
</template>

<script>
import elementResizeDetectorMaker from "element-resize-detector"
import debounce from "lodash/debounce"

import TogetherBtn from "@/components/common/together/TogetherBtn.vue"
import Search from "@/components/common/search/Search.vue"
import ShopAddress from "@/components/common/shopaddress/ShopAddress.vue"
import ShopType from "@/components/common/shoptype/ShopType.vue"
import Banner from "@/components/common/banner/Banner.vue"
import Scroll from "@/components/common/scroll/Scroll.vue"
import MenuGroup from "@/components/content/menus/MenuGroup.vue"
import MenuContent from "@/components/content/menus/MenuContent.vue"
import GoodsGroupTitle from "@/components/content/goods/GoodsGroupTitle.vue"

import Cart from "../cart/Cart.vue"

export default {
  name: "Menu",
  data() {
    return {
      menuSearchPlaceholder: "搜搜你想喝的饮品",
      menushopAddressInfo: {
        shopAddressName: "喵喵咖啡旗舰店",
        shopAddressDistance: 0
      },
      menuBannerSwiperList: [
        { banner_text: "周年纪念款【青森苹果丝绒拿铁】，荡漾上线" },
        { banner_text: "秋意浓，喝丝绒！丝绒拿铁1岁啦~" },
        { banner_text: "生如瑰夏，豆中传奇！SCA84精品级，重磅上市" }
      ],
      menutypedatas: [],
      menuGroupSelectedData: {
        currentMenuTypeIndex: 0,
        currentMenuTypeId: null
      },
      menuContentDatas: [],
      menuContentTGoodsGroupHeight: [],
      menuContentTGoodsGroupPositonY: 0,
      menuTypeListScrollHeight: 100,
      menuContentScrollHeight: 100
    }
  },
  created() {
    this.menutypedatas = this.$store.state.goodsTypeDatas
    this.menuContentDatas = this.$store.state.goodsDatas
  },
  mounted() {
    this.watchDomSize()
  },
  computed: {
    currentMenuTypeIndex() {
      const { menuContentTGoodsGroupPositonY, menuContentTGoodsGroupHeight } =
        this
      const index = menuContentTGoodsGroupHeight.findIndex((height, index) => {
        return (
          menuContentTGoodsGroupPositonY >=
            menuContentTGoodsGroupHeight[index] &&
          menuContentTGoodsGroupPositonY <
            menuContentTGoodsGroupHeight[index + 1]
        )
      })
      return index > 0 ? index : 0
    },
    currentGoodsTypeSelectedId() {
      return this.menuGroupSelectedData.currentMenuTypeId
    },
    getGoodsGroupTitle() {
      const index = this.menuGroupSelectedData.currentMenuTypeIndex
      if (this.menuContentDatas && this.menuContentDatas[index]) {
        return this.menuContentDatas[index]
      } else {
        return {
          goodsGroupId: null,
          goodsGroupName: null,
          goodsGroupDesc: null,
          goodsGroupTypeType: [
            {
              goodsGroupTypeTypeId: null,
              goodsGroupTypeTypeName: null,
              goodsGroupTypeTypeNumber: null
            }
          ]
        }
      }
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
    menuShopTypebSelect(value) {
      console.log(value)
    },
    menuTypeSelect(index, id, e) {
      if (this.menuContentDatas[index]) {
        // console.log(e)
        let menuContentGroups =
          this.$refs.menuContentRef && this.$refs.menuContentRef.$el.children
        let el = menuContentGroups[index]
        this.$refs.menuContentScrollRef.scroll &&
          this.$refs.menuContentScrollRef.scrollToElement(el, false, true)
      }
    },
    menuContentScrollPosition(position) {
      let menuContentGroups = this.$refs.menuContentRef.$el.children
      let height = 0
      this.menuContentTGoodsGroupHeight = []
      this.menuContentTGoodsGroupHeight.push(height)
      Array.prototype.slice.call(menuContentGroups).forEach((item) => {
        height += item.clientHeight
        this.menuContentTGoodsGroupHeight.push(height)
      })
      this.menuContentTGoodsGroupPositonY = Math.abs(Math.round(position.y))

      this.menuGroupSelectedData.currentMenuTypeIndex =
        this.currentMenuTypeIndex
      this.menuGroupSelectedData.currentMenuTypeId =
        this.menutypedatas[this.currentMenuTypeIndex].menutypeid
    },
    debounceMenuContentScrollPosition: debounce(function (position) {
      this.menuContentScrollPosition(position)
    }, 50),
    watchDomSize() {
      const _this = this
      const erd = elementResizeDetectorMaker()
      erd.listenTo(this.$refs.menuTopContainer, (element) => {
        const menu_top_height = element.offsetHeight
        const all_height =
          document.getElementById("app").clientHeight ||
          document.documentElement.clientHeight
        const tabbar_height = document.getElementById("mainTabBar").clientHeight
        _this.$nextTick(() => {
          _this.menuTypeListScrollHeight =
            all_height - menu_top_height - tabbar_height

          document.getElementById("menuListTypeScroll").style.height =
            _this.menuTypeListScrollHeight - 10 + "px"
          _this.$refs.menuListTypeScrollRef.scroll &&
            _this.$refs.menuListTypeScrollRef.scrollRefresh()

          _this.menuContentScrollHeight =
            all_height - menu_top_height - tabbar_height
          document.getElementById("menuContentScroll").style.height =
            _this.menuContentScrollHeight - 10 - 10 + "px"

          _this.$refs.menuContentScrollRef.scroll &&
            _this.$refs.menuContentScrollRef.scrollRefresh()
        })
      })
    }
  },
  components: {
    TogetherBtn,
    Search,
    ShopAddress,
    ShopType,
    Banner,
    Scroll,
    MenuGroup,
    MenuContent,
    GoodsGroupTitle,
    Cart
  }
}
</script>

<style scoped>
.menu {
  width: 100%;
  height: calc(100vh - 54px);
  overflow: hidden;
  position: relative;
}
.menu-top-container {
  width: 100%;
  padding: 10px;
  background-color: #fff;
  position: relative;
  z-index: 998;
}
.menu-top-content {
  width: 100%;
  display: flex;
}
.ment-top-together-btn {
  width: 90px;
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
  width: 100px;
}
.menu-shop-address {
  flex: 1;
}

.menu-main-container {
  width: 100%;
  display: flex;
  padding: 10px 0;
}
.menu-list-type {
  width: 90px;
  overflow: hidden;
}
.menu-list-content {
  flex: 1;
  padding: 0 10px 0 5px;
  overflow: hidden;
}

.menu-list-content-container {
  background-color: #fff;
  border-radius: 8px;
  padding: 5px;
  position: relative;
}

.goods-sell-cart {
  position: fixed;
  left: 0;
  bottom: 54px;
  width: 100%;
  z-index: 999;
}
</style>
