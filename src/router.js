import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import home from "./app/home/home";
import about from "./app/about/about";
import product from "./app/product/product";
import search from "./app/search/search";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:"/home",
        component: home
    },
    {
        path: "/about",
        component: about
    },
    {
        path: "/product",
        component: product
    },
    {
        path: "/search",
        component: search
    },
    {
        path: "/",
        redirect: home
    }
]

let router =  new VueRouter({
    routes
})
export default router;

