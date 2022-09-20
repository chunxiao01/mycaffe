<template>
  <div class="goods-item" @click="goodsItemSellClick">
    <div class="goods-item-img">
      <img v-lazy="goodsItemData.goodspic" alt="" />
    </div>
    <div class="goods-item-info">
      <div class="goods-item-info-name">
        <span class="goods-item-info-name-text">{{
          goodsItemData.goodsname
        }}</span>
        <span
          class="goods-item-info-name-tips"
          v-if="goodsItemData.goodstips"
          >{{ goodsItemData.goodstips }}</span
        >
      </div>
      <div class="goods-item-info-desc">
        <span class="goods-item-info-desc-text">{{
          goodsItemData.goodsdesc
        }}</span>
        <span class="goods-item-info-desc-fill">{{
          goodsItemData.goodsdescfill
        }}</span>
      </div>
      <div class="goods-item-info-action">
        <div class="goods-item-info-price">
          <span
            class="goods-item-info-price-new"
            v-if="goodsItemData.goodsprice_new"
            >￥{{ goodsItemData.goodsprice_new }}</span
          >
          <span
            class="goods-item-info-price-old"
            v-if="goodsItemData.goodsprice_old"
            >￥{{ goodsItemData.goodsprice_old }}</span
          >
        </div>
        <div class="goods-item-info-action-add">
          <span class="goods-item-info-action-add-icon">＋</span>
          <span
            class="goods-item-info-action-add-icon-mark"
            v-if="goodsItemData.goodsSelected"
            >{{ goodsItemData.goodspieces }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    goodsItemData: {
      type: Object,
      default() {
        return {
          goodsid: null,
          goodspic: null,
          goodsname: null,
          goodstips: null,
          goodsdesc: null,
          goodsdescfill: null,
          goodsprice_new: null,
          goodsprice_old: null,
          goodsSelected: false,
          goodspieces: null,
          goodssellinfo: {
            goodssellpic: null,
            goodsinfopic: null,
            goodsselltype: {
              goodsboxsize: null,
              goodstemp: null,
              goodssugar: null,
              goodscream: null,
              goodmilk: null,
              goodoptions1: null,
              goodoptions2: null,
              goodoptions3: null
            }
          }
        }
      }
    }
  },
  methods: {
    goodsItemSellClick() {
      if (this.goodsItemData.goodsid) {
        this.$router
          .push({
            name: "GoodsSellCard",
            params: this.goodsItemData
          })
          .catch((err) => false)
      }
    }
  }
}
</script>

<style scoped>
.goods-item {
  width: 100%;
  padding: 10px 5px;
  display: flex;
  min-height: 50px;
}
.goods-item-img {
  width: 50px;
}
.goods-item-img img {
  width: 50px;
}

.goods-item-info {
  flex: 1;
  padding: 0 5px;
}
.goods-item-info-name {
  margin-bottom: 5px;
}
.goods-item-info-name-text {
  display: inline-block;
  height: 24px;
  line-height: 24px;
  font-size: 16px;
}
.goods-item-info-name-tips {
  display: inline-block;
  height: 14px;
  line-height: 14px;
  border-radius: 7px 0 7px 0;
  background-color: #f8532b;
  font-size: 10px;
  color: #fff;
  text-align: center;
  margin: 0 0 0 5px;
}
.goods-item-info-desc {
  margin-bottom: 2px;
}
.goods-item-info-desc-text,
.goods-item-info-desc-fill {
  display: block;
  font-size: 10px;
  color: #999;
  margin-bottom: 2px;
}

.goods-item-info-action {
  display: flex;
  padding-top: 5px;
}
.goods-item-info-price {
  flex: 1;
}
.goods-item-info-price-new {
  font-size: 16px;
  font-weight: bolder;
  color: #f04e2a;
  height: 20px;
  line-height: 20px;
}
.goods-item-info-price-old {
  font-size: 12px;
  color: #a1a5a9;
  text-decoration: line-through;
  margin-left: 5px;
  height: 20px;
  line-height: 20px;
}
.goods-item-info-action-add {
  width: 100px;
  text-align: right;
  position: relative;
}
.goods-item-info-action-add-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 50%;
  background-color: var(--base-theme-color);
  text-align: center;
  color: #fff;
  font-size: 20px;
  margin-right: 5px;
}
.goods-item-info-action-add-icon-mark {
  display: block;
  position: absolute;
  top: -12px;
  right: -5px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 50%;
  border: 1px solid #fff;
  background-color: #c1a179;
  text-align: center;
  color: #fff;
  font-size: 12px;
}
</style>
