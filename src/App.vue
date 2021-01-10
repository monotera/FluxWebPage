<template>
  <div>
    <Header />
    <HomeComponent></HomeComponent>
    <Intro />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer";
import HomeComponent from "./components/Home.vue";
import Header from "./components/Header.vue";
import Intro from "./components/Intro";
export default {
  components: {
    Footer,
    HomeComponent,
    Header,
    Intro,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  @media screen and (max-width: $breakpoint-tablet) {
    overflow-x: hidden;
  }
}
a {
  text-decoration: none;
  color: $main-font-color;
}
</style>
