<template>
  <div class="together-btn" @click="togetherClick">
    <div class="together-btn-content">
      <div class="together-btn-img">
        <img src="~/assets/img/common/icons/together.svg" />
      </div>
      <div class="together-btn-text">拼单</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TogetherBtn",
  methods: {
    togetherClick() {
      this.$emit("togetherClick")
    }
  }
}
</script>

<style scoped>
.together-btn {
  width: 100%;
  padding: 5px;
}
.together-btn-content {
  width: 100%;
  height: 30px;
  line-height: 30px;
  border: 1px solid #999;
  border-radius: 20px;
  display: flex;
}

.together-btn-img {
  width: 35px;
}
.together-btn-img img {
  width: 30px;
  margin: 4px 0 0 4px;
}
.together-btn-text {
  flex: 1;
  font-size: 16px;
  font-weight: bolder;
  text-align: left;
  display: inline-block;
  height: 28px;
  line-height: 30px;
}
</style>
