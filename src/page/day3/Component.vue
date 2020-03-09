<template>
  <div>
    <test></test>
  </div>
</template>
<script>
import Test from "../../components/day3/PublicTest";
export default {
  name: "TestComponent",
  data: function() {
    return {};
  },
  components: {
    test: Test
  }
};
</script>
