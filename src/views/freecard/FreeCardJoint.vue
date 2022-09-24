<template>
  <div class="free-card-joint">
    <div class="free-card-joint-container">
      <div class="free-card-joint-container-main">
        <div class="free-card-joint-container-main-item">
          <div class="free-card-joint-container-main-item-img">
            <img src="~assets/img/common/icons/cup1.svg" alt="" />
          </div>
          <div class="free-card-joint-container-main-item-text">美式￥10起</div>
        </div>
        <div class="free-card-joint-container-main-item">
          <div class="free-card-joint-container-main-item-img">
            <img src="~assets/img/common/icons/cup2.svg" alt="" />
          </div>
          <div class="free-card-joint-container-main-item-text">
            气泡咖啡￥14起
          </div>
        </div>
        <div class="free-card-joint-container-main-item">
          <div class="free-card-joint-container-main-item-img">
            <img src="~assets/img/common/icons/cup3.svg" alt="" />
          </div>
          <div class="free-card-joint-container-main-item-text">
            冰萃咖啡￥14起
          </div>
        </div>
        <div class="free-card-joint-container-main-item">
          <div class="free-card-joint-container-main-item-img">
            <img src="~assets/img/common/icons/bread.svg" alt="" />
          </div>
          <div class="free-card-joint-container-main-item-text">
            烘焙轻食5.2折
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FreeCardJoint"
}
</script>

<style scoped>
.free-card-joint {
  width: 100%;
}
.free-card-joint-container {
  width: 100%;
  padding: 10px 10px 0 10px;
}
.free-card-joint-container-main {
  width: 100%;
  display: flex;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px;
}
.free-card-joint-container-main-item {
  flex: 1;
}
.free-card-joint-container-main-item-img {
  width: 100%;
  text-align: center;
  margin-bottom: 5px;
}
.free-card-joint-container-main-item-img img {
  width: 36px;
}
.free-card-joint-container-main-item-text {
  text-align: center;
  font-size: 10px;
  color: #000;
}
</style>
