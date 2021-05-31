import { createRouter, createWebHashHistory } from "vue-router";
/* eslint-disable */
const routes = [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/employee",
    component: () =>
      import(/* webpackChunkName: "employee" */ "../views/Employee.vue"),
  },
  {
    path: "/employee/create",
    component: () =>
      import(/* webpackChunkName: "employee" */ "../views/Create.vue"),
  },
  {
    path: "/Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/Dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
