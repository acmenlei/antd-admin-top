<template>
  <a-layout>
    <a-layout-header><layout-header /></a-layout-header>
    <a-layout>
      <a-layout-sider><layout-sider /></a-layout-sider>
      <a-layout-content>
        <!-- <a-breadcrumb style="margin: 16px">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb> -->
        <div style="height: 90vh"></div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import LayoutHeader from "./header-layout.vue";
import LayoutSider from "./sider-layout.vue";
export default {
  name: "basic-layout",
  components: { LayoutHeader, LayoutSider },
};
</script>