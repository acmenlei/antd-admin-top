import { ref } from "vue"

export const spinning = ref<boolean>(false)

/* 隐藏加载动画 */
export function hideSpinning(): void {
    spinning.value = false;
}
/* 显示加载动画 */
export function showSpinning(): void {
    spinning.value = true;
}