<template>
  <div id="login">
    login
  </div>
</template>

<script lang="ts">
import { useUser } from "/@/views/login/scripts"
export default {
  name: 'login',
  setup() {
    const { userLogin, userLogout } = useUser();
    return {
      userLogin, userLogout
    }
  }
}
</script>

<style lang="scss" scoped>

</style>