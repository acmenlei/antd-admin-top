<template>
  <div>
    <a-switch
      style="margin: 10px"
      :checked="theme === 'dark'"
      checked-children="暗色调"
      un-checked-children="亮色调"
      @change="changeTheme"
    />
    <a-menu mode="inline" :theme="theme">
      <div v-for="(item, index) of MenuRoutes" :key="index + 1">
        <!-- 一级菜单 只展示children路由菜单 -->
        <div v-if="item.meta.onlyOne">
          <a-menu-item
            v-for="(croute, j) of item.children"
            v-show="!croute.meta.hidden"
            :key="j"
            @click.native="routerPush(croute.path)"
          >
            <template #icon> <icon :src="item.meta.icon" /></template>
            <span>{{ item.name }}</span>
          </a-menu-item>
        </div>
        <!-- 二级菜单 start -->
        <a-sub-menu v-else :key="`sub${index + 1}`">
          <template #icon>
            <icon :src="item.meta.icon" />
          </template>
          <template #title>{{ item.name }}</template>

          <!-- 子菜单 start -->
          <div v-for="(croute, j) of item.children">
            <a-menu-item
              v-if="!croute.meta.hidden"
              :key="`sub${index + j + 2}`"
              @click.native="routerPush(croute.path)"
            >
              <template #icon> <icon :src="croute.meta.icon" /></template>
              <span>{{ croute.name }}</span>
            </a-menu-item>
          </div>
          <!-- 子菜单 end -->
        </a-sub-menu>
        <!-- 二级菜单 end-->
      </div>
    </a-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { theme, changeTheme } from "/@/layout/scripts/theme";
import { MenuRoutes } from "/@/router";
import { routerPush } from "/@/router/scripts/router-trigger";
import Icon from "/@/components/icon/index.vue";

export default defineComponent({
  name: "sider-layout",
  components: { Icon },
  setup() {
    const state = reactive({});

    return {
      theme,
      ...toRefs(state),
      changeTheme,
      MenuRoutes,
      routerPush,
    };
  },
});
</script>