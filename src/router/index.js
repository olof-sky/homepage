import { createWebHistory, createRouter } from "vue-router";
import WelcomePage from "@/views/WelcomePage.vue";

import ContactPage from "@/views/WelcomePageViews/ContactPage.vue";

import CodefolioPage from "@/views/PortfolioViews/CodefolioPage.vue";
import ArtfolioPage from "@/views/PortfolioViews/ArtfolioPage.vue";

const routes = [
  {
    path: "/",
    name: "WelcomePage",
    component: WelcomePage,
  },

  {
    path: "/artfolio",
    name: "ArtfolioPage",
    component: ArtfolioPage,
  },

  {
    path: "/codefolio",
    name: "CodelioPage",
    component: CodefolioPage,
  },

  {
    path: "/contact",
    name: "ContactPage",
    component: ContactPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;