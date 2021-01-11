<template>
  <div>
    <HomeComponent></HomeComponent>
    <Intro />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Footer from "../src/components/Footer";
import HomeComponent from "./components/Home.vue";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
export default {
  components: {
    Footer,
    HomeComponent,
    Intro,
    Contact,
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
