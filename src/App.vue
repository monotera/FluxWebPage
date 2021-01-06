<template>
  <div>
    <Header />
    <HomeComponent></HomeComponent>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer";
import HomeComponent from "./components/Home.vue";
import Header from "./components/Header.vue";
export default {
  components: {
    Footer,
    HomeComponent,
    Header,
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
