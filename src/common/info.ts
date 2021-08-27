import { message } from "ant-design-vue"

/* 成功提示 */
export function successMessage(successMessage: string): void {
    message.success(successMessage)
}

/* 失败提示 */
export function errorMessage(errorMessage: string): void {
    message.error(errorMessage)
}

/* 警告提示 */
export function warningMessage(warningMessage: string): void {
    message.warning(warningMessage)
}