import Layout from "/@/layout/basic-layout.vue"

export default {
    name: '工作台',
    path: '/home',
    meta: {
        onlyOne: true,
        code: 'work',
        icon: 'index'
    },
    component: Layout,
    children: [
        {
            name: '首页',
            path: '/',
            meta: {
                hidden: false,
                code: 'home',
                icon: 'index'
            },
            component: () => import('/@/views/home/index.vue')
        }
    ]
}

