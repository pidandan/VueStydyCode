<template>
  <div id="app">
    <MixinsVueOther />
  </div>
</template>

<script>
//v-if的用法
//import VueIf from "./page/day1/VueIf.vue";
//v-show的用法
//import VueShow from './page/day1/VueShow';
//V-for的用法
//import VueFor from "./page/day1/VueFor";
//计算属性的用法
//import VueComputed from "./page/day1/VueComputed";
//v-text进行数据显示
// import VueText from "./page/day1/VueText";
//v-html进行数据显示
//import VueHtml from "./page/day1/VueHtml";
// v-on的使用
//import VueClick from "./page/day1/VueClick";
// v-model的使用
// import VueModel from "./page/day1/VueModel";
// v-bind的使用
//import VueBind from "./page/day1/VueBind";
// 自定义指令的使用
//import VueDirective from "./page/day2/VueDirective";
// 自定义指令的使用(生命周期函数介绍)
// import VueDirectiveLife from "./page/day2/VueDirectiveLife";
// vue生命周期函数
// import VueSet from "./page/day2/VueSet";
// vue中全局组件以及局部组件
// import ComponentView from "./page/day3/Component";
// 父子组件之间传递值
// import FatherVue from "./page/day3/FatherVue";
// 计算属性
// import ComputedVue from "./page/day3/ComputedVue";
// vue中数据检测
// import WatchVue from "./page/day3/WatchVue";
// mixins的使用
// import MixinsVue from "./page/day3/MixinsVue";
// mixins中的选项合并
import MixinsVueOther from "./page/day3/MixinsVue2";
export default {
  name: "app",
  components: {
    // VueIf,
    // VueShow,
    // VueFor,
    // VueComputed,
    // VueText,
    // VueHtml,
    // VueClick,
    // VueModel,
    // VueBind,
    // VueDirectiveLife,
    // VueSet,
    // ComponentView,
    // FatherVue,
    // ComputedVue,
    // WatchVue,
    // MixinsVue,
    MixinsVueOther
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
