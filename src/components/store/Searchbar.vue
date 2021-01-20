<template>
    <div id="searchbar">
        <v-select 
        :items="categories"
        >
        </v-select>

        <form id="search">
            <input 
            id="center"
            type="text">
            <button 
            id="right"
            type="submit">

                <v-icon>mdi-magnify</v-icon>
            </button>
        </form>
    </div>
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
    data() {
        return {
            categories: ['Camisetas', 'Pantalones', 'Libros'],
        }
    }
}
</script>