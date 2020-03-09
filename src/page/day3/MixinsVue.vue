<template>
  <div>
    <div>混入中num的值{{ num }}</div>
  </div>
</template>
<script>
import { myMinix } from "../../mixins/mixin.js";
export default {
  name: "MixinsVue",
  data: function() {
    return {
      // num: 0
    };
  },
  created() {
    window.console.log("对混入的数据进行改变", this.num);
    //this.num++;
    window.console.log("进行累计之后", this.num);
  },
  methods: {},
  mixins: [myMinix]
};
</script>
