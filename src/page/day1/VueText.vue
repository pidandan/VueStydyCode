<template>
  <div>
    <div>我是通过双花括号进行显示的》》》》,{{ message }}</div>
    <div v-text="message"></div>
  </div>
</template>
<script>
export default {
  name: "VueText",
  data: function() {
    return {
      message: "我是有故事的人"
    };
  }
};
</script>
<style lang="scss" scoped></style>
