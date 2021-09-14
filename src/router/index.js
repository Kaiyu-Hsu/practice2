import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/main/setting",
    name: "setting",
    component: () => import("../views/Setting.vue"),
  },
  {
    path: "/main/user",
    name: "user",
    component: () => import("../views/User.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
