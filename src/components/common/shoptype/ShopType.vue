<template>
  <div class="shop-type">
    <div class="shop-type-content" @click="shoptypebSelect">
      <span
        class="shop-type-byyourself"
        :class="{ 'shop-type-seleced': !shoptypebyselected }"
        >自提</span
      >
      <span
        class="shop-type-byshop"
        :class="{ 'shop-type-seleced': shoptypebyselected }"
        >外送</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopType",
  data() {
    return {
      shoptypebyselected: this.shoptypedata
    }
  },
  methods: {
    shoptypebSelect() {
      this.shoptypebyselected = !this.shoptypebyselected
      let shoptypedata = "yourself"
      if (this.shoptypebyselected) {
        shoptypedata = "shop"
      }
      this.$emit("shoptypebSelect", shoptypedata)
    }
  }
}
</script>

<style scoped>
.shop-type {
  width: 100%;
}
.shop-type-content {
  width: 100%;
  background-color: var(--base-theme-bg-color);
  border-radius: 20px;
  display: flex;
  margin-top: 7.5px;
}
.shop-type-byyourself {
  flex: 1;
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 20px;
  background-color: var(--base-theme-bg-color);
  color: #999;
  font-size: 14px;
}

.shop-type-byshop {
  flex: 1;
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 20px;
  background-color: var(--base-theme-bg-color);
  color: #999;
  font-size: 14px;
}
.shop-type-seleced {
  background-color: var(--base-theme-color);
  color: #fff;
}
</style>
