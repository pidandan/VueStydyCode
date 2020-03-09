<template>
  <div>
    <div>父亲：{{ comeFather }}</div>
    <div><button @click="replyMessage">回复父亲</button></div>
  </div>
</template>
<script>
export default {
  name: "SonVue",
  data: function() {
    return {
      message1: "放心，我会好好学习",
      message2: "多喝水多运动多保重身体"
    };
  },
  methods: {
    replyMessage() {
      // 第一个参数对应父组件中方法 后面的为传递的参数
      this.$emit("replyFather", this.message1, this.message2);
    }
  },
  props: ["comeFather"]
};
</script>
