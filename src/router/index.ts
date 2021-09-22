import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import configuraRoutes from "./router.menu"
import defaultRoutes from "./router.default"

// 默认的路由配置
const routes: RouteRecordRaw[] = defaultRoutes;

// 将得到的需要显示的菜单路由 导出给外界使用
export const MenuRoutes: RouteRecordRaw[] = Object.values(configuraRoutes);

const router = createRouter({
    routes: MenuRoutes.concat(routes),// 最终的路由配置 
    history: createWebHistory()
})

export default router