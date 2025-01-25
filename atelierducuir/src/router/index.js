import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue"; // Correspond au nouveau nom de fichier
import AboutPage from "../views/AboutPage.vue";
import ProductsPage from "../views/ProductsPage.vue";
import ContactPage from "../views/ContactPage.vue";
import NotFoundPage from "../views/NotFoundPage.vue";

const routes = [
  { path: "/", name: "HomePage", component: HomePage },
  { path: "/about", name: "AboutPage", component: AboutPage },
  { path: "/products", name: "ProductsPage", component: ProductsPage },
  { path: "/contact", name: "ContactPage", component: ContactPage },
  { path: "/:pathMatch(.*)*", name: "NotFoundPage", component: NotFoundPage }, // Catch-all route
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
