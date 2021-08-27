<template>
  <a-layout>
    <a-layout-header><layout-header /></a-layout-header>
    <a-layout>
      <a-layout-sider :theme="theme"><layout-sider /></a-layout-sider>
      <a-layout-content>
        <!-- <a-breadcrumb style="margin: 16px">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb> -->
        <div style="height: 90vh">
          <spin />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import LayoutHeader from "./header-layout.vue";
import LayoutSider from "./sider-layout.vue";
import Spin from "../components/spin/spin.vue";
import { theme } from "./scripts/theme";

export default {
  name: "basic-layout",
  components: { LayoutHeader, LayoutSider, Spin },
  setup() {
    return {
      theme,
    };
  },
};
</script>