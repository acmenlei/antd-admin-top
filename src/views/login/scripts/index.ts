import { userLogin, userLogout } from "/@/views/login/scripts/login"

// 登陆登出相关逻辑
export function useUser() {
    return {
        userLogin, userLogout
    }
}
// 根据用户名获取相关权限
