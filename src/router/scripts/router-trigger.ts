import router from "/@/router";

// 路由跳转
export const routerPush = (routePath: string) => {
      router.push(routePath);
}

// 路由替换
export const routerReplace = (routePath: string) => {
      router.replace(routePath);
}