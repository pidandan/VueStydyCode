<template>
  <div>
    <div><input type="text" v-model="onceMessage" v-focus="color" /></div>
    <div v-ak="color">{{ onceMessage }}</div>
  </div>
</template>
<script>
export default {
  name: "VueDirective",
  data: function() {
    return {
      onceMessage: "第一次",
      color: "green"
    };
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function(el, binding) {
        // window.console.log("el的值为>>>>>>", el);
        el.focus();
        // el.style = "color:red";
        el.style = "color:" + binding.value;
      }
    },
    ak: function(el, binding, vnode) {
      el.style = "color:" + binding.value;
      window.console.log("el的值为>>>>>>", el);
      window.console.log("binding的值为>>>", binding);
      window.console.log("vnode的值为", vnode);
    }
  }
};
</script>
<style lang="scss" scoped></style>
