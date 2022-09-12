<template>
  <div class="tab-control">
    <div class="tab-control-content">
      <div class="tab-control-content-tabs">
        <div
          class="tab-control-content-tab"
          v-for="(item, index) in tabcontroldatalist"
          :key="item.tabcontrol_tab_index"
          @click="tab_control_tab_click(index)"
        >
          <div class="tab-control-content-tab-text">
            {{ item.tabcontrol_tab_name }}
          </div>
          <div
            class="tab-control-content-tab-underline"
            v-if="isActivetabcontroltab(index)"
          >
            <span></span>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="isShowTabControlMore"
      class="tab-control-more"
      @click="tab_control_more_click"
    >
      更多 ＞
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    isShowTabControlMore: {
      type: Boolean,
      default: false
    },
    tabcontroldatalist: {
      type: Array,
      default() {
        return [
          {
            tabcontrol_tab_name: null,
            tabcontrol_tab_index: null
          }
        ]
      }
    }
  },
  data() {
    return {
      tabcontrol_tab_index: 0
    }
  },
  methods: {
    tab_control_more_click() {
      console.log("更多")
    },
    tab_control_tab_click(index) {
      this.tabcontrol_tab_index = index
      console.log(this.tabcontroldatalist[index])
    },
    isActivetabcontroltab(index) {
      return this.tabcontrol_tab_index === index
    }
  }
}
</script>

<style scoped>
.tab-control {
  width: 100%;
  display: flex;
}
.tab-control-more {
  width: 80px;
  text-align: right;
  color: #999;
  font-size: 14px;
  margin-top: 2px;
}
.tab-control-content {
  flex: 1;
}
.tab-control-content-tabs {
  display: flex;
}
.tab-control-content-tab {
  flex: 1;
  text-align: center;
}

.tab-control-content-tab-underline {
  width: 100%;
  height: 2px;
  line-height: 2px;
}
.tab-control-content-tab-underline span {
  display: inline-block;
  text-align: center;
  width: 20px;
  height: 2px;
  border-top: 2px solid var(--base-theme-color);
}
</style>
