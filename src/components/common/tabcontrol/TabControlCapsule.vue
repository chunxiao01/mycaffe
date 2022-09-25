<template>
  <div class="tab-control-capsule">
    <div class="tab-control-capsule-content">
      <div class="tab-control-capsule-content-tabs">
        <div
          class="tab-control-capsule-content-tab"
          :class="{
            'tab-control-capsule-content-tab-active':
              isActivetabcontroltab(index)
          }"
          v-for="(item, index) in tabControlCapsuleData"
          :key="item.tabcontrol_tab_index"
          @click="tab_control_capsule_tab_click(index)"
        >
          <div class="tab-control-capsule-content-tab-text">
            {{ item.tabcontrol_tab_name }}
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="isShowTabControlMore"
      class="tab-control-capsule-more"
      @click="tab_control_capsule_more_click"
    >
      更多 ＞
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControlCapsule",
  props: {
    isShowTabControlMore: {
      type: Boolean,
      default: false
    },
    tabControlCapsuleData: {
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
    tab_control_capsule_more_click() {
      this.$emit("tab_control_tab_more_click")
    },
    tab_control_capsule_tab_click(index) {
      this.tabcontrol_tab_index = index
      this.$emit("tab_control_capsule_tab_click", index)
    },
    isActivetabcontroltab(index) {
      return this.tabcontrol_tab_index === index
    }
  }
}
</script>

<style scoped>
.tab-control-capsule {
  width: 100%;
  display: flex;
  background-color: var(--base-theme-color);
  border-radius: 20px;
  padding: 1px;
}
.tab-control-capsule-more {
  width: 60px;
  text-align: right;
  color: #fff;
  font-size: 14px;
}
.tab-control-capsule-content {
  flex: 1;
}
.tab-control-capsule-content-tabs {
  display: flex;
}
.tab-control-capsule-content-tab {
  flex: 1;
  text-align: center;
  font-size: 15px;
  color: #fff;
  height: 36px;
  line-height: 36px;
}
.tab-control-capsule-content-tab-active {
  background-color: #fff;
  color: var(--base-theme-color);
  border-radius: 20px;
}
.tab-control-capsule-content-tab-underline {
  width: 100%;
  height: 2px;
  line-height: 2px;
}
.tab-control-capsule-content-tab-underline span {
  display: inline-block;
  text-align: center;
  width: 20px;
  height: 2px;
  border-top: 2px solid var(--base-theme-color);
}
</style>
