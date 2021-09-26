import { User } from '/@/types'
import { post } from './http.conf'
import { MenuCode } from '/@/types';

/* 管理员登陆 */
export function login(data: User) {
    return post('/admin/login', data)
}
/* 管理员退出 */
export function adminLogOut(data: User) {
    return post("/admin/loginout", data);
}
/* 管理员身份验证 */
export function adminVerify(data: MenuCode) {
    return post("/admin/verify", data);
}