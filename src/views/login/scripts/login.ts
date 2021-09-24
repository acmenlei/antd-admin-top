import { login, logout } from "/@/api/user"
import { reactive, UnwrapRef } from "vue";
import { User } from "/@/types";
import { Form } from "ant-design-vue";
import { errorMessage, successMessage } from "/@/common/info";
import { TIP } from "/@/common/tip";

const userInfo: UnwrapRef<User> = reactive({
    ll_username: null,
    ll_password: null
})

const userInfoRules = reactive({
    ll_username: [{
        required: true,
        message: "please input your username!!!"
    }, {
        max: 11,
        min: 5
    }
    ],
    ll_password: [{
        required: true,
        message: "please input your password!!!"
    }, {
        max: 16,
        min: 5
    }
    ]
})
/* 登陆校验规则 */
const { resetFields, validate, validateInfos } = Form.useForm(userInfo, userInfoRules);
/* 登陆逻辑 */
async function userLogin() {
    try {
        await validate()
        const data = await login(userInfo)
        console.log(data);
        return
    } catch {
        errorMessage(TIP.FORM_VALIDATE)
        resetFields()
    }
}
/* 退出登陆 */
async function userLogout(username: string) {
    const data: any = await logout({ ll_username: username })
    return data.code === 200 ? successMessage(data.msg) : errorMessage(TIP.LOGOUT_ERROR)
}

export {
    userLogin,
    userLogout,
    userInfo,
    validateInfos
}