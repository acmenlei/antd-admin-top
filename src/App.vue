<template>
  <basic-layout />
</template>

<script lang="ts">
import BasicLayout from "./layout/basic-layout.vue";
import { queryUserList } from "./api/user";

export default {
  name: "App",
  components: { BasicLayout },
  setup() {
    queryUserList().then((res) => {
      console.log(res);
    });
  },
};
</script>
