<template>
  <div>
    <v-card class="mx-auto" max-width="300" color="white" hover
      ><router-link :to="('store/' + product.name).replace(/\s/g, '')">
        <v-img
          :lazy-src="product.thumbnail"
          :src="product.thumbnail"
          height="300"
          width="300"
          position="right right"
          ><template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row> </template
        ></v-img>
        <v-card-title class="productTittle"> {{ product.name }}</v-card-title>
        <v-card-subtitle>
          <p class="productPrice">${{ product.price }}</p>
          <div class="detailInStock">
            <i :class="product.inStock ? 'inStock' : 'empty'" class="fas fa-circle"></i>
            <p v-if="product.inStock">InStock</p>
            <p v-else>Empty</p>
          </div>
        </v-card-subtitle>
      </router-link>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<style lang="scss" scoped>
.productTittle {
  border-bottom: 2px solid $detail-color;
  padding: 0;
  width: 50%;
  margin-top: 1rem;
  margin-left: 1rem;
  font-family: $product-title-font;
}
.productPrice {
  margin: 0;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  padding: 0;
  width: 40%;
  font-family: $product-subTitle-font;
}
.detailInStock {
  display: flex;
  width: 4.5vw;
  align-items: center;
  i {
    padding-right: 0.5rem;
  }
  .inStock {
    color: lime;
  }
  .empty {
    color: rgb(247, 72, 72);
  }
  p {
    margin: 0;
    font-family: $detail-inStock-font;
  }
}
</style>
