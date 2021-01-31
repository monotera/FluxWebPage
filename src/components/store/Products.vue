<template>
  <div class="productSection">
    <div class="productHeader">
      <h1>{{ category }}</h1>
      <i @click="unfold" class="fas fa-chevron-down"></i>
    </div>
    <v-expand-transition>
      <div v-show="isClose" class="productCards" :class="{ open: isClose }">
        <ProductCard v-for="product in products" :key="product" :product="product" />
      </div>
    </v-expand-transition>
  </div>
</template>

<script>
import ProductCard from "./ProductsCard";
export default {
  props: {
    category: String,
    products: [],
  },
  components: {
    ProductCard,
  },
  data() {
    return {
      isClose: true,
    };
  },
  methods: {
    unfold() {
      this.isClose = this.isClose ? false : true;
    },
  },
};
</script>

<style lang="scss" scoped>
.productCards {
  margin: 5rem 0;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  transition: all 0.5s ease-in;
}

.productHeader {
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid black;
  width: 100%;

  i {
    justify-self: flex-end;
    color: $detail-color;
    margin-right: 1rem;
  }
  h1 {
    justify-self: center;
    margin-left: 1rem;
  }
}
.productSection {
  margin: 5rem 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  transition: all 0.3s ease-in;
  @media screen and (max-width: $breakpoint-desktopSmall) {
    margin: 5rem 3rem;
  }
  @media screen and (max-width: $breakpoint-tablet) {
    margin: 5rem 1rem;
  }
}
</style>
