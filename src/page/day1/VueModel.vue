<template>
  <div>
    <h3>双向数据绑定{{ message }}</h3>
    <p>v-model:<input type="text" v-model="message" /></p>
    <br />
    <h3>v-model懒加载{{ lazyMessage }}</h3>
    <p>v-model.lazy:<input type="text" v-model.lazy="lazyMessage" /></p>
    <br />
    <h3>v-model数字{{ numberMessage }}</h3>
    <p>v-model.number:<input type="text" v-model.number="numberMessage" /></p>
    <br />
    <h3>v-model去掉前后空格{{ trimMessage }}</h3>
    <p>v-model.trim:<input type="text" v-model.trim="trimMessage" /></p>
    <hr />
    <h3>文本域</h3>
    <textarea v-model="textMessage"></textarea>
    <h3>多选按钮绑定一个值</h3>
    <input type="checkbox" v-model="isTrue" />
    <label for="isTrue">{{ isTrue }}</label>
    <h3>多选绑定一个数组</h3>
    <div>
      <input
        type="checkbox"
        id="zhangsan"
        value="zhangsan"
        v-model="web_Names"
      />
      <label for="zhangsan">zhangsan</label><br />
      <input type="checkbox" id="lisi" value="lisi" v-model="web_Names" />
      <label for="lisi">lisi</label><br />
      <input type="checkbox" id="wangwu" value="wangwu" v-model="web_Names" />
      <label for="wangwu">wangwu</label>
      <p>{{ web_Names }}</p>
    </div>
    <h3>单选按钮绑定</h3>
    <input type="radio" id="one" value="男" v-model="sex" />
    <label for="one">男</label>
    <input type="radio" id="two" value="女" v-model="sex" />
    <label for="one">女</label>
    <p>{{ sex }}</p>
  </div>
</template>
<script>
export default {
  name: "VueModel",
  data: function() {
    return {
      message: "初始化",
      lazyMessage: "懒加载",
      numberMessage: 0,
      trimMessage: "hello",
      textMessage: "文本区域",
      isTrue: true,
      web_Names: [],
      sex: "男"
    };
  }
};
</script>
<style lang="scss" scoped></style>
