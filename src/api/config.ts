import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios"
import { useToken, useUsername } from "/@/common/cookie"
import { errorMessage } from "/@/common/info"
import { TIP } from "/@/common/tip"
import useLoading from "/@/components/spin/scripts"

/* 加载动画 */
const { hideSpinning, showSpinning } = useLoading()

/* cookie相关缓存 */
const { setToken, getToken } = useToken()
const { setUsername, getUsername } = useUsername()

/* http请求响应状态 */
type ResponseType = Promise<AxiosResponse>

const baseURL: string = "http://localhost:3000"

const instance: AxiosInstance = axios.create({
    baseURL,
    timeout: 5000,
    withCredentials: true
})

/* 请求拦截 */
instance.interceptors.request.use((AxiosRequestConfig: AxiosRequestConfig) => {
    showSpinning() // 显示加载动画
    const headers = AxiosRequestConfig.headers
    // 打印请求头
    if (!headers["token"]) {
        headers["token"] = getToken()
    }
    if (!headers["username"]) {
        headers["username"] = getUsername()
    }
    return AxiosRequestConfig
}, (reason) => {
    hideSpinning() // 隐藏加载动画
    errorMessage(reason.message ? reason.message : TIP.NETWORK_ERROR)
    Promise.reject(new Error(reason))
})

/* 响应拦截 */
instance.interceptors.response.use((AxiosResponse: AxiosResponse) => {
    const { url } = AxiosResponse.config
    const { data, headers } = AxiosResponse
    if (['/admin/login'].includes(url as string)) {
        /* 登录的时候拿到headers中需要的信息,设置token和username */
        setToken(headers.token)
        setUsername(headers.username)
    }
    hideSpinning() // 隐藏加载动画
    return data
}, (reason) => {
    hideSpinning() // 隐藏加载动画
    errorMessage(reason.message ? reason.message : TIP.NETWORK_ERROR)
    Promise.reject(new Error(reason))
})

/**
 * 封装post方法
 * @param url 请求接口路径
 * @param data post参数
 * @returns 返回promise
 */
export function post(url: string, data: object = {}): ResponseType {
    return new Promise((resolve, reject) => {
        instance.post(url, data).then(
            response => {
                resolve(response)
            },
            reason => {
                reject(reason.message ? reason.message : TIP.NETWORK_ERROR)
            })
            .catch(reason => {
                reject(reason.message ? reason.message : TIP.NETWORK_ERROR)
            })
    })
}

/**
 * 封装get方法
 * @param url 请求接口路径
 * @param params get参数
 * @returns 返回promise
 */
export function get(url: string, params: object = {}): ResponseType {
    return new Promise((resolve, reject) => {
        instance.get(url, params).then(
            response => {
                resolve(response)
            },
            reason => {
                reject(reason.message ? reason.message : TIP.NETWORK_ERROR)
            })
            .catch(reason => {
                reject(reason.message ? reason.message : TIP.NETWORK_ERROR)
            })
    })
}