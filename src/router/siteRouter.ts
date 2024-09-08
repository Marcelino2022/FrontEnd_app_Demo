import { createWebHistory, createRouter } from "vue-router";
import Index from "../views/site/Index.vue";
import Marketplace from "../views/site/Marketplace.vue";
import About from "../views/site/About.vue";
import Product from '../views/site/Product.vue';

const routes = [
    { path: '/', name: '', component: Index },
    { path: '/about', name: 'about', component: About },
    { path: '/marketplace', name: 'marketplace', component: Marketplace },
    { path: '/product', name: 'product', component: Product }
]

const router = createRouter({
    history: createWebHistory(),
    routes,

    scrollBehavior(to, from, savedPosition){
        if(savedPosition){
            return savedPosition
        }else if(to.hash){
            return { el: to.hash, behavior: "smooth"}
        } else{
            return { top: 0}
        }
    }
})

export default router
