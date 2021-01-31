<template>
  <div class="index">
    <Header />
    <div class="indexMainSection">
      <Searchbar
        :categories="categories"
        :categorySelected="categorySelected"
        :onChangeCategory="onChangeCategory"
        :onChangeName="filterByName"
        :search="search"
        :height="windowWidth < 1024 ? '48' : '80'"
      />
      <div v-if="categorySelected == 'TODOS'" class="products">
        <Product
          v-for="i in 3"
          :key="i"
          :category="categories[i]"
          :products="products.filter((product) => product.category === categories[i])"
        />
      </div>
      <Product
        v-else
        :category="categorySelected"
        :products="products.filter((product) => product.category === categorySelected)"
      />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.search {
  height: 100px;
}
.indexMainSection {
  padding-top: 10rem;
}
</style>

<script>
import Searchbar from "../../components/store/Searchbar";
import Header from "../../components/Header";
import Product from "../../components/store/Products";
import Footer from "../../components/Footer";

export default {
  components: {
    Searchbar,
    Header,
    Product,
    Footer,
  },
  data() {
    return {
      categories: ["TODOS", "CAMISETAS", "PANTALONES", "LIBROS"],
      categorySelected: "TODOS",
      products: [
        {
          name: "Camiseta 1",
          category: "CAMISETAS",
          price: "70.000",
          inStock: true,
          thumbnail:
            "https://www.all4o.com/image/cache/data/brand/TrueStory/TRUE-STORY-Elite-orienteering-shirt-Men-Deep-BLUE-800x800.jpg",
        },
        {
          name: "Camiseta 2",
          category: "CAMISETAS",
          price: "50.000",
          inStock: false,
          thumbnail:
            "https://www.all4o.com/image/cache/data/brand/TrueStory/TRUE-STORY-Elite-orienteering-shirt-Men-Deep-BLUE-800x800.jpg",
        },
        {
          name: "Camiseta 3",
          category: "CAMISETAS",
          price: "80.000",
          inStock: true,
          thumbnail:
            "https://www.all4o.com/image/cache/data/brand/TrueStory/TRUE-STORY-Elite-orienteering-shirt-Men-Deep-BLUE-800x800.jpg",
        },
        {
          name: "pantalon 1",
          category: "PANTALONES",
          price: "30.000",
          inStock: false,
          thumbnail:
            "https://contents.mediadecathlon.com/p1786958/k$2b0a8a97ea3b1154f2f3734009451fe2/pantalon-de-montana-trekking-viaje-forclaz-travel100-hombre-gris.jpg?format=auto&f=800x800",
        },
        {
          name: "Libro 1",
          category: "LIBROS",
          price: "20.000",
          inStock: true,
          thumbnail: "https://cf.shopee.com.my/file/55d577866762adc27e77f7c236da068b",
        },
        {
          name: "Libro 2",
          category: "LIBROS",
          price: "10.000",
          inStock: true,
          thumbnail: "https://cf.shopee.com.my/file/55d577866762adc27e77f7c236da068b",
        },
      ],
      filteredProducts: [],
      search: "",
      windowWidth: 0,
    };
  },
  created() {
    this.filteredProducts = this.products;
    this.setWindowWidth();
    window.addEventListener("resize", () => {
      this.setWindowWidth();
    });
  },
  methods: {
    onChangeCategory(newCategory) {
      this.categorySelected = newCategory;
      this.filterCategory(newCategory);
    },
    filterCategory(category) {
      if (category == "TODOS") {
        return (this.filteredProducts = this.products);
      }
      this.filteredProducts = this.products.filter(
        (product) => product.category === category
      );
    },
    filterByName(name) {
      if (!name) {
        this.filteredProducts = this.products;
        return;
      }
      this.filteredProducts = this.products.filter((product) => {
        return product.name.toLowerCase().includes(name.trim().toLowerCase());
      });
    },
    setWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>
