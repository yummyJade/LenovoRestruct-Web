import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
// import home from "./app/home/home";
// import about from "./app/about/about";
// import product from "./app/product/product";
// import search from "./app/search/search";
//懒加载
const home = ()=>import("@/app/home/home");
const about = ()=>import("@/app/about/about");
const product =()=>import("@/app/product/product");
const search =()=>import("@/app/search/search");

// 要告诉 vue 使用 vueRouter
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
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
        path: "/product/:id",
        component: product
    },
    {
        path: "/search",
        name: search,
        component: search
    },
    {
        path: "/",
        redirect: '/home'
    }
]

let router =  new VueRouter({
    routes,
})
export default router;

