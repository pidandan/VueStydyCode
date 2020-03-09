<template>
  <div class="partDiv">
    <div class="showDiv" v-if="numberFlag > 0 && numberFlag < 1">
      {{ numberFlag }}, 数字区间大于0小于1
    </div>
    <div v-else-if="numberFlag >= 1 && numberFlag < 2">
      {{ numberFlag }} ,数字区间大于等于1小于2
    </div>
    <div v-else>{{ numberFlag }},数字大于2</div>
    <div @click="addNum">加</div>
    <div @click="reduce">减</div>
  </div>
</template>
<script>
export default {
  name: "VueIf",
  data: function() {
    return {
      numberFlag: 1
    };
  },
  props: {},
  methods: {
    addNum() {
      this.numberFlag++;
    },
    reduce() {
      this.numberFlag--;
    }
  }
};
</script>
<style lang="scss" scoped>
.partDiv {
  height: 200px;
  width: 100%;
  .showDiv {
    color: red;
  }
}
</style>
