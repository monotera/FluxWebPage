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

<style>
* {
  margin : 0;
}

</style>
