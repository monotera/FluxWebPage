<template>
  <v-app>
    <HomeComponent></HomeComponent>
    <Gallery />
    <Footer />
  </v-app>
</template>

<script>
import Footer from "../src/components/Footer";
import HomeComponent from "./components/Home.vue";
import Gallery from './components/Gallery.vue';
export default {
  components: {
    Footer,
    HomeComponent,
    Gallery,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
a {
  text-decoration: none;
  --v-anchor-base: $main-font-color;
}
</style>