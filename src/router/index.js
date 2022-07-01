import { createWebHistory, createRouter } from "vue-router";
import WelcomePage from "@/views/WelcomePage.vue";

const routes = [
  {
    path: "/about",
    name: "WelcomePage",
    component: WelcomePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;