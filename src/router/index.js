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
    path: "/main",
    name: "main",
    redirect: "/",
  },
  {
    path: "/setting",
    name: "setting",
    component: () => import("../views/Setting.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/User.vue"),
    redirect: "/profile/tweets",
    children: [
      {
        path: "tweets",
        name: "tweets",
        component: () => import("../components/UserTweets.vue"),
      },
      {
        path: "replied",
        name: "replied",
        component: () => import("../components/UserReplied.vue"),
      },
      {
        path: "likes",
        name: "likes",
        component: () => import("../components/UserLikes.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
