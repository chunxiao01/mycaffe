<template>
  <div class="free-card-price">
    <div class="free-card-price-container">
      <div class="free-card-price-item">
        <div
          class="free-card-price-item-content free-card-price-item-content-special"
        >
          <div class="free-card-price-item-mark">卡费优惠</div>
          <div class="free-card-price-item-title">30天(连续包月)</div>
          <div class="free-card-price-item-price">
            <div class="free-card-price-item-price-new">
              <span class="free-card-price-item-price-new-unit">￥</span>
              <span class="free-card-price-item-price-new-number">9.90</span>
            </div>
            <div class="free-card-price-item-price-old">
              <span class="free-card-price-item-price-old-unit">￥</span>
              <span class="free-card-price-item-price-old-number">19.90</span>
            </div>
          </div>
          <div class="free-card-price-item-tips">省心自动续费</div>
        </div>
      </div>
      <div class="free-card-price-item">
        <div class="free-card-price-item-content">
          <div class="free-card-price-item-mark"></div>
          <div class="free-card-price-item-title">30天</div>
          <div class="free-card-price-item-price">
            <div class="free-card-price-item-price-new">
              <span class="free-card-price-item-price-new-unit">￥</span>
              <span class="free-card-price-item-price-new-number">15.90</span>
            </div>
            <div class="free-card-price-item-price-old">
              <span class="free-card-price-item-price-old-unit">￥</span>
              <span class="free-card-price-item-price-old-number">19.90</span>
            </div>
          </div>
          <div class="free-card-price-item-tips">
            最高可省 <span class="free-card-price-item-tips-mark">673元</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FreeCardPrice"
}
</script>

<style scoped>
.free-card-price {
  width: 100%;
}
.free-card-price-container {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
}
.free-card-price-item {
  width: 50%;
  padding: 5px 10px;
}
.free-card-price-item-content {
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  border: 2px solid #f6f6f6;
}
.free-card-price-item-title {
  width: 100%;
  padding: 10px 0 0 0;
  height: 40px;
  line-height: 30px;
  font-size: 18px;
  font-weight: bold;
  color: #282828;
  text-align: center;
}
.free-card-price-item-price {
  width: 100%;
  padding: 5px 0;
}
.free-card-price-item-price-new {
  width: 100%;
  text-align: center;
}
.free-card-price-item-price-new-unit {
  font-size: 16px;
  color: #646464;
}
.free-card-price-item-price-new-number {
  font-size: 25px;
  font-weight: bolder;
  color: #646464;
}
.free-card-price-item-price-old {
  width: 100%;
  height: 24px;
  line-height: 24px;
  text-align: center;
  text-decoration: line-through;
  text-decoration-color: #898989;
}
.free-card-price-item-price-old-unit {
  font-size: 18px;
  color: #d9d9d9;
}
.free-card-price-item-price-old-number {
  font-size: 16px;
  font-weight: bolder;
  color: #d9d9d9;
}
.free-card-price-item-tips {
  width: 100%;
  text-align: center;
  background-color: #ecd6b2;
  font-size: 15px;
  font-weight: bold;
  color: #6e4c11;
  padding: 5px 0;
}
.free-card-price-item-tips-mark {
  color: #e25c32;
}
.free-card-price-item-content-special {
  position: relative;
  background-color: #fbf5e9;
  border: 2px solid #dbb377;
}
.free-card-price-item-mark {
  position: absolute;
  left: -2px;
  top: -2px;
  background-color: #f95630;
  font-size: 12px;
  padding: 2px;
  color: #f7ece3;
  border-radius: 8px 0 0 0;
}
.free-card-price-item-content-special .free-card-price-item-title {
  color: #6a4006;
}
.free-card-price-item-content-special .free-card-price-item-price-new-unit,
.free-card-price-item-content-special .free-card-price-item-price-new-number {
  color: #6a4006;
}

.free-card-price-item-content-special .free-card-price-item-price-old-unit,
.free-card-price-item-content-special .free-card-price-item-price-old-number {
  color: #c1a179;
}
</style>
