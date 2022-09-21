/*插件：全局toast*/
import Toast from "./Toast.vue"

const toastObj = {
  install: function (Vue) {
    //1.创建组件构造器
    const toastConstructor = Vue.extend(Toast)
    //2.new创建一个组件
    const toastCpn = new toastConstructor()
    //3.手动挂载组件到某个元素
    toastCpn.$mount(document.createElement("div"))
    //4.将元素添加到html中
    document.body.appendChild(toastCpn.$el)
    Vue.prototype.$toast = toastCpn
  }
}

export default toastObj
