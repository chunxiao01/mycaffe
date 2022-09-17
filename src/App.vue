<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar id="mainTabBar" />
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
