<template>
  <div>
    <h1>{{ number }}</h1>
    <button @click="add">加</button>
    <button @click="reduce">减</button>
  </div>
</template>
<script>
export default {
  name: "VueClick",
  data: function() {
    return {
      number: 0
    };
  },
  methods: {
    add() {
      this.number++;
    },
    reduce() {
      this.number--;
    }
  }
};
</script>
<style lang="scss" scoped></style>
