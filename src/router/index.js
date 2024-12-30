import Login from "@/views/Login.vue";
import Main from "@/views/Main.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/onlinejudge3/annual-report-2024",
      name: "main",
      component: Main,
    },
    {
      path: "/onlinejudge3/annual-report-2024/login",
      name: "login",
      component: Login,
    },
  ],
});

export default router;
