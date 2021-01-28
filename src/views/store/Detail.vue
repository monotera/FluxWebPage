<template>
  <section>
    <Header />
    <div class="main-container">
      <div class="left-section">
        <div class="detailIndex">
          <router-link class="detailIndexLink" to="/store">INICIO </router-link>
          <i class="fas fa-chevron-right"></i>
          <router-link class="detailIndexLink" to="/store/cart">PRODUCTOS </router-link>
          <i class="fas fa-chevron-right"></i>
          <p>{{ productName }}</p>
        </div>
        <carousel :starting-image="0" :images="images"></carousel>
      </div>
      <div class="rigth-section">
        <DetailInfo
          :sizes="sizes"
          :rating="rating"
          :productName="productName"
          :qtyInStock="qtyInStock"
          :price="price"
          :detailInfo="detailInfo"
        />
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
import Carousel from "../../components/store/Carousel.vue";
import DetailInfo from "../../components/store/DetailInfo.vue";
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
export default {
  components: { Carousel, DetailInfo, Header, Footer },
  data() {
    return {
      productName: "CAMISA AZUL",
      sizes: ["XS", "S", "M", "L", "XL"],
      rating: 4,
      qtyInStock: 5,
      price: "50.000",
      detailInfo:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      images: [
        {
          id: "1",
          big:
            "https://www.all4o.com/image/cache/data/brand/TrueStory/TRUE-STORY-Elite-orienteering-shirt-Men-Deep-BLUE-800x800.jpg",
          thumb:
            "https://www.all4o.com/image/cache/data/brand/TrueStory/TRUE-STORY-Elite-orienteering-shirt-Men-Deep-BLUE-150x150.jpg",
        },
        {
          id: "2",
          big:
            "https://www.all4o.com/image/cache/data/brand/TrueStory/TRUE-STORY-Classic-o-shirt-MEN-BLACK-STERLING-back-800x800.jpg",
          thumb:
            "https://www.all4o.com/image/cache/data/brand/TrueStory/TRUE-STORY-Classic-o-shirt-MEN-BLACK-STERLING-back-150x150.jpg",
        },
        {
          id: "3",
          big:
            "https://www.all4o.com/image/cache/data/brand/TrueStory/TRUE%20STORY-Classic-o-shirt-WOMEN-LAVENDER-PIE-800x800.jpg",
          thumb:
            "https://www.all4o.com/image/cache/data/brand/TrueStory/TRUE%20STORY-Classic-o-shirt-WOMEN-LAVENDER-PIE-back-150x150.jpg",
        },
        {
          id: "4",
          big:
            "https://www.all4o.com/image/cache/data/brand/FRENSON/Shirts/frenson-o-division-orienteering-mesh-shirt-white-front-800x800.jpg",
          thumb:
            "https://www.all4o.com/image/cache/data/brand/FRENSON/Shirts/frenson-o-division-orienteering-mesh-shirt-white-front-150x150.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 0;
  @media screen and (max-width: $breakpoint-desktop) {
    flex-direction: column;
    margin: 0 1.5rem;
  }
}

.left-section {
  padding: 2rem;
  margin: 0 2rem;
  padding-left: 10rem;
  @media screen and (max-width: $breakpoint-desktopSmall) {
    padding: 2rem 0;
  }
  .detailIndex {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-family: $detail-index-font;
    font-size: 0.9rem;
    p,
    i {
      margin-bottom: 0;
      color: $main-links-color;
      padding: 1rem;
    }
    .detailIndexLink:hover {
      color: $main-links-color;
    }
  }
}
</style>
