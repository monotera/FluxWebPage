<template>
  <div>
    <HomeComponent></HomeComponent>
    <Intro />
    <Footer />
  </div>
</template>

<script>
import Footer from "../src/components/Footer";
import HomeComponent from "./components/Home.vue";
import Intro from "./components/Intro"
export default {
  components: {
    Footer,
    HomeComponent,
    Intro,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
a {
  text-decoration: none;
  color: $main-font-color;
}
</style>