<template>
  <section class="detailInfo">
    <p class="detailInfo-title">PRODUCT NAME</p>
    <p class="detailInfo-price">$50.000</p>
    <div class="detailRaiting">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
    </div>
    <div class="detailInStock">
      <i class="fas fa-circle"></i>
      <p>InStock</p>
    </div>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    <v-row>
      <v-column>
        <v-select class="detailsInput" :items="sizes" label="Talla"></v-select>
        <v-text-field label="Cantidad" class="detailsInput" type="number"></v-text-field>
      </v-column>
    </v-row>
    <v-btn class="detailButton">Comprar</v-btn>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isActive: -1,
      sizes: ["XS", "S", "M", "L", "XL"],
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
.row {
  font-size: 1.2rem;
  margin: 0;
}

.detailInfo {
  font-family: $detail-info-font;

  .detailInfo-title,
  .detailInfo-price {
    font-family: $detail-title-font;
    font-size: 1.5rem;
  }
  .detailInfo-title {
    border-bottom: 2px solid lightseagreen;
    width: 15rem;
    margin: 0.5rem 0;
  }
  .detailButton {
    background-color: lightseagreen;
    color: white;
    height: 3.5rem;
    width: 15rem;
    margin: 1rem 0;
    font-family: $detail-title-font;
  }
  .detailRaiting {
    color: lightseagreen;
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
      color: lime;
      padding-right: 0.5rem;
    }
    p {
      margin: 0;
      font-family: $detail-inStock-font;
    }
  }
  .detailSizeSection {
    list-style-type: none;
    display: flex;
    flex-flow: row wrap;
    width: 80%;
    padding: 0;
    li {
      border: 1px solid black;
      padding: 15px 60px;
      margin: 1rem;
      margin-left: 0;
      &:hover {
        color: white;
        background-color: lightseagreen;
        cursor: pointer;
        opacity: 80%;
      }
    }
    .active {
      background-color: lightseagreen;
      color: white !important;
      opacity: 80%;
    }
  }
}
</style>
