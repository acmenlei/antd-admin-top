<template>
  <a-layout>
    <a-layout-header style="transition: background .4s;" :class="theme == 'light' && 'ligth-theme'">
      <layout-header />
    </a-layout-header>
    <a-layout>
      <a-layout-sider :theme="theme"><layout-sider /></a-layout-sider>
      <a-layout-content>
        <spin />
        <div style="height: 90vh">
          <a-breadcrumb style="margin: 16px">
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item>List</a-breadcrumb-item>
            <a-breadcrumb-item>App</a-breadcrumb-item>
          </a-breadcrumb>
          <router-view></router-view>
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
<style lang="scss" scoped>
  .ligth-theme {
    background: #1991FF;
  }
</style>