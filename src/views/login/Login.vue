<template>
  <div class="login">
    <div class="login-container">
      <div class="login-title" @click="goBackClick">
        <span class="login-title-text">＜ 账户登录</span>
      </div>
      <div class="login-content">
        <div class="login-content-img">
          <img src="~assets/img/common/bg/login-bg1.png" alt="" />
        </div>
        <div class="login-type">
          <div class="login-type-container">
            <span class="login-type-container-text login-type-telephone"
              >手机号安全登录</span
            >
            <span class="login-type-container-mark" v-show="isCurrentSelected"
              >最近使用</span
            >
          </div>
        </div>
        <div class="login-type">
          <div class="login-type-container">
            <span class="login-type-container-text login-type-wechat"
              >喵信一键登录</span
            >
            <span class="login-type-container-mark" v-show="!isCurrentSelected"
              >最近使用</span
            >
          </div>
        </div>
      </div>
      <div class="login-license">
        <div class="login-license-radiobutton" @click="agreeLoginLicense">
          <img
            src="~assets/img/common/icons/radiobutton_off.svg"
            alt=""
            v-if="!isAgreeLoginLicense"
          />
          <img
            src="~assets/img/common/icons/radiobutton_on.svg"
            alt=""
            v-else
          />
          <span class="login-license-agree">我已阅读并同意</span>
        </div>
        <div class="login-license-info">
          <span class="login-license-text"
            >《喵喵咖啡用户协议》、《隐私协议》</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      isCurrentSelected: true,
      isAgreeLoginLicense: false
    }
  },
  methods: {
    agreeLoginLicense() {
      this.isAgreeLoginLicense = !this.isAgreeLoginLicense
    },
    goBackClick() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.login {
  width: 100%;
}
.login-container {
  width: 100%;
  padding: 10px;
}
.login-title {
  width: 100%;
  margin-bottom: 20px;
}
.login-title-text {
  font-size: 18px;
  color: #000;
}

.login-content {
  width: 100%;
  padding: 10px 10px 20px 10px;
  background-color: #fff;
  border-radius: 8px;
}
.login-content-img {
  width: 100%;
  margin-bottom: 10px;
}
.login-content-img img {
  width: 100%;
}

.login-type {
  width: 100%;
}
.login-type-container {
  width: 100%;
  padding: 15px;
  position: relative;
}
.login-type-container-text {
  display: block;
  height: 45px;
  line-height: 45px;
  font-size: 16px;
  color: #fff;
  text-align: center;
  border-radius: 20px;
}

.login-type-telephone {
  background-color: var(--base-theme-color);
}

.login-type-wechat {
  background-color: #06c05f;
}
.login-type-container-mark {
  display: inline-block;
  padding: 5px;
  border-radius: 20px 20px 20px 0;
  font-size: 14px;
  color: #fff;
  background-color: #f85631;
  position: absolute;
  top: 0;
  right: 0;
}

.login-license {
  width: 100%;
  padding: 10px;
  position: fixed;
  left: 0;
  bottom: 20px;
  display: flex;
}
.login-license-radiobutton {
  display: flex;
}
.login-license-radiobutton img {
  width: 16px;
  margin: auto;
}
.login-license-agree {
  font-size: 12px;
  color: #999;
  flex: 1;
  display: inline-block;
  height: 16px;
  line-height: 16px;
  margin-left: 3px;
  margin-top: 1px;
}
.login-license-info {
  flex: 1;
}
.login-license-text {
  display: inline-block;
  height: 16px;
  line-height: 16px;
  font-size: 12px;
  color: var(--base-theme-color);
}
</style>
