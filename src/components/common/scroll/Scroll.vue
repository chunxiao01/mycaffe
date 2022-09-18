<template>
  <div class="scroll-wrapper" :ref="scrollWrapperName">
    <div class="scroll-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core"
// import observeDOM from "@better-scroll/observe-dom"

// BScroll.use(observeDOM)

export default {
  name: "Scroll",
  props: {
    scrollWrapperName: {
      type: String,
      default: "scrollWrapper"
    },
    probeType: {
      type: Number,
      default: 3
    },
    isScrollClick: {
      type: Boolean,
      default: true
    },
    observeDOM: {
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
    //better-scroll初始化
    this.scroll = new BScroll(this.$refs[this.scrollWrapperName], {
      probeType: this.probeType, // 0,1,2:手指滚动就滚动,3:手指滚动和手指离开惯性滚动
      click: this.isScrollClick // 容器内元素是否可以点击
      //observeDOM: this.observeDom // 开启 observe-dom 插件，监听容器高度变化
    })

    //better-scroll滚动事件
    this.scroll.on("scroll", (position) => {
      this.$emit("scrollPosition", position)
    })
  },
  methods: {
    scrollRefresh() {
      this.scroll.refresh()
    }
  }
}
</script>

<style scoped></style>
