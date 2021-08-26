import { post } from './config'

export function queryUserList() {
    return post('/users')
}