import { post } from "../http.conf";
import { QueryArticleData } from "/@/types";

export function queryArticleList(data: QueryArticleData) {
    return post("/article/list", data)
}
