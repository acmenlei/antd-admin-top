<template>
  <spin />
  <router-view />
</template>

<script lang="ts">
import Spin from "/@/components/spin/spin.vue";
export default {
  name: "App",
  components: { Spin },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
