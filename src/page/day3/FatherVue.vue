<template>
  <div>
    <sonVue :comeFather="toSon" @replyFather="getSonMessage"> </sonVue>
    <div>儿子：{{ sonMessage1 }}</div>
    <div>儿子：{{ sonMessage2 }}</div>
  </div>
</template>
<script>
import SonVue from "./SonVue";
export default {
  name: "FatherVue",
  data: function() {
    return {
      toSon: "儿子，好好学习天天向上",
      sonMessage1: "...",
      sonMessage2: "..."
    };
  },
  methods: {
    getSonMessage(message1, message2) {
      this.sonMessage1 = message1;
      this.sonMessage2 = message2;
    }
  },
  components: {
    sonVue: SonVue
  }
};
</script>
