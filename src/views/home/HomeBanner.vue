<template>
  <div class="home-menu-banner">
    <div class="home-menu-banner-content" @touchstart="touchstart">
      <img
        class="home-menu-banner-content-img"
        src="~assets/img/home/homebanner/banner1.png"
        alt=""
      />
      <div class="home-menu-banner-content-btn">
        <span>立即查看＞</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBanner",
  methods: {
    touchstart() {
      console.log(123)
    }
  }
}
</script>

<style scoped>
.home-menu-banner {
  width: 100%;
  padding: 5px 10px;
  position: relative;
}

.home-menu-banner-content-img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 5px 5px 5px 0 rgba(192, 192, 192, 0.2);
}

.home-menu-banner-content-btn {
  position: absolute;
  bottom: 15px;
  right: 15px;
}
.home-menu-banner-content-btn span {
  display: inline-block;
  width: 80px;
  height: 24px;
  line-height: 24px;
  font-size: 12px;
  color: #000;
  text-align: center;
  background-color: #fff;
  border-radius: 20px;
}
</style>
