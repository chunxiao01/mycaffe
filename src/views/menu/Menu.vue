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
            @scrollPosition="menuContentScrollPosition"
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
          menutypekeyname: null,
          menuTypePositionY: 0
        },
        {
          menutypeid: "menutype_002",
          menutypename: "小黑杯",
          menutypekey: true,
          menutypekeyname: "瑰夏上新",
          menuTypePositionY: 0
        },
        {
          menutypeid: "menutype_003",
          menutypename: "爆款套餐",
          menutypekey: false,
          menutypekeyname: null,
          menuTypePositionY: 0
        },
        {
          menutypeid: "menutype_004",
          menutypename: "夏日冰咖季",
          menutypekey: false,
          menutypekeyname: null,
          menuTypePositionY: 0
        },
        {
          menutypeid: "menutype_005",
          menutypename: "水果冰萃",
          menutypekey: false,
          menutypekeyname: null,
          menuTypePositionY: 0
        },
        {
          menutypeid: "menutype_006",
          menutypename: "生椰家族",
          menutypekey: false,
          menutypekeyname: null,
          menuTypePositionY: 0
        },
        {
          menutypeid: "menutype_007",
          menutypename: "厚乳拿铁",
          menutypekey: true,
          menutypekeyname: "二周年",
          menuTypePositionY: 0
        },
        {
          menutypeid: "menutype_008",
          menutypename: "丝绒拿铁",
          menutypekey: false,
          menutypekeyname: null,
          menuTypePositionY: 0
        },
        {
          menutypeid: "menutype_009",
          menutypename: "经典拿铁",
          menutypekey: true,
          menutypekeyname: "陨石",
          menuTypePositionY: 0
        },
        {
          menutypeid: "menutype_010",
          menutypename: "瑞纳冰®",
          menutypekey: false,
          menutypekeyname: null,
          menuTypePositionY: 0
        },
        {
          menutypeid: "menutype_011",
          menutypename: "大师咖啡",
          menutypekey: false,
          menutypekeyname: null,
          menuTypePositionY: 0
        },
        {
          menutypeid: "menutype_012",
          menutypename: "不喝咖啡",
          menutypekey: false,
          menutypekeyname: null,
          menuTypePositionY: 0
        },
        {
          menutypeid: "menutype_013",
          menutypename: "甜品小点",
          menutypekey: false,
          menutypekeyname: null,
          menuTypePositionY: 0
        },
        {
          menutypeid: "menutype_014",
          menutypename: "烘焙轻食",
          menutypekey: false,
          menutypekeyname: null,
          menuTypePositionY: 0
        },
        {
          menutypeid: "menutype_015",
          menutypename: "经典饮品",
          menutypekey: false,
          menutypekeyname: null,
          menuTypePositionY: 0
        }
      ],
      menuContentDatas: [
        {
          goodsGroupId: "menutype_001",
          goodsGroupName: "人气TOP",
          goodsGroupDesc: "喵喵必喝爆款，无限回购",
          goodsGroupNamePositionY: 0,
          goodsGroupNameRefName: "menutype_001_ref",
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
              goodsprice_new: 16,
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
        },
        {
          goodsGroupId: "menutype_002",
          goodsGroupName: "小黑杯",
          goodsGroupDesc: "SOE单一产品地精品咖啡豆，SCA80+精品级认证，味觉升级",
          goodsGroupNamePositionY: 0,
          goodsGroupNameRefName: "menutype_002_ref",
          goodsGroupTypeType: [
            {
              goodsGroupTypeTypeId: "menutype_002_type_001",
              goodsGroupTypeTypeName: "瑰夏",
              goodsGroupTypeTypeNumber: 5
            },
            {
              goodsGroupTypeTypeId: "menutype_002_type_002",
              goodsGroupTypeTypeName: "耶加雪菲",
              goodsGroupTypeTypeNumber: 5
            }
          ],
          goodsGroupDetailData: [
            {
              goodsid: "goods_001",
              goodspic: require("assets/img/goods/menugoods/cat1.png"),
              goodsname: "瑰夏 • Dirty",
              goodstips: null,
              goodsdesc: "醇厚坚果前调，奶香余韵绵长",
              goodsdescfill: "*默认去冰",
              goodsprice_new: 22,
              goodsprice_old: 32,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_002",
              goodspic: require("assets/img/goods/menugoods/cat2.png"),
              goodsname: "瑰夏 • 生椰Dirty",
              goodstips: null,
              goodsdesc: "浓郁夏威夷果风味，清甜椰香尾韵",
              goodsdescfill: null,
              goodsprice_new: 22,
              goodsprice_old: 35,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_003",
              goodspic: require("assets/img/goods/menugoods/cat3.png"),
              goodsname: "瑰夏 • 美式",
              goodstips: null,
              goodsdesc: "饱满坚果香气，回味悠长",
              goodsdescfill: null,
              goodsprice_new: 18,
              goodsprice_old: 29,
              goodsSelected: false,
              goodspieces: null
            },

            {
              goodsid: "goods_004",
              goodspic: require("assets/img/goods/menugoods/cat4.png"),
              goodsname: "瑰夏 • 拿铁",
              goodstips: null,
              goodsdesc: "甄选SCA84精品级咖啡豆",
              goodsdescfill: null,
              goodsprice_new: 20,
              goodsprice_old: 32,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_005",
              goodspic: require("assets/img/goods/menugoods/cat5.png"),
              goodsname: "瑰夏 • 澳瑞白",
              goodstips: null,
              goodsdesc: "绵密奶泡注入，口感圆润饱满",
              goodsdescfill: null,
              goodsprice_new: 22,
              goodsprice_old: 35,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_006",
              goodspic: require("assets/img/goods/menugoods/cat6.png"),
              goodsname: "耶加 • Dirty",
              goodstips: null,
              goodsdesc: "大口喝，前三口最奇妙",
              goodsdescfill: "*默认去冰",
              goodsprice_new: 19,
              goodsprice_old: 32,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_007",
              goodspic: require("assets/img/goods/menugoods/cat7.png"),
              goodsname: "耶加 • 生椰Dirty",
              goodstips: null,
              goodsdesc: "明亮柑橘前调，浓郁椰香尾韵",
              goodsdescfill: "*默认去冰",
              goodsprice_new: 21,
              goodsprice_old: 35,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_008",
              goodspic: require("assets/img/goods/menugoods/cat8.png"),
              goodsname: "耶加雪菲 • 澳瑞白",
              goodstips: null,
              goodsdesc: "人气爆款 | 甄选IIAC铂金豆",
              goodsdescfill: null,
              goodsprice_new: 21,
              goodsprice_old: 26,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_009",
              goodspic: require("assets/img/goods/menugoods/cat1.png"),
              goodsname: "耶加雪菲 • 美式",
              goodstips: null,
              goodsdesc: "明亮柑橘调，尽享纯粹风味",
              goodsdescfill: null,
              goodsprice_new: 17,
              goodsprice_old: 29,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_010",
              goodspic: require("assets/img/goods/menugoods/cat2.png"),
              goodsname: "耶加雪菲 • 拿铁",
              goodstips: null,
              goodsdesc: "醇厚坚果前调，奶香余韵绵长",
              goodsdescfill: null,
              goodsprice_new: 19,
              goodsprice_old: 32,
              goodsSelected: false,
              goodspieces: null
            }
          ]
        },
        {
          goodsGroupId: "menutype_003",
          goodsGroupName: "爆款套餐",
          goodsGroupDesc: null,
          goodsGroupNamePositionY: 0,
          goodsGroupNameRefName: "menutype_003_ref",
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
              goodsname: "秋天下午茶",
              goodstips: null,
              goodsdesc: "节气限定套餐5.5折",
              goodsdescfill: null,
              goodsprice_new: "22.55起",
              goodsprice_old: null,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_002",
              goodspic: require("assets/img/goods/menugoods/cat2.png"),
              goodsname: "4杯吨吨咖啡",
              goodstips: null,
              goodsdesc: "欢乐下午茶，享4倍快乐",
              goodsdescfill: null,
              goodsprice_new: "61.48起",
              goodsprice_old: null,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_003",
              goodspic: require("assets/img/goods/menugoods/cat3.png"),
              goodsname: "3杯醒醒咖啡",
              goodstips: null,
              goodsdesc: "饮品选3不纠结",
              goodsdescfill: null,
              goodsprice_new: "46.11起",
              goodsprice_old: null,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_004",
              goodspic: require("assets/img/goods/menugoods/cat4.png"),
              goodsname: "2杯贴贴咖啡",
              goodstips: null,
              goodsdesc: "你一杯我一杯，好喝加倍",
              goodsdescfill: null,
              goodsprice_new: "31.9起",
              goodsprice_old: null,
              goodsSelected: false,
              goodspieces: null
            }
          ]
        },
        {
          goodsGroupId: "menutype_004",
          goodsGroupName: "夏日冰咖季",
          goodsGroupDesc: "夏日冰咖，依然YYDS",
          goodsGroupNamePositionY: 0,
          goodsGroupNameRefName: "menutype_004_ref",
          goodsGroupTypeType: [
            {
              goodsGroupTypeTypeId: "menutype_004_type_001",
              goodsGroupTypeTypeName: "奶咖爱好者",
              goodsGroupTypeTypeNumber: 6
            },
            {
              goodsGroupTypeTypeId: "menutype_004_type_002",
              goodsGroupTypeTypeName: "黑咖爱好者",
              goodsGroupTypeTypeNumber: 4
            }
          ],
          goodsGroupDetailData: [
            {
              goodsid: "goods_001",
              goodspic: require("assets/img/goods/menugoods/cat1.png"),
              goodsname: "冰生椰丝绒拿铁",
              goodstips: null,
              goodsdesc: "椰香清甜，冰润更丝滑",
              goodsdescfill: null,
              goodsprice_new: 19,
              goodsprice_old: 32,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_002",
              goodspic: require("assets/img/goods/menugoods/cat2.png"),
              goodsname: "冰厚乳拿铁",
              goodstips: null,
              goodsdesc: "奶味浓醇出众，冰爽一夏",
              goodsdescfill: null,
              goodsprice_new: 16,
              goodsprice_old: 29,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_003",
              goodspic: require("assets/img/goods/menugoods/cat3.png"),
              goodsname: "冰海盐芝士厚乳拿铁",
              goodstips: null,
              goodsdesc: "奶盖配厚乳，浓醇大满足",
              goodsdescfill: null,
              goodsprice_new: 19,
              goodsprice_old: 32,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_004",
              goodspic: require("assets/img/goods/menugoods/cat4.png"),
              goodsname: "冰丝绒拿铁",
              goodstips: null,
              goodsdesc: "冰的刚刚好，一口丝滑滑滑",
              goodsdescfill: null,
              goodsprice_new: 18,
              goodsprice_old: 29,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_005",
              goodspic: require("assets/img/goods/menugoods/cat5.png"),
              goodsname: "陨石厚乳拿铁",
              goodstips: null,
              goodsdesc: "Q弹陨石入醇厚奶香",
              goodsdescfill: null,
              goodsprice_new: 19,
              goodsprice_old: 32,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_006",
              goodspic: require("assets/img/goods/menugoods/cat6.png"),
              goodsname: "冰香草丝绒拿铁",
              goodstips: null,
              goodsdesc: "冰一下，香草风味更浓郁",
              goodsdescfill: null,
              goodsprice_new: 19,
              goodsprice_old: 32,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_007",
              goodspic: require("assets/img/goods/menugoods/cat7.png"),
              goodsname: "橘金气泡咖啡",
              goodstips: null,
              goodsdesc: "个性特调 | 奶咖控谨慎尝新",
              goodsdescfill: "0糖0脂0能量，回归榜人气TOP1",
              goodsprice_new: 18,
              goodsprice_old: 29,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_008",
              goodspic: require("assets/img/goods/menugoods/cat8.png"),
              goodsname: "西柚气泡咖啡",
              goodstips: null,
              goodsdesc: "个性特调 | 奶咖控谨慎尝新",
              goodsdescfill: "0糖0脂0能量",
              goodsprice_new: 18,
              goodsprice_old: 29,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_009",
              goodspic: require("assets/img/goods/menugoods/cat1.png"),
              goodsname: "耶加雪菲 • 冰美式",
              goodstips: null,
              goodsdesc: "明亮柑橘调，加冰后风味更明显",
              goodsdescfill: null,
              goodsprice_new: 17,
              goodsprice_old: 29,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_010",
              goodspic: require("assets/img/goods/menugoods/cat2.png"),
              goodsname: "冰标准美式",
              goodstips: null,
              goodsdesc: "0脂低卡 | 冰爽香醇",
              goodsdescfill: null,
              goodsprice_new: 13,
              goodsprice_old: 23,
              goodsSelected: false,
              goodspieces: null
            }
          ]
        },
        {
          goodsGroupId: "menutype_005",
          goodsGroupName: "水果冰萃",
          goodsGroupDesc: "SOE精品埃塞豆与水果风味清爽碰撞，Let's Chill",
          goodsGroupNamePositionY: 0,
          goodsGroupNameRefName: "menutype_005_ref",
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
              goodsname: "葡萄冰萃咖啡",
              goodstips: null,
              goodsdesc: "个性特调 | 奶咖控谨慎尝新",
              goodsdescfill: "回归榜人气TOP3",
              goodsprice_new: 19,
              goodsprice_old: 32,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_002",
              goodspic: require("assets/img/goods/menugoods/cat2.png"),
              goodsname: "火烈鸟冰萃咖啡",
              goodstips: null,
              goodsdesc: "0脂 | 粉柠特调，搅一搅更好喝",
              goodsdescfill: null,
              goodsprice_new: 19,
              goodsprice_old: 32,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_003",
              goodspic: require("assets/img/goods/menugoods/cat3.png"),
              goodsname: "闪光橙橙冰萃咖啡",
              goodstips: null,
              goodsdesc: "0脂 | 含NFC非浓缩还原橙汁",
              goodsdescfill: null,
              goodsprice_new: 19,
              goodsprice_old: 32,
              goodsSelected: false,
              goodspieces: null
            }
          ]
        },
        {
          goodsGroupId: "menutype_006",
          goodsGroupName: "生椰家族",
          goodsGroupDesc: "《新周刊》2021中国生活趋势榜 国民风味",
          goodsGroupNamePositionY: 0,
          goodsGroupNameRefName: "menutype_006_ref",
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
              goodsname: "生椰拿铁",
              goodstips: null,
              goodsdesc: "人气 | YYDS,无限回购",
              goodsdescfill: "回归榜人气TOP3",
              goodsprice_new: 18,
              goodsprice_old: 29,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_002",
              goodspic: require("assets/img/goods/menugoods/cat2.png"),
              goodsname: "椰云拿铁",
              goodstips: null,
              goodsdesc: "年度重磅 | 一口吞云，轻盈绵密",
              goodsdescfill: null,
              goodsprice_new: 19,
              goodsprice_old: 29,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_003",
              goodspic: require("assets/img/goods/menugoods/cat3.png"),
              goodsname: "生椰丝绒拿铁",
              goodstips: null,
              goodsdesc: "双爆款 | 一口椰香一口丝滑",
              goodsdescfill: null,
              goodsprice_new: 19,
              goodsprice_old: 32,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_004",
              goodspic: require("assets/img/goods/menugoods/cat4.png"),
              goodsname: "蓝天白云拿铁",
              goodstips: null,
              goodsdesc: "0乳糖 | 绵密椰云™，一口很治愈",
              goodsdescfill: null,
              goodsprice_new: 21,
              goodsprice_old: 35,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_006",
              goodspic: require("assets/img/goods/menugoods/cat6.png"),
              goodsname: "耶加 • Dirty",
              goodstips: null,
              goodsdesc: "大口喝，前三口最奇妙",
              goodsdescfill: "*默认去冰",
              goodsprice_new: 19,
              goodsprice_old: 32,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_005",
              goodspic: require("assets/img/goods/menugoods/cat5.png"),
              goodsname: "生椰爱摩卡",
              goodstips: null,
              goodsdesc: "经典 | 清甜椰香恋上浓醇可可",
              goodsdescfill: null,
              goodsprice_new: 21,
              goodsprice_old: 35,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_007",
              goodspic: require("assets/img/goods/menugoods/cat7.png"),
              goodsname: "抹茶好喝椰",
              goodstips: null,
              goodsdesc: "0乳糖 | 抹茶控人气首选",
              goodsdescfill: null,
              goodsprice_new: 19,
              goodsprice_old: 32,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_008",
              goodspic: require("assets/img/goods/menugoods/cat8.png"),
              goodsname: "陨石生椰拿铁",
              goodstips: null,
              goodsdesc: "0乳糖 | 人气陨石拿铁 • 生椰版",
              goodsdescfill: null,
              goodsprice_new: 20,
              goodsprice_old: 32,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_009",
              goodspic: require("assets/img/goods/menugoods/cat1.png"),
              goodsname: "芒果好喝椰",
              goodstips: null,
              goodsdesc: "香甜芒果香气邂逅清甜椰浆",
              goodsdescfill: null,
              goodsprice_new: 21,
              goodsprice_old: 35,
              goodsSelected: false,
              goodspieces: null
            }
          ]
        },
        {
          goodsGroupId: "menutype_007",
          goodsGroupName: "厚乳拿铁",
          goodsGroupDesc:
            "精选厚牛乳注入醇厚新口感，2020 EDGE Awards年度新消费产品",
          goodsGroupNamePositionY: 0,
          goodsGroupNameRefName: "menutype_007_ref",
          goodsGroupTypeType: [
            {
              goodsGroupTypeTypeId: null,
              goodsGroupTypeTypeName: null,
              goodsGroupTypeTypeNumber: null
            }
          ],
          goodsGroupDetailData: [
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
              goodsid: "goods_002",
              goodspic: require("assets/img/goods/menugoods/cat2.png"),
              goodsname: "冰厚乳拿铁",
              goodstips: null,
              goodsdesc: "奶味浓醇出众，冰爽一夏",
              goodsdescfill: null,
              goodsprice_new: 16,
              goodsprice_old: 29,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_001",
              goodspic: require("assets/img/goods/menugoods/cat1.png"),
              goodsname: "偷偷想你茉莉鸳鸯",
              goodstips: null,
              goodsdesc: "超清爽 | 现泡茉莉花茶，清新纯润",
              goodsdescfill: null,
              goodsprice_new: 18,
              goodsprice_old: 29,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_003",
              goodspic: require("assets/img/goods/menugoods/cat3.png"),
              goodsname: "海盐芝士茉莉鸳鸯",
              goodstips: null,
              goodsdesc: "海盐芝士版 • 偷偷想你茉莉鸳鸯",
              goodsdescfill: null,
              goodsprice_new: 19,
              goodsprice_old: 32,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_007",
              goodspic: require("assets/img/goods/menugoods/cat7.png"),
              goodsname: "海盐芝士厚乳拿铁",
              goodstips: null,
              goodsdesc: "人气 | 暖咖必选，经典芝士奶盖",
              goodsdescfill: null,
              goodsprice_new: 19,
              goodsprice_old: 32,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_006",
              goodspic: require("assets/img/goods/menugoods/cat6.png"),
              goodsname: "新鸳鸯红茶拿铁",
              goodstips: null,
              goodsdesc: "中国港式经典x冷翠厚牛乳",
              goodsdescfill: null,
              goodsprice_new: 18,
              goodsprice_old: 29,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_005",
              goodspic: require("assets/img/goods/menugoods/cat5.png"),
              goodsname: "陨石厚乳拿铁",
              goodstips: null,
              goodsdesc: "Q弹陨石入醇厚奶香",
              goodsdescfill: null,
              goodsprice_new: 19,
              goodsprice_old: 32,
              goodsSelected: false,
              goodspieces: null
            }
          ]
        },
        {
          goodsGroupId: "menutype_008",
          goodsGroupName: "丝绒拿铁",
          goodsGroupDesc: null,
          goodsGroupNamePositionY: 0,
          goodsGroupNameRefName: "menutype_008_ref",
          goodsGroupTypeType: [
            {
              goodsGroupTypeTypeId: null,
              goodsGroupTypeTypeName: null,
              goodsGroupTypeTypeNumber: null
            }
          ],
          goodsGroupDetailData: [
            {
              goodsid: "goods_004",
              goodspic: require("assets/img/goods/menugoods/cat4.png"),
              goodsname: "冰丝绒拿铁",
              goodstips: null,
              goodsdesc: "冰的刚刚好，一口丝滑滑滑",
              goodsdescfill: null,
              goodsprice_new: 18,
              goodsprice_old: 29,
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
              goodsid: "goods_001",
              goodspic: require("assets/img/goods/menugoods/cat1.png"),
              goodsname: "冰生椰丝绒拿铁",
              goodstips: null,
              goodsdesc: "椰香清甜，冰润更丝滑",
              goodsdescfill: null,
              goodsprice_new: 19,
              goodsprice_old: 32,
              goodsSelected: false,
              goodspieces: null
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
            },
            {
              goodsid: "goods_002",
              goodspic: require("assets/img/goods/menugoods/cat2.png"),
              goodsname: "冲绳黑糖丝绒拿铁",
              goodstips: null,
              goodsdesc: "老爆款升级，口感更丝滑",
              goodsdescfill: null,
              goodsprice_new: 19,
              goodsprice_old: 32,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_003",
              goodspic: require("assets/img/goods/menugoods/cat3.png"),
              goodsname: "香草丝绒拿铁",
              goodstips: null,
              goodsdesc: "丝滑香甜，源自马达加斯加香草",
              goodsdescfill: null,
              goodsprice_new: 19,
              goodsprice_old: 29,
              goodsSelected: false,
              goodspieces: null
            }
          ]
        },
        {
          goodsGroupId: "menutype_009",
          goodsGroupName: "经典拿铁",
          goodsGroupDesc: null,
          goodsGroupNamePositionY: 0,
          goodsGroupNameRefName: "menutype_009_ref",
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
              goodsname: "拿铁",
              goodstips: null,
              goodsdesc: "意式浓缩与牛奶的经典混合",
              goodsdescfill: null,
              goodsprice_new: 15,
              goodsprice_old: 26,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_002",
              goodspic: require("assets/img/goods/menugoods/cat2.png"),
              goodsname: "陨石拿铁",
              goodstips: null,
              goodsdesc: "人气 | 真的不含陨石成分",
              goodsdescfill: null,
              goodsprice_new: 17,
              goodsprice_old: 29,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_003",
              goodspic: require("assets/img/goods/menugoods/cat3.png"),
              goodsname: "焦糖拿铁",
              goodstips: null,
              goodsdesc: "浓郁焦糖香气，萦绕唇齿舌间",
              goodsdescfill: null,
              goodsprice_new: 17,
              goodsprice_old: 29,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_004",
              goodspic: require("assets/img/goods/menugoods/cat4.png"),
              goodsname: "冲绳黑糖拿铁",
              goodstips: null,
              goodsdesc: "黑糖与咖啡的美妙融合",
              goodsdescfill: null,
              goodsprice_new: 17,
              goodsprice_old: 29,
              goodsSelected: false,
              goodspieces: null
            },
            {
              goodsid: "goods_005",
              goodspic: require("assets/img/goods/menugoods/cat5.png"),
              goodsname: "香草拿铁",
              goodstips: null,
              goodsdesc: "经典香甜口感，一口治愈味蕾",
              goodsdescfill: null,
              goodsprice_new: 17,
              goodsprice_old: 29,
              goodsSelected: false,
              goodspieces: null
            }
          ]
        }
      ],
      menuContentTGoodsGroupTypeTitlePositonY: [],
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
    menuShopTypebSelect(value) {
      console.log(value)
    },
    menuTypeSelect(id) {
      console.log("选择的类型：", id)
      console.log("选择的类型：", this.$refs.menuGroupRef.currentMenuTyprId)
    },
    menuContentScrollPosition(position) {
      // console.log("滚动", position)
      // console.log(this.menuContentDatas[0].goodsGroupNameRefName)
      // console.log(this.$refs[this.menuContentDatas[0].goodsGroupNameRefName])
      // console.log(this.$refs.menuContentScrollRef.$refs)
      // const goodsGroupNamePositionYValue =
      //   this.$refs[this.menuContentDatas[0].goodsGroupNameRefName].offsetHeight
      // console.log(
      //   "标题高度",
      //   this.menuContentDatas[0].goodsGroupName,
      //   goodsGroupNamePositionYValue
      // )
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
            _this.menuTypeListScrollHeight - 10 + "px"
          _this.$refs.menuListTypeScrollRef.scrollRefresh()

          _this.menuContentScrollHeight =
            all_height - menu_top_height - tabbar_height
          document.getElementById("menuContentScroll").style.height =
            _this.menuContentScrollHeight - 10 - 10 + "px"

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
}
</style>
