<template>
  <div class="container-header">
    <div class="container-header-title">
      <img src="/favicon.ico" alt="" />
      &nbsp;Vue3后台管理系统解决方案
    </div>
    <a-popconfirm
      title="确定要退出管理系统吗?"
      ok-text="确定"
      cancel-text="取消"
      @confirm="userLogOut"
    >
      <div class="container-header-exit">退出登陆</div>
    </a-popconfirm>
  </div>
</template>

<script lang="ts">
import { useUser } from "/@/views/login/scripts";
export default {
  name: "layout-header",
  setup() {
    const { userLogOut } = useUser();
    return {
      userLogOut,
    };
  },
};
</script>

<style lang="scss" scoped>
.container-header {
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .container-header-exit {
    cursor: pointer;
  }
}
</style>