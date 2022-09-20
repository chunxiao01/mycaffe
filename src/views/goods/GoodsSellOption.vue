<template>
  <div class="goods-sell-option">
    <div
      class="goods-sell-option-types"
      v-for="(item, index) in goodsSellOptionData"
      :key="item.goodsselltypeId"
    >
      <div class="goods-sell-option-type-name">
        <span class="goods-sell-option-type-name-text">{{
          item.goodsselltypeName
        }}</span>
      </div>
      <div class="goods-sell-option-type-content">
        <div
          class="goods-sell-option-type-content-item"
          v-for="(sonitem, sonindex) in item.goodsselltypeDetails"
          :key="sonitem.goodsselltypeDetailId"
        >
          <span
            class="goods-sell-option-type-content-item-text"
            :class="{
              'goods-sell-option-type-content-item-text-selected':
                getCurrentOptionSelected(index, sonitem.goodsselltypeDetailId)
            }"
            @click="
              goodsSellOptionClick(
                index,
                sonitem.goodsselltypeDetailId,
                sonitem.goodsselltypeDetailName
              )
            "
            >{{ sonitem.goodsselltypeDetailName }}</span
          >
          <span
            class="goods-sell-option-type-content-item-text-mark"
            :class="{
              'goods-sell-option-type-content-item-text-mark-selected':
                sonitem.goodsselltypeDetailMark
            }"
            v-if="sonitem.goodsselltypeDetailMark"
            >{{ sonitem.goodsselltypeDetailMark }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsSellOption",
  props: {
    goodsSellOptionData: {
      type: Array,
      default() {
        return [
          {
            goodsselltypeId: null,
            goodsselltypeName: null,
            goodsselltypeDetails: [
              {
                goodsselltypeDetailId: null,
                goodsselltypeDetailName: null,
                goodsselltypeDetailMark: null,
                goodsselltypeDetailSelect: false
              }
            ]
          }
        ]
      }
    }
  },
  data() {
    return {
      currentOptionSelected: []
    }
  },
  created() {
    this.currentOptionSelected = []
    this.goodsSellOptionData.forEach((item) => {
      const currentIndex = item.goodsselltypeDetails.findIndex((item) => {
        return item.goodsselltypeDetailSelect
      })
      this.currentOptionSelected.push({
        goodsselltypeId: item.goodsselltypeId,
        goodsselltypeName: item.goodsselltypeName,
        goodsselltypeDetailSelectedId:
          item.goodsselltypeDetails[currentIndex].goodsselltypeDetailId,
        goodsselltypeDetailNameSelected:
          item.goodsselltypeDetails[currentIndex].goodsselltypeDetailName
      })
    })
  },
  methods: {
    goodsSellOptionClick(typeindex, optionid, optionname) {
      this.$set(this.currentOptionSelected, typeindex, {
        goodsselltypeId: this.goodsSellOptionData[typeindex].goodsselltypeId,
        goodsselltypeName:
          this.goodsSellOptionData[typeindex].goodsselltypeName,
        goodsselltypeDetailSelectedId: optionid,
        goodsselltypeDetailNameSelected: optionname
      })
    },
    getCurrentOptionSelected(typeindex, optionId) {
      const optionSelected =
        this.currentOptionSelected[typeindex].goodsselltypeDetailSelectedId ===
        optionId
      return optionSelected
    }
  }
}
</script>

<style scoped>
.goods-sell-option {
  width: 100%;
  background-color: #fff;
}
.goods-sell-option-types {
  width: 100%;
  padding: 10px 0;
  display: flex;
}
.goods-sell-option-type-name {
  width: 60px;
}
.goods-sell-option-type-name-text {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  font-size: 15px;
}
.goods-sell-option-type-content {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
}
.goods-sell-option-type-content-item {
  width: 33.33%;
  position: relative;
}
.goods-sell-option-type-content-item-text {
  display: inline-block;
  width: 80px;
  height: 30px;
  line-height: 30px;
  background-color: var(--base-theme-bg-color);
  font-size: 13px;
  color: #999;
  text-align: center;
  border-radius: 5px;
}

.goods-sell-option-type-content-item-text-selected {
  background-color: #eaedfe;
  color: var(--base-theme-color);
  border: 1px solid var(--base-theme-color);
}
.goods-sell-option-type-content-item-text-mark {
  position: absolute;
  display: block;
  height: 22px;
  line-height: 22px;
  top: -15px;
  right: 18px;
  background-color: #f95631;
  color: #f9ded5;
  font-size: 12px;
  border-radius: 10px 10px 10px 0;
  text-align: center;
  padding: 1px 5px;
}
.goods-sell-option-type-content-item-mark-selected {
  background-color: #ccc;
  color: #f1c4b8;
  border-color: #f1c4b8;
}
</style>
