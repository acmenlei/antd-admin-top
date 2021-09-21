import Layout from "../../layout/index.vue"

export default {
    name: '',
    path: '/',
    meta: {
        hidden: false,
        code: 'home',
        icon: ''
    },
    component: Layout,
    children: [
        {
            name: 'home',
            path: 'home',
            meta: {
                hidden: false,
                code: 'home',
                icon: ''
            },
            component: () => import('../../views/home/index.vue')
        }
    ]
}

