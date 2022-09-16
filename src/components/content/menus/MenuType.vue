<template>
  <div class="menu-type">
    <span
      class="menu-type-text"
      :class="{ 'menu-type-text-selected': isMenuTypeSelected }"
      >{{ menutypedata.menutypename }}</span
    >
    <span class="menu-type-select-mark" v-show="isMenuTypeSelected"></span>
    <span class="menu-type-key" v-if="menutypedata.menutypekey">{{
      menutypedata.menutypename
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
  width: 120px;
  height: 70px;
  line-height: 70px;
  position: relative;
  margin: 5px 0;
}
.menu-type-text {
  display: inline-block;
  width: 120px;
  height: 45px;
  line-height: 45px;
  font-size: 15px;
  padding-left: 15px;
}
.menu-type-text-selected {
  background-color: #e6e6e6;
  font-weight: bolder;
  border-radius: 0 20px 20px 0;
}
.menu-type-select-mark {
  position: absolute;
  left: 0;
  top: 30px;
  width: 10px;
  height: 10px;
  border-radius: 0 50% 50% 0;
  background-color: var(--base-theme-color);
}
.menu-type-key {
  position: absolute;
  left: 60px;
  top: 5px;
  width: 60px;
  height: 20px;
  line-height: 20px;
  border-radius: 20px 20px 20px 0;
  background-color: #c1a179;
  font-size: 12px;
  color: #fff;
  text-align: center;
}
</style>
