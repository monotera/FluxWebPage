<template>
  <div>
    <HomeComponent></HomeComponent>
    <Footer/>
  </div>
</template>

<script>
import Footer from "../src/components/Footer";
import HomeComponent from './components/Home.vue'
export default { components: { 
  Footer,
  HomeComponent,
 } };
</script>

<style lang="scss">
  @import url("../src/styles/fonts.scss");
  body {
    margin: 0;
  }
</style>
