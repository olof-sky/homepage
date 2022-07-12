import { createWebHistory, createRouter } from "vue-router";
import WelcomePage from "@/views/WelcomePage.vue";

import ContactPage from "@/views/ContactViews/ContactPage.vue";
import ContactMessageSent from "@/views/ContactViews/ContactMessageSent.vue";

import CodefolioPage from "@/views/PortfolioViews/CodefolioPage.vue";

const routes = [
  {
    path: "/",
    name: "WelcomePage",
    component: WelcomePage,
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

  {
    path: "/contact/sent",
    name: "ContactMessageSent",
    component: ContactMessageSent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;