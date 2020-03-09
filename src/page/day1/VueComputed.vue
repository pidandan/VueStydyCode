<template>
  <div>{{ reversedMessage }}</div>
</template>
<script>
export default {
  name: "VueComputed",
  data: function() {
    return {
      message: "HELLO"
    };
  },
  computed: {
    reversedMessage: function() {
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>
<style lang="scss" scoped></style>
