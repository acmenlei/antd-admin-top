import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios"
import { errorMessage } from "../common/info"
import { TIP } from "../common/tip"

/* http请求响应状态 */
type HttpStatus = Promise<String | Error | AxiosResponse>

const baseURL: string = "https://jsonplaceholder.typicode.com"

const instance: AxiosInstance = axios.create({
    baseURL,
    timeout: 5000,
    withCredentials: true
})

/* 请求拦截 */
instance.interceptors.request.use((AxiosRequestConfig: AxiosRequestConfig) => {
    const headers = AxiosRequestConfig.headers
    if (!headers["admin-top-token"]) {
        headers["admin-top-token"] = "dsadhkjSDAdsafdsjlREWR3454dsfsljkjlasjdlka"
    }
    if (!headers["admin-top-operator"]) {
        headers["admin-top-operator"] = "xiongleixin"
    }
    return AxiosRequestConfig
}, (reason) => {
    errorMessage(reason.message ? reason.message : TIP.NETWORK_ERROR)
    Promise.reject(new Error(reason))
})

/* 响应拦截 */
instance.interceptors.response.use((AxiosResponse: AxiosResponse) => {
    const { url } = AxiosResponse.config
    const { data, headers } = AxiosResponse
    if (['/admin/login'].includes(url)) {
        /* 登录的时候拿到headers中需要的信息,设置token和operator */
    }
    return data
}, (reason) => {
    errorMessage(reason.message ? reason.message : TIP.NETWORK_ERROR)
    Promise.reject(new Error(reason))
})

/**
 * 封装post方法
 * @param url 请求接口路径
 * @param data post参数
 * @returns 返回promise
 */
export function post(url: string, data: object = {}): HttpStatus {
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
export function get(url: string, params: object = {}): HttpStatus {
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