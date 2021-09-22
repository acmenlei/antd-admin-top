<template>
  <div>
    <a-switch
      style="margin: 10px"
      :checked="theme === 'dark'"
      checked-children="暗色调"
      un-checked-children="亮色调"
      @change="changeTheme"
    />
    <!-- 一级菜单 -->
    <a-menu mode="inline" :theme="theme">
      <div v-for="(item, index) in MENU_CONFIGURA" :key="index">
        <!-- 只展示children里面的内容 -->
        <a-menu-item v-if="item.meta.onlyOne" :key="index">
          <template #icon> {{ item.meta.icon }}&nbsp; </template>
          {{ item.name }}
        </a-menu-item>
        <!-- 二级菜单 -->
        <a-sub-menu v-else :key="`sub${index}`">
          <template #icon>
            <template #icon> {{ item.meta.icon }}&nbsp; </template>
          </template>
          <template #title>{{ item.name }}</template>
          <!-- 子菜单 -->
          <a-menu-item
            v-for="(croute, j) in item.children"
            v-if="!croute.meta.hidden"
            :key="j"
            >{{ croute.name }}</a-menu-item
          >
        </a-sub-menu>
      </div>
    </a-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { theme, changeTheme } from "./scripts/theme";
import { MENU_CONFIGURA } from "/@/router";

export default defineComponent({
  name: "sider-layout",
  setup() {
    const state = reactive({MENU_CONFIGURA});

    return {
      theme,
      ...toRefs(state),
      changeTheme,
    };
  },
});
</script>