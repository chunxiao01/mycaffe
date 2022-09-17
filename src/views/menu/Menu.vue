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
          @shoptypebSelecte="menuShopTypebSelecte"
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
        >
          <menu-group :menugroupdata="menutypedatas"></menu-group>
        </scroll>
      </div>
      <div class="menu-list-content">
        <div class="menu-list-content-container">
          <scroll
            scrollWrapperName="menuContentScroll"
            id="menuContentScroll"
            ref="menuContentScrollRef"
          >
            <menu-content :menuContentData="menuContentDatas"></menu-content>
          </scroll>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import elementResizeDetectorMaker from "element-resize-detector"

import TogetherBtn from "@/components/common/together/TogetherBtn.vue"
import Search from "@/components/common/search/Search.vue"
import ShopAddress from "@/components/common/shopaddress/ShopAddress.vue"
import ShopType from "@/components/common/shoptype/ShopType.vue"
import Banner from "@/components/common/banner/Banner.vue"
import Scroll from "@/components/common/scroll/Scroll.vue"
import MenuGroup from "@/components/content/menus/MenuGroup.vue"
import MenuContent from "@/components/content/menus/MenuContent.vue"

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
      ],
      menutypedatas: [
        {
          menutypeid: "menutype_001",
          menutypename: "人气TOP",
          menutypekey: false,
          menutypekeyname: null
        },
        {
          menutypeid: "menutype_002",
          menutypename: "小黑杯",
          menutypekey: true,
          menutypekeyname: "瑰夏上新"
        },
        {
          menutypeid: "menutype_003",
          menutypename: "爆款套餐",
          menutypekey: false,
          menutypekeyname: null
        },
        {
          menutypeid: "menutype_004",
          menutypename: "夏日冰咖季",
          menutypekey: false,
          menutypekeyname: null
        },
        {
          menutypeid: "menutype_005",
          menutypename: "水果冰萃",
          menutypekey: false,
          menutypekeyname: null
        },
        {
          menutypeid: "menutype_006",
          menutypename: "生椰家族",
          menutypekey: false,
          menutypekeyname: null
        },
        {
          menutypeid: "menutype_007",
          menutypename: "瑞纳冰®",
          menutypekey: false,
          menutypekeyname: null
        },
        {
          menutypeid: "menutype_008",
          menutypename: "厚乳拿铁",
          menutypekey: true,
          menutypekeyname: "二周年"
        },
        {
          menutypeid: "menutype_009",
          menutypename: "丝绒拿铁",
          menutypekey: false,
          menutypekeyname: null
        },
        {
          menutypeid: "menutype_010",
          menutypename: "经典拿铁",
          menutypekey: true,
          menutypekeyname: "陨石"
        },
        {
          menutypeid: "menutype_011",
          menutypename: "大师咖啡",
          menutypekey: false,
          menutypekeyname: null
        },
        {
          menutypeid: "menutype_012",
          menutypename: "不喝咖啡",
          menutypekey: false,
          menutypekeyname: null
        },
        {
          menutypeid: "menutype_013",
          menutypename: "甜点小品",
          menutypekey: false,
          menutypekeyname: null
        },
        {
          menutypeid: "menutype_014",
          menutypename: "烘焙轻食",
          menutypekey: false,
          menutypekeyname: null
        },
        {
          menutypeid: "menutype_015",
          menutypename: "经典饮品",
          menutypekey: false,
          menutypekeyname: null
        }
      ],
      menuContentDatas: [
        {
          goodsGroupId: "menutype_001",
          goodsGroupName: "人气TOP",
          goodsGroupDesc: "喵喵必喝爆款，无限回购",
          goodsGroupTypeType: [
            {
              goodsGroupTypeTypeId: null,
              goodsGroupTypeTypeName: null,
              goodsGroupTypeTypeNumber: null
            }
          ],
          goodsGroupDetailData: [
            {
              goodsid: "goods_001",
              goodspic: require("assets/img/goods/menugoods/cat1.png"),
              goodsname: "椰云拿铁",
              goodstips: null,
              goodsdesc: "年度重磅 | 一口吞云，轻盈绵密",
              goodsdescfill: null,
              goodsprice_new: 19,
              goodsprice_old: 29,
              goodsSelected: true,
              goodspieces: 1
            },
            {
              goodsid: "goods_002",
              goodspic: require("assets/img/goods/menugoods/cat2.png"),
              goodsname: "生椰拿铁",
              goodstips: null,
              goodsdesc: "人气 | YYDS,无限回购",
              goodsdescfill: null,
              goodsprice_new: 18,
              goodsprice_old: 29,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_003",
              goodspic: require("assets/img/goods/menugoods/cat3.png"),
              goodsname: "椰青冰萃咖啡",
              goodstips: null,
              goodsdesc: "口感独特 | 奶咖控谨慎尝新",
              goodsdescfill: "*0脂0乳糖/标准冰/充分搅拌",
              goodsprice_new: 18,
              goodsprice_old: 29,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_004",
              goodspic: require("assets/img/goods/menugoods/cat4.png"),
              goodsname: "厚乳拿铁",
              goodstips: "二周年",
              goodsdesc: "人气 | 喵喵招牌，进入厚乳时代",
              goodsdescfill: null,
              goodsprice_new: 19,
              goodsprice_old: 29,
              goodsSelected: true,
              goodspieces: 2
            },
            {
              goodsid: "goods_005",
              goodspic: require("assets/img/goods/menugoods/cat5.png"),
              goodsname: "瑰夏•Dirty",
              goodstips: null,
              goodsdesc: "醇厚坚果前调，奶香余韵绵长",
              goodsdescfill: "*默认去冰",
              goodsprice_new: 20,
              goodsprice_old: 32,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_006",
              goodspic: require("assets/img/goods/menugoods/cat6.png"),
              goodsname: "丝绒拿铁",
              goodstips: null,
              goodsdesc: "超丝滑 | 年度重磅，丝滑感提升",
              goodsdescfill: "20.99%",
              goodsprice_new: 18,
              goodsprice_old: 29,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_007",
              goodspic: require("assets/img/goods/menugoods/cat7.png"),
              goodsname: "富桂厚乳拿铁",
              goodstips: null,
              goodsdesc: "三分桂香扑鼻，七分醇厚香甜",
              goodsdescfill: "*0卡糖",
              goodsprice_new: 19,
              goodsprice_old: 32,
              goodsSelected: true,
              goodspieces: 1
            },
            {
              goodsid: "goods_008",
              goodspic: require("assets/img/goods/menugoods/cat8.png"),
              goodsname: "生椰丝绒拿铁",
              goodstips: null,
              goodsdesc: "双爆款 | 一口椰香一口丝滑",
              goodsdescfill: null,
              goodsprice_new: 19,
              goodsprice_old: 32,
              goodsSelected: false,
              goodspieces: null
            }
          ]
        }
      ],
      menuTypeListScrollHeight: 100,
      menuContentScrollHeight: 100
    }
  },
  mounted() {
    this.watchDomSize()
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
    },
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
            _this.menuTypeListScrollHeight + "px"
          _this.$refs.menuListTypeScrollRef.scroll.refresh()

          _this.menuContentScrollHeight =
            all_height - menu_top_height - tabbar_height
          document.getElementById("menuContentScroll").style.height =
            _this.menuContentScrollHeight - 10 - 10 + "px"
          _this.$refs.menuContentScrollRef.scroll.refresh()
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
    MenuContent
  }
}
</script>

<style scoped>
.menu {
  width: 100%;
  height: calc(100vh - 54px);
  overflow: hidden;
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

.menu-main-container {
  width: 100%;
  display: flex;
}
.menu-list-type {
  width: 100px;
}
.menu-list-content {
  flex: 1;
  padding: 10px;
}

.menu-list-content-container {
  background-color: #fff;
  border-radius: 8px;
  padding: 5px;
}

/* #menuListTypeScroll {
  height: 610px;
} */
</style>
