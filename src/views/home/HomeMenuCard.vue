<template>
  <div class="home-menu-card">
    <div class="home-menu-card-title">
      <div class="home-menu-card-info">
        <span class="home-menu-card-info-avatar">🦌</span>
        <span class="home-menu-card-info-text">Lucky you~跟幸运打个招呼</span>
      </div>
      <div v-if="true" class="home-menu-card-login-register">
        <span class="">登录/注册</span>
      </div>
      <div v-else class="home-menu-card-login-register">
        <span>登录/注册</span>
      </div>
    </div>
    <div class="home-menu-card-content">
      <div class="home-menu-card-detail">
        <div class="home-menu-card-detail-item">
          <div class="home-menu-card-detail-item-icon">
            <img src="~assets/img/home/homemenucard/get_yourself.svg" alt="" />
          </div>
          <div class="home-menu-card-detail-item-text">到店取</div>
          <div class="home-menu-card-detail-item-text-detail">提前下单自取</div>
        </div>
        <div class="home-menu-card-detail-item">
          <div class="home-menu-card-detail-item-icon">
            <img src="~assets/img/home/homemenucard/get_post.svg" alt="" />
          </div>
          <div class="home-menu-card-detail-item-text">幸运送</div>
          <div
            class="home-menu-card-detail-item-text-detail home-menu-card-detail-item-text-detail-special"
          >
            无接触及时送
          </div>
        </div>
        <div class="home-menu-card-detail-item">
          <div class="home-menu-card-detail-item-icon">
            <img src="~assets/img/home/homemenucard/get_others.svg" alt="" />
          </div>
          <div class="home-menu-card-detail-item-text">买潮品</div>
          <div class="home-menu-card-detail-item-text-detail">瑞幸颜值周边</div>
        </div>
      </div>
      <div class="home-menu-card-good">
        <div class="home-menu-card-good-item">
          <div class="home-menu-card-good-item-icon">
            <img src="~assets/img/home/homemenucard/get_off.svg" alt="" />
          </div>
          <div class="home-menu-card-good-item-text">充4赠3</div>
          <div class="home-menu-card-good-item-text-detail">咖啡钱包</div>
        </div>
        <div class="home-menu-card-good-item">
          <div class="home-menu-card-good-item-icon">
            <img src="~assets/img/home/homemenucard/get_card.svg" alt="" />
          </div>
          <div class="home-menu-card-good-item-text">礼品卡</div>
          <div class="home-menu-card-good-item-text-detail">传情达意</div>
        </div>
        <div class="home-menu-card-good-item">
          <div class="home-menu-card-good-item-icon">
            <img src="~assets/img/home/homemenucard/get_gift.svg" alt="" />
          </div>
          <div class="home-menu-card-good-item-text">福利中心</div>
          <div class="home-menu-card-good-item-text-detail">天天得福利</div>
        </div>
        <div class="home-menu-card-good-item">
          <div class="home-menu-card-good-item-icon">
            <img src="~assets/img/home/homemenucard/get_together.svg" alt="" />
          </div>
          <div class="home-menu-card-good-item-text">拼单满减</div>
          <div class="home-menu-card-good-item-text-detail">一起点更划算</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeMenuCard"
}
</script>

<style scoped>
.home-menu-card {
  width: 100%;
  padding: 5px 10px;
}

.home-menu-card-title {
  width: 100%;
  height: 35px;
  line-height: 35px;
  display: flex;
  background-color: #111;
  border-radius: 8px 8px 0 0;
  color: bisque;
  font-size: 12px;
  text-align: center;
}
.home-menu-card-info {
  flex: 1;
  text-align: left;
  margin-left: 10px;
}
.home-menu-card-login-register {
  width: 100px;
}
.home-menu-card-login-register span {
  display: inline-block;
  width: 80px;
  height: 24px;
  line-height: 24px;
  margin-top: 3px;
  background-color: bisque;
  color: #111;
  border-radius: 20px;
}

.home-menu-card-content {
  width: 100%;
  padding: 10px;
  box-shadow: 5px 5px 5px 0 rgba(192, 192, 192, 0.2);
  border-radius: 0 0 8px 8px;
  background: #fff;
}

.home-menu-card-detail {
  width: 100%;
  padding: 5px;
  display: flex;
  margin-bottom: 20px;
}
.home-menu-card-detail-item {
  flex: 1;
  text-align: center;
}
.home-menu-card-detail-item-text {
  font-size: 18px;
  font-weight: bolder;
  margin-top: 3px;
  margin-bottom: 5px;
}
.home-menu-card-detail-item-text-detail {
  font-size: 12px;
  color: #999;
}
.home-menu-card-detail-item-text-detail-special {
  color: #f55555;
}
.home-menu-card-detail-item-icon {
  text-align: center;
}
.home-menu-card-detail-item-icon img {
  width: 40px;
}

.home-menu-card-good {
  width: 100%;
  padding: 5px;
  display: flex;
  margin-bottom: 10px;
}
.home-menu-card-good-item {
  flex: 1;
  text-align: center;
}
.home-menu-card-good-item-text {
  font-size: 14px;
  font-weight: bolder;
  margin-top: 3px;
  margin-bottom: 5px;
}
.home-menu-card-good-item-text-detail {
  font-size: 12px;
  color: #999;
}
.home-menu-card-good-item-icon {
  text-align: center;
}
.home-menu-card-good-item-icon img {
  width: 26px;
}
</style>
