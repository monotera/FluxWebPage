<template>
  <v-app>
    <h1>Store</h1>
    <div class="search">
      <Searchbar 
      :categories="categories" 
      :categorySelected="categorySelected"
      :onChangeCategory="onChangeCategory"
      :onChangeName="filterByName"
      :search="search"
      :height=" windowWidth < 1024 ? '48' : '80'"
      />
    </div>
  </v-app>
</template>

<script>
import Searchbar from '../components/store/Searchbar'
export default {
  components: {
    Searchbar,
  },
  data() {
    return {
        categories: ['CAMISETAS', 'PANTALONES', 'LIBROS', 'TODOS'],
        categorySelected: 'TODOS',
        products: [
          {
            name: 'Camiseta 1',
            category: 'CAMISETAS',
          },
          {
            name: 'Camiseta 2',
            category: 'CAMISETAS',
          },
          {
            name: 'Libro 1',
            category: 'LIBROS',
          },
        ],
        filteredProducts : [],
        search: '',
        windowWidth: 0,
    }
  },
  created() {
    this.filteredProducts = this.products;
    this.setWindowWidth()
    window.addEventListener('resize', () => {
      this.setWindowWidth()
    })
  },
  methods: {
    onChangeCategory(newCategory) {
      this.categorySelected = newCategory;
      this.filterCategory(newCategory)
    },
    filterCategory(category) {
      if (category == 'TODOS') {
        return this.filteredProducts = this.products;
      }
      this.filteredProducts = this.products.filter(product => product.category === category);
    },
    filterByName(name) {
      console.log(name)
      if (!name) {
        this.filteredProducts = this.products;
        return;
      }
      console.log(name)
      this.filteredProducts = this.products.filter(product => {
        return (product.name.toLowerCase().includes(name.trim().toLowerCase()));
      })
    },
    setWindowWidth() {
      this.windowWidth = window.innerWidth
    },
  }
};
</script>

<style lang="scss" scoped>
  .search {
    height: 100px;
  }
</style>
