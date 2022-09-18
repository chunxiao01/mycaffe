<template>
  <div class="goods-group">
    <div class="goods-group-container">
      <div class="goods-group-item">
        <div class="goods-group-item-type">
          <div class="goods-group-item-type-text">
            <div class="goods-group-item-type-name">
              {{ goodsGroupData.goodsGroupName }}
            </div>
            <div class="goods-group-item-type-desc">
              {{ goodsGroupData.goodsGroupDesc }}
            </div>
            <div
              class="goods-group-item-type-type"
              v-for="goodstypetype in goodsGroupData.goodsGroupTypeType"
              :key="goodstypetype.goodsGroupTypeTypeId"
            >
              <span
                class="goods-group-item-type-type-text"
                v-if="goodstypetype.goodsGroupTypeTypeNumber"
                >{{ goodstypetype.goodsGroupTypeTypeName }}({{
                  goodstypetype.goodsGroupTypeTypeNumber
                }})</span
              >
            </div>
          </div>
        </div>
        <goods-item
          v-for="(item, index) in goodsGroupData.goodsGroupDetailData"
          :key="item.goodsid"
          :goodsItemData="item"
        ></goods-item>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem.vue"
export default {
  name: "GoodsGroup",
  props: {
    goodsGroupData: {
      type: Object,
      default() {
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
      }
    }
  },
  components: {
    GoodsItem
  }
}
</script>

<style scoped>
.goods-group-item-type-text {
  width: 100%;
  margin: 10px;
}
.goods-group-item-type-name {
  font-size: 16px;
  font-weight: bolder;
  margin-bottom: 5px;
}
.goods-group-item-type-desc {
  font-size: 12px;
  color: #999;
}
</style>
