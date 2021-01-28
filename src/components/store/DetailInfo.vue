<template>
  <section class="detailInfo">
    <p class="detailInfo-title">{{ productName }}</p>
    <div class="prueba"></div>
    <p class="detailInfo-price">${{ price }}</p>
    <div class="detailRaiting">
      <i v-for="i in rating" :key="i" class="fas fa-star"></i>
    </div>
    <div class="detailInStock">
      <i :class="qtyInStock > 0 ? 'inStock' : 'empty'" class="fas fa-circle"></i>
      <p v-if="qtyInStock > 0">InStock</p>
      <p v-else>Empty</p>
    </div>
    <p class="detailInfo">
      {{ detailInfo }}
    </p>
    <v-form v-model="isButtonDisable" class="detailSelector">
      <v-select
        class="detailsInput"
        :items="sizes"
        label="Talla"
        v-model="size"
      ></v-select>
      <v-text-field
        v-model="qty"
        :rules="numberValidation"
        label="Cantidad"
        class="detailsInput"
        type="number"
      ></v-text-field
      ><v-btn type="submit" :disabled="!isButtonDisable" class="detailButton"
        >Comprar</v-btn
      >
    </v-form>
  </section>
</template>

<script>
export default {
  props: {
    sizes: [],
    rating: Number,
    productName: String,
    qtyInStock: Number,
    price: String,
    detailInfo: String,
  },
  data() {
    return {
      isActive: -1,
      qty: "",
      talla: "",
      size: "",
      isButtonDisable: true,
      numberValidation: [
        (v) => !!v || "El campo es obligatorio",
        (v) => v <= this.qtyInStock || "No hay suficientes elementos",
      ],
    };
  },
  methods: {
    sizeSelector(el) {
      this.isActive = el;
    },
  },
};
</script>

<style lang="scss" scoped>
.detailInfo {
  font-family: $detail-info-font;
  display: flex;
  flex-direction: column;
  .detailInfo-title,
  .detailInfo-price {
    font-family: $detail-title-font;
    font-size: 1.5rem;
  }
  .detailInfo-title {
    border-bottom: 2px solid $detail-color;
    width: 50%;
    margin: 0.5rem 0;
    @media screen and (max-width: $breakpoint-tablet - 2px) {
      width: 100%;
      text-align: center;
    }
  }
  .detailButton {
    background-color: $detail-color;
    color: white;
    height: 3.5rem;
    width: 15rem;
    margin: 1rem 0;
    font-family: $detail-title-font;
    @media screen and (max-width: $breakpoint-tablet - 2px) {
      width: 100%;
    }
  }
  .detailRaiting {
    color: $detail-color;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 5vw;
  }
  .detailInStock {
    display: flex;
    width: 4.5vw;
    align-items: center;

    margin: 1rem 0;
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
  .detailSelector {
    font-size: 1.2rem;
    .detailsInput {
      width: 50%;
      @media screen and (max-width: $breakpoint-tablet) {
        width: 80%;
      }
    }
  }
}
</style>
