<template>
  <router-view/>
</template>

<script lang="ts">
import { queryUserList } from "/@/api/user";

export default {
  name: "App",
  setup() {
    queryUserList().then((res) => {
      console.log(res);
    });
  },
};
</script>
