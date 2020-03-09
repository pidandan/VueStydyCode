<template>
  <div>
    <div v-html="htmlValue"></div>
  </div>
</template>
<script>
export default {
  name: "VueHtml",
  data: function() {
    return {
      htmlValue: "<div @click='test'>我是通过data进行html绑定显示的</div>"
    };
  },
  methods: {
    test() {
      alert("成功");
    }
  }
};
</script>
<style lang="scss" scoped></style>
