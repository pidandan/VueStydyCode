<template>
  <div>
    <div>{{ reversedMessage }}</div>
    <div>{{ reverseMessageList }}</div>
  </div>
</template>
<script>
export default {
  name: "ComputedVue",
  data: function() {
    return {
      message: "Hello",
      messageList: [
        "天气不错我们去散步",
        "今天天气不错",
        "我们要去散步天气怎么样"
      ]
    };
  },
  components: {},
  methods: {},
  computed: {
    // 计算属性的 getter
    reversedMessage: function() {
      // `this` 指向 vm 实例
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    reverseMessageList: function() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.messageList.reverse();
    }
  }
};
</script>
