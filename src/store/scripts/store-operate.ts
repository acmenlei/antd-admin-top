import store from "/@/store"
import { User } from "/@/types"

// 令牌校验出错 删除token以及username
export const adminLoginError = () => {
    store.dispatch('user/verifyFailed')
}

// 退出管理台
export const adminLogOut = (data: User) => {
    store.dispatch('user/logOut', data);
}

// 登陆 保存token以及username
export const adminLogin = () => {
    store.dispatch('user/login');
}