import axios, { AxiosInstance } from "axios"
import { TIP } from "../common/tip"

type HttpStatus = Promise<String | Number | Error>

const baseURL: string = "https://jsonplaceholder.typicode.com"

const instance: AxiosInstance = axios.create({
    baseURL,
    timeout: 5000,
    withCredentials: true
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
                resolve(response.data)
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
                resolve(response.data)
            },
            reason => {
                reject(reason.message ? reason.message : TIP.NETWORK_ERROR)
            })
            .catch(reason => {
                reject(reason.message ? reason.message : TIP.NETWORK_ERROR)
            })
    })
}