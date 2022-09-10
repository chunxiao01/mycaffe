<template>
  <div class="tabbaritem" @click="tabbaritemClick">
    <div v-if="!tabbaritem_isActive" class="tabbaritem-icon">
      <slot name="tabbaritem_icon"></slot>
    </div>
    <div v-else class="tabbaritem-icon">
      <slot name="tabbaritem_icon_active"></slot>
    </div>
    <div class="tabbaritem-text" :style="tabbaritem_textStyle">
      <slot name="tabbaritem_text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    tabbaritem_text_style: {
      type: Object,
      default() {
        return {
          color: "#aaa"
        }
      }
    },
    tabbaritem_active_text_style: {
      type: Object,
      default() {
        return {
          color: "#222"
        }
      }
    },
    path: String
  },
  computed: {
    tabbaritem_textStyle() {
      return this.tabbaritem_isActive
        ? this.tabbaritem_active_text_style
        : this.tabbaritem_text_style
    },
    tabbaritem_isActive() {
      return this.$route.path.indexOf(this.path) > -1
    }
  },
  methods: {
    tabbaritemClick() {
      this.$router.replace(this.path).catch((err) => false)
    }
  }
}
</script>

<style scoped>
.tabbaritem {
  flex: 1;
  text-align: center;
}
.tabbaritem-icon img {
  width: 24px;
}
</style>
