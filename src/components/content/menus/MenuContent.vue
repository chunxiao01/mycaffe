<template>
  <div class="menu-content">
    <goods-group
      v-for="item in menuContentData"
      :goodsGroupData="item"
      :key="item.goodsGroupId"
    ></goods-group>
  </div>
</template>

<script>
import GoodsGroup from "../goods/GoodsGroup.vue"
export default {
  name: "MenuContent",
  props: {
    menuContentData: {
      type: Array,
      default() {
        return [
          {
            goodsGroupId: null,
            goodsGroupName: null,
            goodsGroupDesc: null,
            goodsGroupTypeType: [
              {
                goodsGroupTypeTypeId: null,
                goodsGroupTypeTypeName: null,
                goodsGroupTypeTypeNumber: null
              }
            ],
            goodsGroupDetailData: [
              {
                goodsid: null,
                goodspic: null,
                goodsname: null,
                goodstips: null,
                goodsdesc: null,
                goodsdescfill: null,
                goodsprice_new: null,
                goodsprice_old: null,
                goodsSelected: false,
                goodspieces: null
              }
            ]
          }
        ]
      }
    }
  },
  components: {
    GoodsGroup
  }
}
</script>

<style scoped></style>
