import { login, logOut } from "/@/api/modules/user"
import { reactive, UnwrapRef } from "vue"
import { User } from "/@/types"
import { Form } from "ant-design-vue"
import { errorMessage, successMessage } from "/@/common/info"
import { TIP } from "/@/common/tip"
import { routerPush, routerReplace } from "/@/router/scripts/router-trigger"
import { adminLogOut } from "/@/store/scripts/store-operate"
import { useUsername } from "/@/common/cookie"

const userInfo: UnwrapRef<User> = reactive({
    ll_username: null,
    ll_password: null
})

const userInfoRules = reactive({
    ll_username: [{
        required: true,
        message: "Please input your username!"
    }, {
        max: 11,
        min: 5,
        message: "A minimum of 5 and a maximum of 11!"
    }
    ],
    ll_password: [{
        required: true,
        message: "Please input your password!"
    }, {
        max: 16,
        min: 5,
        message: "A minimum of 5 and a maximum of 16!"
    }
    ]
})
/* 登陆校验规则 */
const { resetFields, validate, validateInfos } = Form.useForm(userInfo, userInfoRules)
/* 登陆逻辑 */
async function userLogin() {
    try {
        await validate()
        const { code, msg }: any = await login(userInfo)
        if (code === 200) {
            successMessage(TIP.LOGIN_SUCCESS)
            return routerPush("/home")
        }
        errorMessage(msg)
    } catch {
        errorMessage(TIP.FORM_VALIDATE)
        resetFields()
    }
}

async function userLogOut() {
    // PS: 不需要catch错误 拦截器已经处理了
    const { getUsername } = useUsername();
    const { code, msg }: any = await logOut({ ll_username: getUsername() });
    if (code === 200) {
        adminLogOut();
        successMessage(msg);
        return routerReplace("/login")
    }
    errorMessage(TIP.LOGOUT_ERROR)
}

export {
    userLogin,
    userLogOut,
    userInfo,
    validateInfos
}