import { User } from '/@/types'
import { post } from '/@/api/config'
import { MenuCode } from '/@/types';

export function login(data: User) {
    return post('/admin/login', data)
}

export function adminLogOut(data: User) {
    return post("/admin/loginout", data);
}

export function adminVerify(data: MenuCode) {
    return post("/admin/verify", data);
}