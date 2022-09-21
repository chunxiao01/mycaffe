<template>
  <div class="toast" v-if="isShowToast">
    <div class="toast-container">
      <span class="toast-text">{{ msg }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      msg: null,
      isShowToast: false
    }
  },
  methods: {
    show(msg, timer = 1500) {
      this.msg = msg
      this.isShowToast = true
      setTimeout(() => {
        this.isShowToast = false
        this.msg = null
      }, timer)
    },
    showCallBack(msg, timer = 1500) {
      this.msg = msg
      this.isShowToast = true
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.isShowToast = false
          this.msg = null
          resolve()
        }, timer)
      })
    }
  }
}
</script>

<style scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.toast-container {
  width: 200px;
  padding: 5px;
}
.toast-text {
  display: block;
  background-color: rgba(0, 0, 0, 0.6);
  height: 50px;
  line-height: 50px;
  color: #fff;
  font-size: 16px;
  text-align: center;
  border-radius: 8px;
}
</style>
