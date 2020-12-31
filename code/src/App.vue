<template>
  <div id="app">
    <Footer />
  </div>
</template>

<script>
import Footer from "../src/components/Footer";

export default {
  name: "App",
  components: { Footer },
};
</script>

<style lang="scss">
@import url("../src/styles/fonts.scss");
* {
  margin: 0;
}
a {
  text-decoration: none;
  color: white;
}
</style>
