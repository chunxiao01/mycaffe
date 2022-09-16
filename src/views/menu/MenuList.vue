<template>
  <div class="menu-list">
    <div class="menu-list-type">
      <scroll scrollWrapperName="menutypeScroll" class="menutypeScroll">
        <menu-group :menugroupdata="menutypedatas"></menu-group>
      </scroll>
    </div>
    <div class="menu-list-content">11</div>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll.vue"
import MenuGroup from "@/components/content/menus/MenuGroup.vue"

export default {
  name: "MenuList",
  data() {
    return {
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
      ]
    }
  },
  components: {
    Scroll,
    MenuGroup
  }
}
</script>

<style scoped>
.menu-list {
  width: 100%;
  display: flex;
}
.menu-list-type {
  width: 120px;
}
.menu-list-content {
  flex: 1;
}

.menutypeScroll {
  height: 400px;
}
</style>
