import store from "/@/store"

// 退出管理台 | 令牌校验出错 删除token以及username
export const adminLogOut = () => {
    store.dispatch('user/logOut');
}

// 登陆 保存token以及username
export const adminLogin = () => {
    store.dispatch('user/login');
}