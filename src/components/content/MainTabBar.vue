<template>
  <div class="maintabbar">
    <tab-bar>
      <tab-bar-item path="/home">
        <template v-slot:tabbaritem_icon>
          <img src="~assets/img/tabbar/home.svg" />
        </template>
        <template v-slot:tabbaritem_icon_active>
          <img src="~assets/img/tabbar/home_active.svg" />
        </template>
        <template v-slot:tabbaritem_text>首页</template>
      </tab-bar-item>
      <tab-bar-item path="/menu">
        <template v-slot:tabbaritem_icon>
          <img src="~assets/img/tabbar/menu.svg" />
        </template>
        <template v-slot:tabbaritem_icon_active>
          <img src="~assets/img/tabbar/menu_active.svg" />
        </template>
        <template v-slot:tabbaritem_text>菜单</template>
      </tab-bar-item>
      <tab-bar-item path="/freecard">
        <template v-slot:tabbaritem_icon>
          <img src="~assets/img/tabbar/freecard.svg" />
        </template>
        <template v-slot:tabbaritem_icon_active>
          <img src="~assets/img/tabbar/freecard_active.svg" />
        </template>
        <template v-slot:tabbaritem_text>自由卡</template>
      </tab-bar-item>
      <tab-bar-item path="/order">
        <template v-slot:tabbaritem_icon>
          <img src="~assets/img/tabbar/order.svg" />
        </template>
        <template v-slot:tabbaritem_icon_active>
          <img src="~assets/img/tabbar/order_active.svg" />
        </template>
        <template v-slot:tabbaritem_text>订单</template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template v-slot:tabbaritem_icon>
          <img src="~assets/img/tabbar/profile.svg" />
        </template>
        <template v-slot:tabbaritem_icon_active>
          <img src="~assets/img/tabbar/profile_active.svg" />
        </template>
        <template v-slot:tabbaritem_text>我的</template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar"
import TabBarItem from "components/common/tabbar/TabBarItem"

export default {
  name: "MainTabBar",
  data() {
    return {
      // tabbaritem_text_style1: {
      //   color: "#f0f"
      // }
    }
  },
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
.maintabbar {
  width: 100%;
  height: 52px;
  background: #f6f6f6;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 100;
}
</style>
