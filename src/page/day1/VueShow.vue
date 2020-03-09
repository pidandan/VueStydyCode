<template>
  <div class="partDiv">
    <div class="showDiv" v-show="isShow">你好，此处演示V-show的用法</div>
    <div @click="showImage">显示/隐藏</div>
  </div>
</template>
<script>
export default {
  name: "VueShow",
  data: function() {
    return {
      isShow: false
    };
  },
  props: {},
  methods: {
    showImage() {
      let isShowFlag = this.isShow;
      this.isShow = !isShowFlag;
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
