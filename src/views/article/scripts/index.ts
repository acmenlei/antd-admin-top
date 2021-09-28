import { queryArticleList } from "/@/api/modules/article"
import { reactive } from "vue"
import columns from "./article-columns"

const articleState = reactive({
    list: [],
    queryConditions: {
        pageNum: 1,
        pageSize: 10,
        ll_category: null,
        ll_title: null
    },
    total: 0,
    columns
});
/* 查询文章 */
async function initArticle() {
    const { data, total, code }: any = await queryArticleList(articleState.queryConditions);
    if (code === 200) {
        articleState.list = data;
        articleState.total = total;
    }
}

export {
    initArticle,
    articleState
}
