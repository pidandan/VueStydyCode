<template>
  <div>
    <div>当前钱数{{ money }}</div>
    <div>之前钱数{{ addMoney }}</div>
    <div>本金钱数{{ firstMoney }}</div>
    <button @click="addInfo">增加</button>
  </div>
</template>
<script>
export default {
  name: "WatchVue",
  data: function() {
    return {
      money: 12,
      addMoney: 12,
      firstMoney: 12
    };
  },
  methods: {
    addInfo() {
      this.money = this.money + 2;
    }
  },
  watch: {
    money: function(newVal, oldVal) {
      this.money = newVal;
      this.addMoney = oldVal;
      window.console.log("new: %s, old: %s", newVal, oldVal);
    }
    //该回调会在任何被侦听的对象的 property 改变时被调用，不论其被嵌套多深
    // money: {
    //   handler: function(newVal, oldVal) {
    //     window.console.log("new: %s, old: %s", newVal, oldVal);
    //   },
    //   deep: true
    // }

    //该回调将会在侦听开始之后被立即调用
    // d: {
    //   handler: function(newVal, oldVal) {
    //     window.console.log("new: %s, old: %s", newVal, oldVal);
    //   },
    //   immediate: true
    // },
  }
};
</script>
