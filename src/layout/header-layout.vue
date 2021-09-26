<template>
  <div class="container-header">
    <div class="container-header-title">
      <img src="/public/favicon.ico" alt="" />
      &nbsp;Vue3后台管理系统解决方案
    </div>
    <div class="container-header-info">我的</div>
  </div>
</template>

<script lang="ts">
export default {
  name: "layout-header",
};
</script>

<style lang="scss" scoped>
.container-header {
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>