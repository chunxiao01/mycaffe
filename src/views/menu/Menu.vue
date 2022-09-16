<template>
  <div class="menu">
    <div class="menu-container">
      <div class="menu-top-content">
        <div class="ment-top-together-btn">
          <together-btn @togetherClick="menuTogetherClick"></together-btn>
        </div>
        <div class="ment-top-search">
          <search
            :searchPlaceholder="menuSearchPlaceholder"
            @searchGoods="menuSearchGoods"
          ></search>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TogetherBtn from "@/components/common/together/TogetherBtn.vue"
import Search from "@/components/common/search/Search.vue"

export default {
  name: "Menu",

  data() {
    return {
      menuSearchPlaceholder: "搜搜你想喝的饮品"
    }
  },
  methods: {
    menuTogetherClick() {
      console.log("一起去拼单!")
    },
    menuSearchGoods(value) {
      if (value) {
        console.log(value)
      }
    }
  },
  components: {
    TogetherBtn,
    Search
  }
}
</script>

<style scoped>
.menu {
  width: 100%;
}
.menu-container {
  width: 100%;
  padding: 10px;
  background-color: #fff;
}
.menu-top-content {
  width: 100%;
  display: flex;
}
.ment-top-together-btn {
  width: 100px;
}
.ment-top-search {
  flex: 1;
  margin-left: 5px;
}
</style>
