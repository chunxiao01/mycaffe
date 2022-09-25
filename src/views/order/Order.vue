<template>
  <div class="order">
    <div class="order-container">
      <div class="order-title">我的订单</div>
      <div class="order-control">
        <tab-control-capsule
          :tabControlCapsuleData="tabControlCapsuleData"
          @tab_control_capsule_tab_click="tab_control_capsule_tab_click"
        ></tab-control-capsule>
      </div>
      <div class="order-content">
        <scroll
          scrollWrapperName="orderListScroll"
          id="orderListScroll"
          ref="orderListScrollRef"
          :probeType="0"
          :observeImage="true"
        >
          <order-list>
            <order-item
              v-for="item in orderDatas"
              :key="item.order_id"
              :orderItemData="item"
            ></order-item>
          </order-list>
        </scroll>
      </div>
    </div>
  </div>
</template>

<script>
import TabControlCapsule from "@/components/common/tabcontrol/TabControlCapsule.vue"
import Scroll from "@/components/common/scroll/Scroll.vue"
import OrderList from "./OrderList.vue"
import OrderItem from "./OrderItem.vue"

export default {
  name: "Order",
  data() {
    return {
      tabControlCapsuleData: [
        {
          tabcontrol_tab_name: "全部",
          tabcontrol_tab_index: "tabcontrol_tab_0"
        },
        {
          tabcontrol_tab_name: "门店订单",
          tabcontrol_tab_index: "tabcontrol_tab_1"
        },
        {
          tabcontrol_tab_name: "卡券订单",
          tabcontrol_tab_index: "tabcontrol_tab_2"
        },
        {
          tabcontrol_tab_name: "潮品订单",
          tabcontrol_tab_index: "tabcontrol_tab_3"
        }
      ],
      orderDatas: [
        {
          order_id: "order20220309141030000001",
          order_shoptype: "自提",
          order_shop: "喵喵咖啡旗舰店(NO.0001)",
          order_state: "已完成",
          order_goods: [
            {
              goodsid: "goods_001",
              goodsname: "陨石厚乳拿铁",
              goodspic: require("assets/img/goods/menugoods/cat3.png"),
              goodsoptionid:
                "goods_002_goodsselltype_01_01_goodsselltype_02_01_goodsselltype_03_03",
              goodsoption: "无奶油/冰/大/微糖",
              goodspiece: 1
            }
          ],
          order_createtime: "2022-03-09 14:10",
          order_paytime: "2022-03-09 14:10",
          order_goodscount: 1,
          order_goodsprice: 12,
          order_type: "门店订单"
        },
        {
          order_id: "order20220924203601000001",
          order_shoptype: "自提",
          order_shop: "喵喵咖啡旗舰店(NO.0001)",
          order_state: "已完成",
          order_goods: [
            {
              goodsid: "goods_001",
              goodsname: "生椰拿铁",
              goodspic: require("assets/img/goods/menugoods/cat1.png"),
              goodsoptionid:
                "goods_001_goodsselltype_01_01_goodsselltype_02_01_goodsselltype_03_03",
              goodsoption: "无奶油/冰/大/微糖",
              goodspiece: 2
            }
          ],
          order_createtime: "2022-09-24 20:36",
          order_paytime: "2022-09-24 20:36",
          order_goodscount: 2,
          order_goodsprice: 34,
          order_type: "门店订单"
        },
        {
          order_id: "order20220924203901000001",
          order_shoptype: "自提",
          order_shop: "喵喵咖啡未来体验店(NO.0002)",
          order_state: "已完成",
          order_goods: [
            {
              goodsid: "goods_001",
              goodsname: "生椰拿铁",
              goodspic: require("assets/img/goods/menugoods/cat1.png"),
              goodsoptionid:
                "goods_001_goodsselltype_01_01_goodsselltype_02_01_goodsselltype_03_03",
              goodsoption: "无奶油/冰/大/微糖",
              goodspiece: 1
            },
            {
              goodsid: "goods_002",
              goodsname: "椰云拿铁",
              goodspic: require("assets/img/goods/menugoods/cat2.png"),
              goodsoptionid:
                "goods_002_goodsselltype_01_01_goodsselltype_02_01_goodsselltype_03_01",
              goodsoption: "无奶油/冰/大/微糖",
              goodspiece: 1
            }
          ],
          order_createtime: "2022-09-24 20:36",
          order_paytime: "2022-09-24 20:36",
          order_goodscount: 2,
          order_goodsprice: 34,
          order_type: "门店订单"
        },
        {
          order_id: "order20220924204101000001",
          order_shoptype: "外送",
          order_shop: "喵喵咖啡旗舰店(NO.0001)",
          order_state: "已完成",
          order_goods: [
            {
              goodsid: "goods_001",
              goodsname: "生椰拿铁",
              goodspic: require("assets/img/goods/menugoods/cat1.png"),
              goodsoptionid:
                "goods_001_goodsselltype_01_01_goodsselltype_02_01_goodsselltype_03_03",
              goodsoption: "无奶油/冰/大/微糖",
              goodspiece: 1
            }
          ],
          order_createtime: "2022-09-24 20:41",
          order_paytime: "2022-09-24 20:41",
          order_goodscount: 1,
          order_goodsprice: 17,
          order_type: "门店订单"
        }
      ]
    }
  },
  mounted() {
    this.$refs.orderListScrollRef.scroll &&
      this.$refs.orderListScrollRef.scrollRefresh()
  },
  methods: {
    tab_control_capsule_tab_click(e) {
      console.log(e)
    }
  },
  components: {
    TabControlCapsule,
    Scroll,
    OrderList,
    OrderItem
  }
}
</script>

<style scoped>
.order {
  width: 100%;
}
.order-container {
  width: 100%;
}

.order-title {
  width: 100%;
  font-size: 18px;
  color: #000;
  background-color: var(--base-theme-bg-color);
  padding: 10px;
  position: relative;
  z-index: 1;
}
.order-control {
  background-color: var(--base-theme-bg-color);
  padding: 0 10px 10px 0;
  position: relative;
  z-index: 1;
}
.order-content {
  background-color: var(--base-theme-bg-color);
  padding: 0 5px;
  overflow: hidden;
  position: relative;
}
#orderListScroll {
  height: calc(100vh - 159px);
}
</style>
