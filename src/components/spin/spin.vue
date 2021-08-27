<template>
  <a-spin :spinning="spinning" size="large" tip="加载中...">
    <div v-show="spinning" class="container"></div>
  </a-spin>
</template>

<script lang="ts">
import { spinning } from "./scripts";

export default {
  name: "spin",
  setup() {
    return {
      spinning,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 90vh;
  background: rgba(0, 0, 0, 0.5);
}
</style>