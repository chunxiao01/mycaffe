import Vue from "vue"
import VueRouter from "vue-router"

const Home = () => import("views/home/Home.vue")
const Menu = () => import("views/menu/Menu.vue")
const FreeCard = () => import("views/freecard/FreeCard.vue")
const Order = () => import("views/order/Order.vue")
const Profile = () => import("views/profile/Profile.vue")

const E404 = () => import("views/err/E404.vue")

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/menu",
    component: Menu
  },
  {
    path: "/freecard",
    component: FreeCard
  },
  {
    path: "/order",
    component: Order
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "*",
    component: E404
  }
]

const router = new VueRouter({
  routes,
  base: "/mycoffee/" //配置nginx代理发布项目
  // mode: "history"
})

export default router
