<template>
  <v-app>
    <HomeComponent></HomeComponent>
    <Intro />
    <Classes />
    <Footer />
  </v-app>
</template>

<script>
import Footer from "../src/components/Footer";
import HomeComponent from "./components/Home.vue";
import Intro from "./components/Intro"
import Classes from "./components/Classes"
export default {
  components: {
    Footer,
    HomeComponent,
    Intro,
    Classes,
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