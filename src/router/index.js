import { createRouter, createWebHistory } from "vue-router"
import "../vue.d"

const routes = [{
    path: '/',
    name: "首页",
    component: () => import("../views/home/index.vue")
}]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router