<template>
  <div id="login">
    <a-form :model="userInfo">
      <a-form-item label="username:" v-bind="validateInfos['ll_username']">
        <a-input
          placeholder="please input your username..."
          v-model:value="userInfo.ll_username"
        >
          <template #prefix>
            <user-outlined type="user" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item label="password:" v-bind="validateInfos['ll_password']">
        <a-input-password
          placeholder="please input your password..."
          v-model:value="userInfo.ll_password"
          type="password"
        >
          <template #prefix>
            <lock-outlined type="lock" />
          </template>
        </a-input-password>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="userLogin(userInfo)">登陆</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useUser } from "/@/views/login/scripts";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  name: "login",
  components: { UserOutlined, LockOutlined },
  setup() {
    const { userLogin, userLogout, userInfo, validateInfos } = useUser();
    return {
      userLogin,
      userLogout,
      userInfo,
      validateInfos,
    };
  },
});
</script>

<style lang="scss" scoped>
#login {
  width: 300px;
  height: 400px;
  margin: 0 auto;
  margin-top: 100px;
}
</style>