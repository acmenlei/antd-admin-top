import "ant-design-vue/dist/antd.css"
import { App } from "vue"

import {
    DatePicker,
    Input,
    Layout,
    LayoutHeader,
    LayoutSider,
    LayoutFooter,
    LayoutContent,
    Breadcrumb,
    BreadcrumbItem,
    Menu,
    MenuItem,
    SubMenu,
    Button,
    Switch,
    Spin

} from "ant-design-vue"

const __ANTD__ = [
    DatePicker,
    Input,
    Layout,
    LayoutHeader,
    LayoutSider,
    LayoutFooter,
    LayoutContent,
    Breadcrumb,
    BreadcrumbItem,
    Menu,
    MenuItem,
    SubMenu,
    Button,
    Switch,
    Spin
]

export default {
    install: (vm: App<any>) => {
        __ANTD__.forEach(componentItem => vm.component(componentItem.name, componentItem))
    }
};

