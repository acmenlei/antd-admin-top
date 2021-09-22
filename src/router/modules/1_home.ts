import Layout from "/@/layout/basic-layout.vue"

export default {
    name: '工作台',
    path: '/home',
    meta: {
        onlyOne: false,
        code: 'home',
        icon: 'index'
    },
    component: Layout,
    children: [
        {
            name: 'home',
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

