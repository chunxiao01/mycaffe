<template>
  <div class="home-fuli-card">
    <div class="home-fili-card-container">
      <div class="home-fuli-card-title">
        <div class="home-fuli-card-title-text">
          <span>福利中心</span>
        </div>
        <div class="home-fuli-card-title-more">
          <span>查看全部</span>
        </div>
      </div>
      <div class="home-fuli-card-content">
        <div class="home-fuli-card-item">
          <div class="home-fuli-card-item-text">lucky送福利</div>
          <div class="home-fuli-card-item-text-detail">领4.8折券</div>
        </div>
        <div class="home-fuli-card-item">
          <div class="home-fuli-card-item-text">邀请好友</div>
          <div class="home-fuli-card-item-text-detail">
            每邀一位好友各得20元
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeFuliCard"
}
</script>

<style scoped>
.home-fuli-card {
  width: 100%;
  padding: 5px 10px;
}

.home-fili-card-container {
  width: 100%;
  background: #fff;
  border-radius: 8px;
  box-shadow: 5px 5px 5px 0 rgba(192, 192, 192, 0.2);
}

.home-fuli-card-title {
  width: 100%;
  display: flex;
}
.home-fuli-card-title-text {
  flex: 1;
  text-align: left;
  font-size: 18px;
  font-weight: bolder;
  margin: 10px;
}
.home-fuli-card-title-more {
  flex: 1;
  text-align: right;
  font-size: 12px;
  margin: 10px;
}

.home-fuli-card-content {
  display: flex;
  padding: 10px;
}
.home-fuli-card-item {
  flex: 1;
  padding: 10px;
  background: #f9e4e8;
}
.home-fuli-card-content .home-fuli-card-item:not(:last-child) {
  margin-right: 5px;
}
.home-fuli-card-content .home-fuli-card-item:not(:first-child) {
  margin-left: 5px;
}
.home-fuli-card-item-text {
  font-size: 16px;
  font-weight: bolder;
  margin: 10px 0 3px 10px;
}
.home-fuli-card-item-text-detail {
  font-size: 12px;
  color: #f55555;
  margin: 3px 10px 10px 10px;
}
</style>
