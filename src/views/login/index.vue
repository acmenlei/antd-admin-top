<template>
  <div id="container">
    <a-card id="login">
      <a-form :model="userInfo">
        <a-form-item><h2>Vue3后台管理系统解决方案</h2></a-form-item>
        <a-form-item v-bind="validateInfos['ll_username']">
          <a-input
            placeholder="please input your username..."
            v-model:value="userInfo.ll_username"
          >
            <template #prefix>
              <user-outlined type="user" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item v-bind="validateInfos['ll_password']">
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
          <a-button
            style="width: 100%"
            type="primary"
            @click="userLogin(userInfo)"
            >登陆</a-button
          >
        </a-form-item>
      </a-form>
    </a-card>
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
    const { userLogin, userInfo, validateInfos } = useUser();
    return {
      userLogin,
      userInfo,
      validateInfos,
    };
  },
});
</script>

<style lang="scss" scoped>
#container {
  width: 100%;
  height: 100vh;
  background: url(../../assets/images/background.jpg);
  
  background-size: 100% 100%;
  #login {
    width: 350px;
    margin: 0 auto;
    padding: 20px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>