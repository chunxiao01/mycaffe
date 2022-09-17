<template>
  <div class="scroll-wrapper" :ref="scrollWrapperName">
    <div class="scroll-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core"

export default {
  name: "Scroll",
  props: {
    scrollWrapperName: {
      type: String,
      default: "scrollWrapper"
    },
    isScrollClick: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs[this.scrollWrapperName], {
      click: this.isScrollClick // 容器内元素是否可以点击
    })
  }
}
</script>

<style lang="scss" scoped></style>
