<template>
  
  <div id="app">
    <Home/>
    <Footer/>
  </div>
  
</template>

<script>

import Home from '../src/views/Home'
import Footer from '../src/components/Footer'

export default {
  name: 'App',
  components: { Home, Footer },
 
}
</script>

<style lang = "scss">
@import url("../src/styles/fonts.scss");
* {
  margin : 0;
}
h1 {
  color: $prueba;
  font-family: "fontMontserratBold", sans-serif;
}
</style>
