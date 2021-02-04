<template>
  <v-app>
    <Header />
    <div class="search">
      <router-view></router-view>
    </div>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "../components/Footer";
import Header from "../components/Header";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
