<template>
    <div id=table>
        <div id="table-headers">
            <p class="table-header align-center">Imagen</p>
            <p class="table-header align-center">Producto</p>
            <p class="table-header align-center">Precio</p>
            <p class="table-header align-center">Cantidad y Talla</p>
            <p class="table-header align-center">Subtotal</p>
        </div>
        <div id="table-products">
            <div class="row-product" v-for="(product, index) in products" :key="product.name">
                <div class="product-image">
                    <img :src="product.image"/>
                </div>
                <div class="product-name align-center">
                    {{product.name}}
                </div>
                <div class="product-price align-center">
                    {{formatPrice(product.price)}}
                </div>
                <div class="product-quantity">
                    <Selector 
                    type="number"
                    label="Cantidad" 
                    :value="product.quantity"
                    :onChange="(newVal) => changeProductAttr(index, 'quantity', newVal)"/>
                    <Selector 
                    type="size"
                    label="Talla" 
                    :value="product.size"
                    :options="product.sizes"
                    :onChange="(newVal) => changeProductAttr(index, 'size', newVal)"/>
                </div>
                <div class="product-subtotal align-center">
                    <p>
                        {{formatPrice(product.price * product.quantity)}}
                    </p>
                    <button
                    @click.prevent="deleteProduct(index)">
                        <v-icon class="delete-icon">mdi-close</v-icon>
                    </button>
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
        color: $cart-data-font;
         @media (max-width: $breakpoint-desktop) {
             font-size: 16px;
         }
    }
    #table-headers {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        background-color: $main-background-color;
        color: $main-font-color;
    }
    .table-header {
        text-align: center;
        font-size: 24px;
        font-family: $table-headers-font;
        @media (max-width: $breakpoint-desktop) {
             font-size: 20px;
         }
    }
    #table-products {
        width: 100%;
    }
    .row-product {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        height: 200px;
    }
    .row-product:hover {
        background-color: rgba(0,0,0, 0.05);
    }
    .align-center {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .product-quantity {
        display: flex;
        flex-direction: column;
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
    .delete-icon {
        font-size: 30px; 
        color: rgb(141, 0, 0);
        transition: 0.5s;
    }
    .delete-icon:hover {
        color: rgb(180, 0, 0);
    }
    .product-subtotal p {
        font-family: $table-main-data-font;
        border-bottom: 1px solid $cart-data-underline;
        margin-bottom: 0;
        margin-right: 10px;
    }
</style>

<script>
import Selector from './Selector'
export default {
    components: {
        Selector,
    },
    props: ['products', 'deleteProduct', 'changeProductAttr'],
    methods: {
        formatPrice(x) {
            x = Math.round((x + Number.EPSILON) * 100) / 100
            const parts=x.toString().split('.')
            parts[0] = parts[0].replace(/(\d+)(?=\d{3})/g, "$ $1,")
            return parts.join('.')
        },
    },
}
</script>