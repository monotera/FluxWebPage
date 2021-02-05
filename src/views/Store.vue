<template>
  <v-app>
    <StoreHeader/>
    <div class="search">
      <router-view></router-view>
    </div>
    <Footer />
  </v-app>
</template>

<script>
import StoreHeader from '../components/store/StoreHeader';
import Footer from "../components/Footer";
export default {
  components: {
    StoreHeader,
    Footer,
  }
};
</script>

<style lang="scss" scoped></style>
