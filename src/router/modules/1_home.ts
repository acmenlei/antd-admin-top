import Layout from "/@/layout/basic-layout.vue"

export default {
    name: '',
    path: '/home',
    meta: {
        onlyOne: false,
        code: 'home',
        icon: ''
    },
    component: Layout,
    children: [
        {
            name: 'home',
            path: '/',
            meta: {
                hidden: false,
                code: 'home',
                icon: ''
            },
            component: () => import('/@/views/home/index.vue')
        }
    ]
}

