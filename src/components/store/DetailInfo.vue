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
    <ul class="detailSizeSection">
      <li
        v-for="(size, index) in sizes"
        :key="index"
        @click="sizeSelector(index)"
        :class="{ active: isActive == index }"
      >
        {{ size }}
      </li>
    </ul>
    <v-column>
      <v-text-field class="centered-input" type="number"></v-text-field>
      <v-btn class="detailButton">Comprar</v-btn>
    </v-column>
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
.centered-input {
  width: 20rem;
  font-size: 1.2rem;
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
