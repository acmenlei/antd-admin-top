/* 处理项目主题颜色 */
import { ref } from "vue"

export const theme = ref<string>("dark")

export function changeTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
}