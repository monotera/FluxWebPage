<template>
  <v-app>
    <Header />
    <HomeComponent />
    <Intro />
    <Gallery />
    <Contact />
    <Footer />
  </v-app>
</template>

<script>
import Footer from "./components/Footer";
import HomeComponent from "./components/Home.vue";
import Header from "./components/Header.vue";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery.vue";

export default {
  components: {
    Footer,
    HomeComponent,
    Header,
    Gallery,
    Intro,
    Contact,
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
  --v-anchor-base: $main-font-color;
}
</style>
