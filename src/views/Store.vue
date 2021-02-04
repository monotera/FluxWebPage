<template>
  <v-app>
    <StoreHeader/>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="search">
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
import StoreHeader from '../components/store/StoreHeader'
export default {
  components: {
    StoreHeader,
  }
};
</script>

<style lang="scss" scoped></style>
