<template>
  <home-template>
    <h1>技术栈</h1>
    <hr />
    <h2>前端</h2>
    <p>mvvc框架Vue ,组件库Vuetify ,文本编辑器Tinymce,</p>
    <p>nuxt.实现ssr，github action 实现自动部署</p>
    <h2>后端</h2>
    <p>SpringBoot,mybatis,jsonwebtoken</p>
  </home-template>
</template>
<script>
import homeTemplate from "../components/home-template.vue";
export default {
  components: { homeTemplate },
  head() {
    return {
      title: "关于",
    };
  },
};
</script>
