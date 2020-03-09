<template>
  <div>
    <div><input type="text" v-model="onceMessage" v-focus="color" /></div>
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
      bind: function(el, binding) {
        // window.console.log("el的值为>>>>>>", el);
        el.focus();
        // el.style = "color:red";
        el.style = "color:" + binding.value;
        //被绑定
        window.console.log("1 - bind");
      },
      inserted: function() {
        //绑定到节点
        window.console.log("2 - inserted");
      },
      update: function() {
        //组件更新
        window.console.log("3 - update");
      },
      componentUpdated: function() {
        //组件更新完成
        window.console.log("4 - componentUpdated");
      },
      unbind: function() {
        //解绑
        window.console.log("1 - bind");
      }
    }
  }
};
</script>
<style lang="scss" scoped></style>
