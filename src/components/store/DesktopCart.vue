<template>
    <div id=table>
        <div id="table-headers">
            <p class="table-header">Imagen</p>
            <p class="table-header">Producto</p>
            <p class="table-header">Precio</p>
            <p class="table-header">Cantidad y Talla</p>
            <p class="table-header">Subtotal</p>
        </div>
        <div id="table-products">
            <div class="row-product" v-for="product in products" :key="product.name">
                <div class="product-image">
                    <img :src="product.image"/>
                </div>
                <div class="product-name align-center">
                    {{product.name}}
                </div>
                <div class="product-price align-center">
                    {{formatPrice(product.price)}}
                </div>
                <div class="product-quantity align-center">
                    {{product.quantity}}
                </div>
                <div class="product-subtotal align-center">
                    {{formatPrice(product.price * product.quantity)}}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #table {
        width: 100%;
        height: 100%;
        border: 1px solid rgb(0,0,0);
        font-family: $table-data-font;
        font-size: 18px;
    }
    #table-headers {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        background-color: $main-background-color;
        color: $main-font-color;
    }
    .table-header {
        margin: auto;
        text-align: center;
        font-size: 24px;
        font-family: $table-headers-font;
    }
    #table-products {
        width: 100%;
        
        background-color: red;
    }
    .row-product {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        height: 200px;
    }
    .align-center {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .product-image {
        padding: 30px 50px;
        height: 200px;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            max-height: 100%;
        }
    }
</style>

<script>
export default {
    props: ['products'],
    methods: {
        formatPrice(x) {
            return x.toString().replace(/(\d+)(?=\d{3})/g, "$ $1,")
        }
    },
}
</script>