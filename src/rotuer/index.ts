import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router"
import "../vue.d"

/* 路由拼装 */
// const configuraRouters = (require as CustomeNodeRequire).context('/', true);
// console.log(configuraRouters);

const routes: RouteRecordRaw[] = [{
    path: '/',
    name: "首页",
    component: () => import("../views/home/index.vue")
}]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router