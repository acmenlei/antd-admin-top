import router from "/@/router";
import { useToken, useUsername } from "/@/common/cookie"

const { getToken, setToken } = useToken();
const { getUsername, setUsername } = useUsername();

router.beforeEach((to, from, next) => {
    console.log(to);
    next();
})

export default router;