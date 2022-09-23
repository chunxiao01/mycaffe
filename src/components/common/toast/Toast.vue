<template>
  <div class="toast" v-if="isShowToast">
    <div class="toast-container" v-if="isShowToastBasic">
      <span class="toast-text">{{ basicmsg }}</span>
    </div>
    <div class="toast-confirm-container" v-if="isShowToastConfirm">
      <div class="toast-confirm-title">{{ confirmmsg }}</div>
      <div class="toast-confirm-btn">
        <div class="toast-confirm-btn-cancel" @click="canceloastConfirm">
          取消
        </div>
        <div class="toast-confirm-btn-ok" @click="okToastConfirm">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      basicmsg: null,
      confirmmsg: null,
      isShowToast: false,
      isShowToastBasic: false,
      isShowToastConfirm: false,
      isOkConfirm: false
    }
  },
  methods: {
    show(msg, timer = 1500) {
      this.basicmsg = msg
      this.isShowToast = true
      this.isShowToastBasic = true
      setTimeout(() => {
        this.isShowToast = false
        this.isShowToastBasic = false
        this.basicmsg = null
      }, timer)
    },
    showCallBack(msg, timer = 1500) {
      this.basicmsg = msg
      this.isShowToast = true
      this.isShowToastBasic = true
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.isShowToast = false
          this.isShowToastBasic = false
          this.basicmsg = null
          resolve()
        }, timer)
      })
    },
    showConfirm(msg) {
      this.confirmmsg = msg
      this.isShowToast = true
      this.isShowToastConfirm = true
      if (this.isOkConfirm) {
        return new Promise((resolve, reject) => {
          this.isShowToast = false
          this.isShowToastConfirm = false
          resolve()
        })
      } else {
        this.isShowToast = false
        this.isShowToastConfirm = false
        this.confirmmsg = null
        return new Promise((resolve, reject) => {
          this.isShowToast = false
          this.isShowToastConfirm = false
          resolve()
        })
      }
    },
    okToastConfirm() {
      // this.isShowToast = false
      // this.isShowToastConfirm = false
      // this.confirmmsg = null
      this.isOkConfirm = false
    },
    canceloastConfirm() {
      // return new Promise((resolve, reject) => {
      //   this.isShowToast = false
      //   this.isShowToastConfirm = false
      //   resolve()
      // })
      this.isOkConfirm = true
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
  z-index: 9999;
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
.toast-confirm-container {
  width: 200px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #333;
}
.toast-confirm-title {
  width: 100%;
  height: 36px;
  line-height: 36px;
  font-size: 18px;
  color: #000;
  text-align: center;
  border-bottom: 1px solid #ccc;
}
.toast-confirm-btn {
  width: 100%;
  display: flex;
}
.toast-confirm-btn-cancel {
  flex: 1;
  height: 36px;
  line-height: 36px;
  font-size: 18px;
  color: #000;
  text-align: center;
  border-right: 1px solid #ccc;
}
.toast-confirm-btn-ok {
  flex: 1;
  height: 36px;
  line-height: 36px;
  font-size: 18px;
  color: var(--base-theme-color);
  text-align: center;
}
</style>
