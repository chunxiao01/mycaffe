<template>
  <div class="coupon">
    <div class="coupon-number">
      <span class="coupon-number-text">
        {{ coupondata.text }}
      </span>
      <span class="coupon-number-text-unit">
        {{ coupondata.text_unit }}
      </span>
    </div>
    <div class="coupon-text">
      <div class="coupon-text-detail">
        {{ coupondata.text_info.text_info_valid }}
      </div>
      <div class="coupon-text-detail-valid">
        {{ coupondata.text_info.text_info_valid_tip
        }}{{ coupondata.text_info.text_info_valid_date }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Coupon",
  props: {
    coupondata: {
      type: Object,
      default() {
        return {
          text: null,
          text_unit: null,
          text_info: {
            text_info_valid: null,
            text_info_valid_tip: null,
            text_info_valid_date: null
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.coupon {
  display: flex;
  width: 100%;
  mask: radial-gradient(circle at 130px 10px, #0000 5px, #ee3c3c 0) -10px -10px;
  background-color: #fcede8;
  border-radius: 8px;
  border: 1px solid #ee3c3c;
}
.coupon-number {
  width: 120px;
  text-align: center;
  border-right: 1px dashed #ee3c3c;
}
.coupon-number-text {
  display: inline-block;
  font-size: 28px;
  font-weight: bolder;
  color: #ee3c3c;
  margin: 10px 0 10px 10px;
}
.coupon-number-text-unit {
  text-align: left;
  font-size: 12px;
  color: #ee3c3c;
}

.coupon-text {
  flex: 1;
}
.coupon-text-detail {
  font-size: 14px;
  font-weight: bolder;
  color: #ee3c3c;
  margin: 10px 0 5px 10px;
}
.coupon-text-detail-valid {
  font-size: 12px;
  color: #ee3c3c;
  margin: 0 0 10px 10px;
}
</style>
