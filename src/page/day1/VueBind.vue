<template>
  <div>
    <img :src="imgSrc" width="200px" />
    <br />
    <h3>绑定css样式1</h3>
    <div :class="sunStyle" class="test">阳光暖暖</div>
    <br />
    <h3>根据变量的true或false确定样式</h3>
    <div :class="{ sunStyle: isOk }" class="test">阳光暖暖</div>
    <br />
    <h3>绑定class中数组</h3>
    <div :class="[classA, classB]" class="test">绑定class中的数组</div>
    <br />
    <h3>绑定class中使用三元表达式判断</h3>
    <div :class="isOk ? classA : classB">绑定class中使用三元表达式判断</div>
    <br />
    <h3>绑定style</h3>
    <div :style="{ color: 'red', fontSize: '12px' }">绑定style</div>
    <br />
    <h3>用对象绑定style样式</h3>
    <div :style="styleObj">用对象绑定style样式</div>
    <br />
    <h3>v-pre指令</h3>
    <div v-pre>{{ imgSrc }}</div>
    <br />
    <h3>v-cloak指令</h3>
    <div v-pre>在vue渲染完指定的整个DOM后才进行显示</div>
    <br />
    <h3>v-once指令</h3>
    <div v-once>{{ onceMessage }}</div>
    <div><input type="text" v-model="onceMessage" v-focus /></div>
  </div>
</template>
<script>
export default {
  name: "VueBind",
  data: function() {
    return {
      imgSrc: "http://baidu.com/wp-content/uploads/2017/02/vue01-2.jpg",
      sunStyle: "sunStyle",
      isOk: true,
      classA: "classA",
      classB: "classB",
      styleObj: {
        color: "red",
        fontSize: "26px"
      },
      onceMessage: "第一次"
    };
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function(el, binding) {
        window.console.log("el的值为", el);
        window.console.log("binding的值为", binding);
        // el.focus();
        el.style = "color:red";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.sunStyle {
  color: red;
  font-size: 14px;
}
.test {
  font-weight: 600;
}
.classA {
  color: blue;
}
.classB {
  font-size: 26px;
}
</style>
