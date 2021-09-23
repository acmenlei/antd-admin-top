import Layout from "/@/layout/basic-layout.vue";

export default {
    name: '创作中心',
    path: '/article',
    meta: {
        onlyOne: false,
        code: 'creativeCenter',
        icon: 'article'
    },
    component: Layout,
    children: [
        {
            name: '文章列表',
            path: '/article/list',
            meta: {
                hidden: false,
                code: 'articleList',
                icon: 'article'
            },
            component: () => import('/@/views/article/article-list.vue')
        }
    ]
}
