<template>
  <a-card id="article-list">
    <a-table bordered :data-source="list" :columns="columns">
     
    </a-table>
  </a-card>
</template>

<script lang="ts">
import { initArticle, articleState } from "./scripts";
import { toRefs } from "vue";

export default {
  name: "article-list",
  setup() {
    initArticle();
    return {
      ...toRefs(articleState),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>