<template>
  <div class="free-card-detail">
    <div class="free-card-detail-container">
      <div class="free-card-detail-item">
        <div class="free-card-detail-item-content">
          <div class="free-card-detail-item-title">
            <span class="free-card-detail-item-title-text">特权1</span>
          </div>
          <div class="free-card-detail-item-content">
            <div class="free-card-detail-item-content-text">
              <div class="free-card-detail-item-text-name">
                <span class="free-card-detail-item-text-name">首开立享</span>
                <span class="free-card-detail-item-text-price">￥10.9</span>
                <span class="free-card-detail-item-text-img">
                  <img src="~assets/img/common/icons/tips.svg" alt="" />
                </span>
              </div>
              <div class="free-card-detail-item-content-text-detail">
                椰云、生椰拿铁可享
              </div>
            </div>
          </div>
          <div class="free-card-detail-item-img">
            <img src="~assets/img/home/homeswiper/swiper1.png" alt="" />
          </div>
        </div>
      </div>
      <div class="free-card-detail-item">
        <div class="free-card-detail-item-content">
          <div class="free-card-detail-item-title">
            <span class="free-card-detail-item-title-text">特权2</span>
          </div>
          <div class="free-card-detail-item-content">
            <div class="free-card-detail-item-content-text">
              <div class="free-card-detail-item-text-name">
                <span class="free-card-detail-item-text-price">18杯</span>
                <span class="free-card-detail-item-text-name">特价饮品</span>
                <span class="free-card-detail-item-text-img">
                  <img src="~assets/img/common/icons/tips.svg" alt="" />
                </span>
              </div>
              <div class="free-card-detail-item-content-text-detail">
                以下饮品任选
              </div>
            </div>
          </div>
          <div class="free-card-detail-item-img">
            <span class="free-card-detail-item-img-text">最高可省378元</span>
          </div>
        </div>
        <div class="free-card-detail-item-main">
          <div
            class="free-card-detail-item-main-item"
            v-for="(item, index) in freeCardGoodsData"
            :key="index"
          >
            <div class="free-card-detail-item-main-item-img">
              <img v-lazy="item.pic" alt="" />
            </div>
            <div class="free-card-detail-item-main-item-name">
              {{ item.name }}
            </div>
            <div class="free-card-detail-item-main-item-price">
              ￥{{ item.price }}
            </div>
          </div>
        </div>
      </div>
      <div class="free-card-detail-item">
        <div class="free-card-detail-item-content">
          <div class="free-card-detail-item-title">
            <span class="free-card-detail-item-title-text">特权3</span>
          </div>
          <div class="free-card-detail-item-content">
            <div class="free-card-detail-item-content-text">
              <div class="free-card-detail-item-text-name">
                <span class="free-card-detail-item-text-name"
                  >生椰加载无限量</span
                >
                <span class="free-card-detail-item-text-price">5.5折</span>
                <span class="free-card-detail-item-text-img">
                  <img src="~assets/img/common/icons/tips.svg" alt="" />
                </span>
              </div>
              <div class="free-card-detail-item-content-text-detail"></div>
            </div>
          </div>
          <div class="free-card-detail-item-img">
            <img src="~assets/img/home/homeswiper/swiper2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FreeCardDetail",
  data() {
    return {
      freeCardGoodsData: [
        {
          name: "生椰拿铁",
          price: "14.5",
          pic: require("assets/img/goods/menugoods/cat1.png")
        },
        {
          name: "椰云拿铁",
          price: "14.5",
          pic: require("assets/img/goods/menugoods/cat2.png")
        },
        {
          name: "生椰丝绒拿铁",
          price: "15.5",
          pic: require("assets/img/goods/menugoods/cat3.png")
        },
        {
          name: "冰生椰丝绒拿铁",
          price: "15.5",
          pic: require("assets/img/goods/menugoods/cat4.png")
        },
        {
          name: "陨石生椰拿铁",
          price: "15.5",
          pic: require("assets/img/goods/menugoods/cat5.png")
        },
        {
          name: "芒果好喝椰",
          price: "17",
          pic: require("assets/img/goods/menugoods/cat6.png")
        },
        {
          name: "椰云芒芒",
          price: "18.5",
          pic: require("assets/img/goods/menugoods/cat7.png")
        },
        {
          name: "生椰小圆子",
          price: "15.5",
          pic: require("assets/img/goods/menugoods/cat8.png")
        },
        {
          name: "椰云荔荔",
          price: "18.5",
          pic: require("assets/img/goods/menugoods/cat1.png")
        },
        {
          name: "椰云葡萄",
          price: "18.5",
          pic: require("assets/img/goods/menugoods/cat2.png")
        },
        {
          name: "抹茶好喝椰",
          price: "15.5",
          pic: require("assets/img/goods/menugoods/cat3.png")
        },
        {
          name: "耶加 • 生椰拿铁",
          price: "15.5",
          pic: require("assets/img/goods/menugoods/cat4.png")
        },
        {
          name: "生椰爱摩卡",
          price: "17",
          pic: require("assets/img/goods/menugoods/cat5.png")
        },
        {
          name: "大颗杨枝甘露",
          price: "17",
          pic: require("assets/img/goods/menugoods/cat6.png")
        },
        {
          name: "杨枝甘露",
          price: "18",
          pic: require("assets/img/goods/menugoods/cat7.png")
        },
        {
          name: "杨枝甘露",
          price: "17",
          pic: require("assets/img/goods/menugoods/cat8.png")
        },
        {
          name: "如梦令",
          price: "15.5",
          pic: require("assets/img/goods/menugoods/cat1.png")
        },
        {
          name: "轻盈版杨枝甘露",
          price: "17",
          pic: require("assets/img/goods/menugoods/cat2.png")
        },
        {
          name: "杨枝甘露",
          price: "18",
          pic: require("assets/img/goods/menugoods/cat3.png")
        },
        {
          name: "椰青冰萃",
          price: "14",
          pic: require("assets/img/goods/menugoods/cat4.png")
        },
        {
          name: "椰云桃桃",
          price: "18.5",
          pic: require("assets/img/goods/menugoods/cat5.png")
        }
      ]
    }
  }
}
</script>

<style scoped>
.free-card-detail {
  width: 100%;
}
.free-card-detail-container {
  width: 100%;
  padding: 5px 10px;
}
.free-card-detail-item {
  width: 100%;
  background-color: #fff;
  padding: 10px 5px 0 5px;
  border-radius: 8px;
  margin: 10px 0;
}
.free-card-detail-item-content {
  width: 100%;
  display: flex;
  margin-bottom: 10px;
}
.free-card-detail-item-title {
  width: 50px;
  padding: 0 5px;
}
.free-card-detail-item-title-text {
  display: inline-block;
  width: 40px;
  height: 24px;
  line-height: 24px;
  font-size: 14px;
  background-color: #caa97b;
  color: #fffcf7;
  border-radius: 8px 0 8px 0;
  text-align: center;
}

.free-card-detail-item-content {
  flex: 1;
}
.free-card-detail-item-content-text {
  width: 100%;
  padding: 0 5px;
}
.free-card-detail-item-text-name {
  font-size: 16px;
  font-weight: bold;
  color: #000;
  margin-bottom: 5px;
}
.free-card-detail-item-text-price {
  font-size: 18px;
  font-weight: bolder;
  color: #f85931;
}
.free-card-detail-item-text-img img {
  width: 18px;
}
.free-card-detail-item-content-text-detail {
  font-size: 16px;
  color: #000;
}
.free-card-detail-item-img {
  width: 100px;
  padding: 0 5px;
}
.free-card-detail-item-img img {
  width: 90px;
}
.free-card-detail-item-img-text {
  font-size: 16px;
  font-weight: bolder;
  color: var(--base-theme-color);
}
.free-card-detail-item-main {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.free-card-detail-item-main-item {
  width: 25%;
  padding: 5px;
  margin: 5px 0;
}
.free-card-detail-item-main-item-img {
  text-align: center;
  margin-bottom: 5px;
}
.free-card-detail-item-main-item-img img {
  width: 30px;
}
.free-card-detail-item-main-item-name {
  text-align: center;
  margin-bottom: 5px;
  font-size: 16px;
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.free-card-detail-item-main-item-price {
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #eb5824;
}
</style>
