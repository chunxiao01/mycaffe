import Vue from "vue"
import App from "./App.vue"

import VueLazyload from "vue-lazyload"

import Toast from "./components/common/toast/index.js"

import router from "./router"
import store from "./store"

Vue.config.productionTip = false

Vue.use(VueLazyload)
Vue.use(Toast) //全局注册Toast

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app")
