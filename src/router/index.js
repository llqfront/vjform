import Vue from "vue";
import VueRouter from "vue-router";
import Basic from "../views/Basic.vue";
import Hooks from "../views/Hooks";
import SourceTest from "../views/SourceTest.vue";
import FxTest from "../views/FxTest.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Basic },
  { path: "/basic", component: Basic },
  { path: "/hooks", component: Hooks },
  { path: "/source", component: SourceTest },
  { path: "/fx", component: FxTest }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
