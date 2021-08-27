import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router"
import "../vue"

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