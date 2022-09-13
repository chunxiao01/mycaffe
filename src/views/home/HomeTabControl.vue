<template>
  <div class="home-tab-control">
    <div class="home-tab-control-content-tags">
      <tab-control
        :isShowTabControlMore="isShowHomeTabControlMore"
        :tabcontroldatalist="hometabcontroldatalist"
        @tab_control_tab_click="home_tab_control_tab_click"
        @tab_control_tab_more_click="home_tab_control_tab_more_click"
      ></tab-control>
    </div>
  </div>
</template>

<script>
import TabControl from "@/components/common/tabcontrol/TabControl.vue"

export default {
  name: "HomeTabControl",
  props: {
    isShowHomeTabControlMore: {
      type: Boolean,
      default: true
    },
    hometabcontroldatalist: {
      type: Array,
      default() {
        return [
          {
            tabcontrol_tab_name: "开学季",
            tabcontrol_tab_index: "hometabcontrol_tab_0"
          },
          {
            tabcontrol_tab_name: "颜值水杯",
            tabcontrol_tab_index: "hometabcontrol_tab_1"
          },
          {
            tabcontrol_tab_name: "家居日用",
            tabcontrol_tab_index: "hometabcontrol_tab_2"
          },
          {
            tabcontrol_tab_name: "冲调零食",
            tabcontrol_tab_index: "hometabcontrol_tab_3"
          }
        ]
      }
    }
  },
  methods: {
    home_tab_control_tab_click(e) {
      console.log(e)
    },
    home_tab_control_tab_more_click() {
      if (this.isShowHomeTabControlMore) {
        console.log("home更多")
      } else {
        return false
      }
    }
  },
  components: {
    TabControl
  }
}
</script>

<style scoped></style>
