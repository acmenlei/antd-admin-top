import Cookies from "cookies-ts"

/* Cookies全局配置 */
const cookies = new Cookies();

const TOKEN = 'TOKEN'
const USERNAME = 'USERNAME'

function setToken(token: string) {
    cookies.set(TOKEN, token);
}

function getToken(): string | null {
    return cookies.get(TOKEN);
}

function removeToken() {
    cookies.remove(TOKEN);
}

function setUsername(username: string) {
    cookies.set(USERNAME, username);
}

function getUsername(): string | null {
    return cookies.get(USERNAME);
}

function removeUsername() {
    cookies.remove(USERNAME);
}
/* token相关存储 */
export function useToken() {
    return {
        setToken, getToken, removeToken
    }
}
/* 用户名相关存储 */
export function useUsername() {
    return { setUsername, getUsername, removeUsername }
}
