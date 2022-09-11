<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
.tabbar {
  display: flex;
  width: 100%;
  height: 52px;
  padding-top: 3px;
  border-top: 1px solid #eee;
}
</style>
