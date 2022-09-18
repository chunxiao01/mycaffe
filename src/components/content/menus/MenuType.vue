<template>
  <div class="menu-type">
    <span
      class="menu-type-text"
      :class="{ 'menu-type-text-selected': isMenuTypeSelected }"
      >{{ menutypedata.menutypename }}</span
    >
    <span class="menu-type-select-mark" v-show="isMenuTypeSelected"></span>
    <span class="menu-type-key" v-if="menutypedata.menutypekey">{{
      menutypedata.menutypekeyname
    }}</span>
  </div>
</template>

<script>
export default {
  name: "MenuType",
  props: {
    menutypedata: {
      type: Object,
      default() {
        return {
          menutypeid: null,
          menutypename: null,
          menutypekey: false,
          menutypekeyname: null
        }
      }
    },
    isMenuTypeSelected: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.menu-type {
  width: 100px;
  height: 60px;
  line-height: 60px;
  position: relative;
}
.menu-type-text {
  display: inline-block;
  width: 100px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  padding-left: 15px;
}
.menu-type-text-selected {
  background-color: #d9d9d9;
  font-weight: bolder;
  border-radius: 0 20px 20px 0;
}
.menu-type-select-mark {
  position: absolute;
  left: 0;
  top: 24px;
  width: 8px;
  height: 10px;
  border-radius: 0 50% 50% 0;
  background-color: var(--base-theme-color);
}
.menu-type-key {
  position: absolute;
  left: 45px;
  top: 0px;
  width: 55px;
  height: 20px;
  line-height: 20px;
  border-radius: 20px 20px 20px 0;
  background-color: #c1a179;
  font-size: 12px;
  color: #fff;
  text-align: center;
}
</style>
