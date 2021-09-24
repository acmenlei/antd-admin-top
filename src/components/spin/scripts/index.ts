import { ref } from "vue"

const spinning = ref<boolean>(false)

/* 隐藏加载动画 */
function hideSpinning(): void {
    spinning.value = false;
}
/* 显示加载动画 */
function showSpinning(): void {
    spinning.value = true;
}

export default function useLoading() {
    return {
        spinning,
        hideSpinning,
        showSpinning
    }
}