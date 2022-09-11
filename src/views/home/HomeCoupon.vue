<template>
  <div class="home-coupon">
    <coupon :coupondata="homecoupondata"></coupon>
  </div>
</template>

<script>
import Coupon from "components/common/coupon/Coupon.vue"

export default {
  name: "HomeCoupon",
  props: {
    homecoupondata: {
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
  },
  components: {
    Coupon
  }
}
</script>

<style scoped>
.home-coupon {
  width: 100%;
}
</style>
