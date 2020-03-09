<template>
  <div>
    <div v-for="item in messageArray" v-bind:key="item.id">
      <h1>{{ item.name }}</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "VueFor",
  data: function() {
    return {
      messageArray: [
        {
          id: 0,
          name: "Vue课程培训"
        },
        {
          id: 1,
          name: "Angular课程培训"
        },
        {
          id: 2,
          name: "React课程培训"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped></style>
