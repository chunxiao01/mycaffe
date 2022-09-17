<template>
  <div class="menu-group">
    <menu-type
      v-for="(item, index) in menugroupdata"
      :menutypedata="item"
      :key="item.menutypeid"
      :isMenuTypeSelected="menuTypeSelected(index)"
      @click.native="menuTypeClick(item.menutypeid, index)"
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
    }
  },
  data() {
    return {
      currentMenuTypeIndex: 0
    }
  },
  methods: {
    menuTypeClick(id, index) {
      console.log(id)
      this.currentMenuTypeIndex = index
    },
    menuTypeSelected(index) {
      return this.currentMenuTypeIndex === index
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
