export default [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: "/login",
        name: 'login',
        component: () => import("/@/views/login/index.vue")
    },
    {
        path: "/:pathMatch(.*)*", // 404配置
        name: "404",
        component: () => import("/@/views/404/404.vue")
    }
]