import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/views/Dashboard";
import Login from "@/views/Login";
import store from "../store";

Vue.use(VueRouter);

const isLoggedIn = (to, from, next) => {
  if (store.getters.isLoggedIn) {
    next();
    return;
  }
  next("/login");
};

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter: isLoggedIn
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
