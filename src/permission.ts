import router from "/@/router";
import { useToken, useUsername } from "/@/common/cookie"
import { adminVerify } from "/@/api/user";
import { errorMessage } from "/@/common/info";
import { TIP } from "/@/common/tip"
import { adminLoginError } from "/@/store/scripts/store-operate"
const { getToken } = useToken();
const { getUsername } = useUsername();

const WHITE_LIST: string[] = ['/login']; // 白名单

router.beforeEach( async (to, from, next) => {
    const { path, meta } = to
    const TOKEN = getToken(), USERNAME = getUsername();
    /**
     * 白名单校验
     */
    if (WHITE_LIST.includes(path)) {
        if (TOKEN && USERNAME) return next('/home')
        else return next()
    } else {
        // PS:如果根目录 直接跳转到登录页（然后会走上边的登录页拦截 有token就回到home）
        if (path === '/') return next('/login');
        if (TOKEN && USERNAME) {
            if (!meta.code) return next() // 到这里如果没有code就是未定义的页面404
            /**
             * 1. 验证通过 放行
             * 2. 验证不通过（两种情况 1.未登录 2.没权限） 删除cookie 重定向到login页面
             */
            const { code, msg }: any = await adminVerify({ routeCode: meta.code });
            if (code === 200) {
                return next()
            } else if (code === -422) {
                errorMessage(TIP.NO_PERMISSION)
                return next({ ...from }) // 没有权限 从哪来回哪去
            } else {
                errorMessage(msg);
                adminLoginError(); // 在vuex中删除cookie中存储的token username
                return next('/login');
            }
        } else {
            return next('/login');
        }
    }
})

export default router;