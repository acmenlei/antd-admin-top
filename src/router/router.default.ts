export default [
    {
        path: '/',
        redirect: '/home',
        name: 'index'
    },
    {
        path: "/login",
        name: 'login',
        component: () => import("/@/views/login/index.vue")
    },
    {
        path: "/*",
        name: "404",
        component: () => import("/@/views/404/404.vue")
    }
]