<template>
  <div>
    <ul>
      <li v-for="item in arrayList" v-bind:key="item.id">{{ item }}</li>
    </ul>
    <button @click="addItem"></button>
  </div>
</template>
<script>
export default {
  name: "VueSet",
  data: function() {
    return {
      arrayList: []
    };
  },
  methods: {
    addItem() {
      this.arrayList.push("a");
    }
  },
  beforeCreate: function() {
    window.console.log("1-beforeCreate 初始化之后");
  },
  created: function() {
    window.console.log("2-created 创建完成");
  },
  beforeMount: function() {
    window.console.log("3-beforeMount 挂载之前");
  },
  mounted: function() {
    window.console.log("4-mounted 被创建");
  },
  beforeUpdate: function() {
    window.console.log("5-beforeUpdate 数据更新前");
  },
  updated: function() {
    window.console.log("6-updated 被更新后");
  },
  activated: function() {
    window.console.log("7-activated");
  },
  deactivated: function() {
    window.console.log("8-deactivated");
  },
  beforeDestroy: function() {
    window.console.log("9-beforeDestroy 销毁之前");
  },
  destroyed: function() {
    window.console.log("10-destroyed 销毁之后");
  }
};
</script>
<style lang="scss" scoped></style>
