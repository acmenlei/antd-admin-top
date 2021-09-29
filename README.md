## ant-design-vue后台管理系统解决方案

### 简介
基于ant-design-vue + vue3 + vite + ts 的Vue3后台管理系统解决方案，composition api 风格，好维护

#### 模块简介
| 文件/文件夹名  | 简介                                   |
| -------------- | -------------------------------------- |
| api            | 拦截器&请求接口文件存放位置            |
| common         | 公共文件(弹出消息成功&失败)            |
| components     | 公共组件                               |
| layout         | 整体布局                               |
| plugins        | 项目使用到的插件                       |
| router         | 路由文件配置&路由操作&路由守卫         |
| router/modules | 路由模块,编写对应路由相关配置          |
| types          | 接口类型文件          |
| views          | 主要的页面文件                         |
| views/scripts  | 对应页面相关的ts逻辑, 详情查看对应文件 |
| vite.config.ts | vite相关配置                           |


### 依赖安装
```shell
yarn || npm install || cnpm install
```

### 启动
```shell
yarn dev || npm run dev || cnpm run dev
```