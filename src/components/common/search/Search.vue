<template>
  <div class="search">
    <input
      type="search"
      class="search_input"
      :placeholder="searchPlaceholder"
      @keyup.enter="searchGoods"
    />
    <span class="search_icon">
      <img src="~/assets/img/common/icons/search.svg" alt="" />
    </span>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {
    searchPlaceholder: {
      type: String,
      default: "搜一搜"
    }
  },
  methods: {
    searchGoods(e) {
      if (e.target.value) {
        this.$emit("searchGoods", e.target.value)
      }
    }
  }
}
</script>

<style scoped>
.search {
  width: 100%;
  height: 40px;
  line-height: 40px;
  position: relative;
}
.search_input {
  touch-action: manipulation;
  width: 100%;
  height: 39px;
  padding: 8px 12px 8px 40px;
  border-radius: 20px;
  border: none;
  background-color: var(--base-theme-bg-color);
  outline: none;
  font-size: 14px;
}
.search_input:focus {
  outline: none;
}

.search_icon {
  position: absolute;
  top: 50%;
  left: 5px;
  line-height: 0;
  transform: translateY(-50%);
}

.search_icon img {
  width: 25px;
}
</style>
