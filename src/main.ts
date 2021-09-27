import { createApp } from 'vue'
import App from '/@/App.vue'
import antd from "/@/plugins/ant-design-vue"
import router from '/@/permission'
import "/@/assets/iconfont/iconfont.css"
import store from "/@/store"

createApp(App).use(antd).use(router).use(store).mount('#app')