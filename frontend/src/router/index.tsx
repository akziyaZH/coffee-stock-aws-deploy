import { createRouter, createWebHistory } from 'vue-router';
import Contact from "../components/Contact.vue";
import HomeView from "../views/HomeView.vue";
import StockView from "../views/StockView.vue";

const routes = [
    {
        path: "/",
        component: HomeView,
        name: "Dashboard"
    },
    {
        path: "/contact",
        component: Contact,
        name: "Contact",
    },
    {
        path: "/inventory",
        component: StockView,
        name: "Inventory",
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;