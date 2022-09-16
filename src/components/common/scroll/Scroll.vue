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
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs[this.scrollWrapperName])
  }
}
</script>

<style lang="scss" scoped></style>
