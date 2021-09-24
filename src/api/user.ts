import { User } from '/@/types'
import { post } from '/@/api/config'

export function login(data: User) {
    return post('/admin/login', data)
}

export function logout(data: User) {
    return post("/admin/loginout", data);
}