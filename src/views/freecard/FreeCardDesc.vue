<template>
  <div class="free-card-desc">
    <div class="free-card-desc-container">
      <div class="free-card-desc-item">
        <div class="free-card-desc-item-icon">
          <img src="~assets/img/common/icons/duihuan.svg" alt="" />
        </div>
        <div class="free-card-desc-item-text">兑换优惠</div>
        <div class="free-card-desc-item-fold">＞</div>
      </div>
      <div class="free-card-desc-item">
        <div class="free-card-desc-item-icon">
          <img src="~assets/img/common/icons/guize.svg" alt="" />
        </div>
        <div class="free-card-desc-item-text">使用规则</div>
        <div class="free-card-desc-item-fold">＞</div>
      </div>
      <div class="free-card-desc-item">
        <div class="free-card-desc-item-icon">
          <img src="~assets/img/common/icons/wenti.svg" alt="" />
        </div>
        <div class="free-card-desc-item-text">常见问题</div>
        <div class="free-card-desc-item-fold">＞</div>
      </div>
      <div class="free-card-desc-item">
        <div class="free-card-desc-item-icon">
          <img src="~assets/img/common/icons/jilu.svg" alt="" />
        </div>
        <div class="free-card-desc-item-text">购买记录</div>
        <div class="free-card-desc-item-fold">＞</div>
      </div>
      <div class="free-card-desc-item">
        <div class="free-card-desc-item-icon">
          <img src="~assets/img/common/icons/xufei.svg" alt="" />
        </div>
        <div class="free-card-desc-item-text">自动续费管理</div>
        <div class="free-card-desc-item-fold">＞</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FreeCardDesc"
}
</script>

<style scoped>
.free-card-desc {
  width: 100%;
  padding: 0 10px 10px 10px;
}
.free-card-desc-container {
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
}
.free-card-desc-item {
  width: 100%;
  display: flex;
  padding: 10px;
}
.free-card-desc-item-icon {
  width: 60px;
  padding: 5px;
  display: flex;
}
.free-card-desc-item-icon img {
  width: 30px;
  margin: auto;
}
.free-card-desc-item-text {
  flex: 1;
  height: 32px;
  line-height: 32px;
  font-size: 16px;
  font-weight: bold;
  color: #656565;
}
.free-card-desc-item-fold {
  width: 30px;
  text-align: right;
  height: 32px;
  line-height: 32px;
  font-size: 16px;
  font-weight: bold;
  color: #000;
}
</style>
