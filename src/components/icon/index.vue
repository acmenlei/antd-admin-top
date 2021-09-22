<template>
  <i
    :class="`config iconfont icon-${src}`"
    :style="`color: ${theme === 'dark' ? 'white' : '#333'}`"
    alt="icon"
  />
</template>

<script>
import { toRefs } from "vue";
import { theme } from "/@/layout/scripts/theme";
export default {
  name: "icon",
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return {
      ...toRefs(props),
      theme,
    };
  },
};
</script>

<style lang="scss" scoped>
.config {
  font-size: 18px;
}
</style>