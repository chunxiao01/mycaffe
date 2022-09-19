<template>
  <div class="menu-group">
    <menu-type
      v-for="(item, index) in menugroupdata"
      :menutypedata="item"
      :key="item.menutypeid"
      :isMenuTypeSelected="menuTypeSelected(index)"
      @click.native="menuTypeClick(item.menutypeid, index, $event)"
    ></menu-type>
  </div>
</template>

<script>
import MenuType from "./MenuType.vue"

export default {
  name: "MenuGroup",
  props: {
    menugroupdata: {
      type: Array,
      default() {
        return [
          {
            menutypeid: null,
            menutypename: null,
            menutypekey: false,
            menutypekeyname: null
          }
        ]
      }
    },
    menuGroupSelectedData: {
      type: Object,
      default() {
        return {
          currentMenuTypeIndex: 0,
          currentMenuTypeId: null
        }
      }
    }
  },
  methods: {
    menuTypeClick(id, index, e) {
      this.menuGroupSelectedData.currentMenuTypeIndex = index
      this.menuGroupSelectedData.currentMenuTypeId = id
      this.$emit("menuTypeSelect", index, id, e)
    },
    menuTypeSelected(index) {
      return this.menuGroupSelectedData.currentMenuTypeIndex === index
    }
  },
  components: { MenuType }
}
</script>

<style scoped>
.menu-group {
  width: 100%;
}
.menu-group-item {
  width: 100%;
}
</style>
