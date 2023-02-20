<template>
  <div class="profile">
    <div class="profile-container">
      <div class="profile-user">
        <span class="profile-user-avatar">
          <img src="~assets/img/goods/simplegoods/goods-cat1.webp" alt="" />
        </span>
        <span class="profile-user-login" v-if="!isLogin">登录/注册 ＞</span>
        <span class="profile-user-name" v-else></span>
      </div>
      <div class="profile-user-info">
        <div class="profile-user-welcome">欢迎~喵喵新朋友</div>
        <div class="profile-user-point">
          <span class="profile-user-point-text">LV1</span>
          <span class="profile-user-point-tips">去喝一杯 ＞</span>
        </div>
      </div>
      <div class="profile-content">
        <div class="profile-content-item">
          <div class="profile-content-item-img">
            <img src="~assets/img/goods/simplegoods/goods-cat2.webp" alt="" />
          </div>
          <div class="profile-content-item-text">我的订单</div>
        </div>
        <div class="profile-content-item">
          <div class="profile-content-item-img">
            <img src="~assets/img/goods/simplegoods/goods-cat3.webp" alt="" />
          </div>
          <div class="profile-content-item-text">咖啡钱包</div>
        </div>
        <div class="profile-content-item">
          <div class="profile-content-item-img">
            <img src="~assets/img/goods/simplegoods/goods-cat4.webp" alt="" />
          </div>
          <div class="profile-content-item-text">优惠券</div>
        </div>
        <div class="profile-content-item">
          <div class="profile-content-item-img">
            <img src="~assets/img/goods/simplegoods/goods-cat1.webp" alt="" />
          </div>
          <div class="profile-content-item-text">礼品卡</div>
        </div>
        <div class="profile-content-item">
          <div class="profile-content-item-img">
            <img src="~assets/img/goods/simplegoods/goods-cat2.webp" alt="" />
          </div>
          <div class="profile-content-item-text">账户余额</div>
        </div>
        <div class="profile-content-item">
          <div class="profile-content-item-img">
            <img src="~assets/img/goods/simplegoods/goods-cat3.webp" alt="" />
          </div>
          <div class="profile-content-item-text">发票管理</div>
        </div>
        <div class="profile-content-item">
          <div class="profile-content-item-img">
            <img src="~assets/img/goods/simplegoods/goods-cat4.webp" alt="" />
          </div>
          <div class="profile-content-item-text">兑换优惠</div>
        </div>
        <div class="profile-content-item">
          <div class="profile-content-item-img">
            <img src="~assets/img/goods/simplegoods/goods-cat1.webp" alt="" />
          </div>
          <div class="profile-content-item-text">帮助反馈</div>
        </div>
        <div class="profile-content-item">
          <div class="profile-content-item-img">
            <img src="~assets/img/goods/simplegoods/goods-cat2.webp" alt="" />
          </div>
          <div class="profile-content-item-text">招商加盟</div>
        </div>
        <div class="profile-content-item">
          <div class="profile-content-item-img">
            <img src="~assets/img/goods/simplegoods/goods-cat3.webp" alt="" />
          </div>
          <div class="profile-content-item-text">口味定制</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      isLogin: false
    }
  }
}
</script>

<style scoped>
.profile {
  width: 100%;
}
.profile-container {
  width: 100%;
  padding: 10px;
}
.profile-user {
  width: 100%;
  display: flex;
  margin-top: 50px;
  margin-bottom: 10px;
}
.profile-user-avatar {
  width: 60px;
  display: flex;
  margin-right: 10px;
}
.profile-user-avatar img {
  width: 60px;
  margin: auto;
  border-radius: 50%;
}
.profile-user-login,
.profile-user-name {
  flex: 1;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
}

.profile-user-info {
  width: 100%;
  padding: 10px 5px;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 10px;
}
.profile-user-welcome {
  width: 100%;
  font-size: 18px;
  margin-bottom: 5px;
}
.profile-user-point {
  width: 100%;
  display: flex;
  padding: 5px 0 10px 0;
  border-bottom: 3px solid #e5e5e5;
}
.profile-user-point-text {
  flex: 1;
  font-size: 18px;
  font-weight: bold;
}
.profile-user-point-tips {
  flex: 1;
  font-size: 14px;
  text-align: right;
}
.profile-content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.profile-content-item {
  width: 20%;
  margin: 5px 0;
  padding: 5px;
}
.profile-content-item-img {
  text-align: center;
  margin-bottom: 5px;
}
.profile-content-item-img img {
  width: 24px;
}
.profile-content-item-text {
  text-align: center;
  font-size: 12px;
  color: #5f5f5f;
}
</style>
