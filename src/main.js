import Vue from "vue";
import App from "./App.vue";
//import "./utils/focus";
import "nprogress/nprogress.css";
// import Test from "./components/day3/PublicTest.vue";
Vue.config.productionTip = false;
// 注册全局公共组件
// Vue.component("test", Test);
new Vue({
  render: h => h(App)
}).$mount("#app");
