<template>
  <div id="not_found">
    <span>4</span>
    <span>0</span>
    <span>4</span>
    ..你所查找的内容不存在~
  </div>
</template>

<script>
export default {
  name: "not_found",
};
</script>

<style lang="scss" scoped>
#not_found{
  font-size: 30px;
  text-align: center;
  margin-top: 100px;
  span {
    &:nth-child(1),
    &:nth-child(3) {
      color: lawngreen;
    }
    &:nth-child(2) {
      color: rgb(0, 119, 255);
    }
  }
}
</style>