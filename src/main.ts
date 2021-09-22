import { createApp } from 'vue'
import App from '/@/App.vue'
import antd from "/@/plugins/ant-design-vue"
import router from '/@/router'
import "/iconfont/iconfont.css"

createApp(App).use(antd).use(router).mount('#app')
