<template>
  <div class="index">
    <div class="indexMainSection">
      <Searchbar 
        :categories="categories" 
        :categorySelected="categorySelected"
        :onChangeCategory="onChangeCategory"
        :onChangeName="filterByName"
        :products="products"
        :height=" windowWidth < 1024 ? '48' : '80'"
      />
      <h1>{{ search }}</h1>
      <div v-if="categorySelected == 'TODOS'" class="products">
        <Product
          v-for="i in 3"
          :key="i"
          :category="categories[i]"
          :products="
            filteredProducts.filter((product) => product.category === categories[i])
          "
        />
      </div>
      <Product v-else :category="categorySelected" :products="filteredProducts" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search {
  height: 100px;
}
.index {
  min-height: 100vh;
}
.indexMainSection {
  padding-top: 10rem;
}
</style>

<script>
import Searchbar from "../../components/store/Searchbar";
import Product from "../../components/store/Products";

export default {
  components: {
    Searchbar,
    Product,
  },
  data() {
    return {
      categories: ["TODOS", "CAMISETAS", "PANTALONES", "LIBROS"],
      categorySelected: "TODOS",
      products: [
        {
          id: "C1",
          name: "Camiseta 1",
          category: "CAMISETAS",
          price: 70000,
          inStock: true,
          thumbnail:
            "https://www.all4o.com/image/cache/data/brand/TrueStory/TRUE-STORY-Elite-orienteering-shirt-Men-Deep-BLUE-800x800.jpg",
        },
        {
          id: "C2",
          name: "Camiseta 2",
          category: "CAMISETAS",
          price: 50000,
          inStock: false,
          thumbnail:
            "https://www.all4o.com/image/cache/data/brand/TrueStory/TRUE-STORY-Elite-orienteering-shirt-Men-Deep-BLUE-800x800.jpg",
        },
        {
          id: "C3",
          name: "Camiseta 3",
          category: "CAMISETAS",
          price: 80000,
          inStock: true,
          thumbnail:
            "https://www.all4o.com/image/cache/data/brand/TrueStory/TRUE-STORY-Elite-orienteering-shirt-Men-Deep-BLUE-800x800.jpg",
        },
        {
          id: "P1",
          name: "pantalon 1",
          category: "PANTALONES",
          price: 30000,
          inStock: false,
          thumbnail:
            "https://contents.mediadecathlon.com/p1786958/k$2b0a8a97ea3b1154f2f3734009451fe2/pantalon-de-montana-trekking-viaje-forclaz-travel100-hombre-gris.jpg?format=auto&f=800x800",
        },
        {
          id: "L1",
          name: "Libro 1",
          category: "LIBROS",
          price: 20000,
          inStock: true,
          thumbnail: "https://cf.shopee.com.my/file/55d577866762adc27e77f7c236da068b",
        },
        {
          id: "L2",
          name: "Libro 2",
          category: "LIBROS",
          price: 10000,
          inStock: true,
          thumbnail: "https://cf.shopee.com.my/file/55d577866762adc27e77f7c236da068b",
        },
      ],
      filteredProducts: [],
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
      newCategory === "TODOS"
        ? (this.filteredProducts = this.products)
        : this.filterCategory(newCategory);
    },
    filterCategory(category) {
      this.filteredProducts = this.products.filter(
        (product) => product.category === category
      );
    },
    filterByName(name) {
      this.categorySelected = "BUSCADOR";
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
