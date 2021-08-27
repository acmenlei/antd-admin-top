import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router"

const routes: RouteRecordRaw[] = [{
    path: '/',
    component: () => import("../views/home")
}] 

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router