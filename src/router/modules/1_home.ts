import Layout from "/@/layout/basic-layout.vue"

export default {
    name: '工作台',
    path: '/',
    meta: {
        onlyOne: true,
        code: 'workTower',
        icon: 'index'
    },
    component: Layout,
    children: [
        {
            name: '首页',
            path: '/home',
            meta: {
                hidden: false,
                code: 'workTower',
                icon: 'index'
            },
            component: () => import('/@/views/home/index.vue')
        }
    ]
}

