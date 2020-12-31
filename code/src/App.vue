<template>
  <div>
    <h1>Hello world</h1>
    <Footer />
  </div>
</template>

<script>
import Footer from "../src/components/Footer";
export default { components: { Footer } };
</script>

<style lang="scss">
@import url("../src/styles/fonts.scss");
h1 {
  color: $prueba;
  font-family: "fontMontserratBold", sans-serif;
}
</style>
