<template>
  <div>
    <div>num的值来自于mixin{{ num }}</div>
  </div>
</template>
<script>
import { myMinix } from "../../mixins/mixin.js";
export default {
  name: "MixinsVue",
  data: function() {
    return {
      message: "我是组件中定义的message",
      bar: "def"
    };
  },
  created() {
    window.console.log("组件钩子被调用");
    window.console.log(this.$data);
  },
  methods: {},
  mixins: [myMinix]
};
</script>
