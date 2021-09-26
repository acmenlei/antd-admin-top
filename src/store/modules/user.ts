import { useToken, useUsername } from "/@/common/cookie"
import { StateProps, User } from "/@/types"
import { adminLogOut } from "/@/api/user"
import { successMessage } from "/@/common/info"
import { routerReplace } from "/@/router/scripts/router-trigger"

const SET_TOKEN = 'SET_TOKEN',
    SET_USERNAME = 'SET_USERNAME',
    REMOVE_TOKEN = 'REMOVE_TOKEN',
    REMOVE_USERNAME = 'REMOVE_USERNAME'

const { getToken, removeToken } = useToken();
const { getUsername, removeUsername } = useUsername();

const user = {
    namespace: true,
    state() {
        return {
            token: getToken() || "",
            username: getUsername() || ""
        }
    },
    mutations: {
        [SET_TOKEN]: (state: StateProps, data: string) => state.token = data,
        [SET_USERNAME]: (state: StateProps, data: string) => state.username = data,
        [REMOVE_TOKEN]: () => removeToken(),
        [REMOVE_USERNAME]: () => removeUsername(),
    },
    actions: {
        login({ commit }: any) {
            commit(SET_TOKEN, getToken());
            commit(SET_USERNAME, getUsername());
        },
        logOut({ commit }: any, data: User) {
            adminLogOut(data).then(resp => {
                const { code, msg }: any = resp;
                if (code === 200) {
                    commit(REMOVE_TOKEN);
                    commit(REMOVE_USERNAME);
                    commit(SET_USERNAME, "");
                    commit(SET_USERNAME, "");
                    successMessage(msg);
                    routerReplace('/login');
                }
            })
        },
        verifyFailed({ commit }: any) {
            commit(REMOVE_TOKEN)
            commit(REMOVE_USERNAME)
            commit(SET_TOKEN, "")
            commit(SET_USERNAME, "")
        }
    },
    getters: {
        token: (state: StateProps) => state.token,
        username: (state: StateProps) => state.username,
    }
}

export default user;