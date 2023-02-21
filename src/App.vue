<!--
 * @Author: chunxiao
 * @Github: https://github.com/chunxiao01
 * @Version: V-0.0.1
 * @License: MIT
 * @Date: 2023-01-31 11:11:50
 * @LastEditTime: 2023-02-14 19:13:57
 * @LastEditors: chunxiao
 * @Description:
-->
<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar id="mainTabBar" v-show="!$route.meta.hideTabBar" />
  </div>
</template>

<script>
import MainTabBar from "components/content/MainTabBar"

export default {
  name: "App",
  components: {
    MainTabBar
  }
}
</script>

<style>
@import "assets/css/base.css";

#app {
  position: relative;
  padding-bottom: 54px;
}
</style>
