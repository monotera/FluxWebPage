<template>
    <div id="mobile-cart">
        <div class="cart-product" v-for="(product, index) in products" :key="product.name">
            <div class="cart-product-title">
                {{ product.name }}
            </div>
            <div class="cart-product-info">
                <div class="cart-product-info-image">
                    <img :src="product.image"/>
                </div>
                <div class="cart-product-info-data">
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
                    <div class="cart-product-price">
                        <div class="cart-product-price-label">
                            P.
                        </div>
                        <div class="cart-product-price-value">
                            {{ formatPrice(product.quantity * product.price) }}
                        </div>
                    </div>
                </div>
            </div>   
            <div class="cart-product-subtotal">
                <div class="d-flex align-center">
                    Subtotal
                </div>
                <div class="d-flex align-center">
                    {{formatPrice(product.price * product.quantity)}}
                </div>
            </div>
            <button 
            class="cart-product-delete"
            @click.prevent="deleteProduct(index)"
            >
                ELIMINAR
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .cart-product {
        display: flex;
        flex-direction: column;
    }
    .cart-product-title {
        font-family: $cart-mobile-product-title;
        font-size: 18px;
        text-align: center;
        margin: 20px 0;
    }
    .cart-product-info {
        width: 100%;
        height: 160x;
        display: grid;
        grid-template-columns: 1fr 1fr;
        .cart-product-info-image {
            margin-top: 10px;
            height: 150px;
            img {
                object-fit: contain;
            }
        }
        .cart-product-info-data {
            display: grid;
            grid-template-rows: 1fr 1fr 1fr;
            column-gap: 5px;
        }
        .cart-product-price {
            margin-top: 10px;
            max-width: 210px;
            width: 95%;
            display: flex;
            padding: 5px 5%;
            height: 43px;
            background-color: #cfcfcf;
            color: #3f3f3f;
            justify-content: space-between;
            align-items: center;
            font-family: $cart-selectors-font;
            font-size: 16px;
        }
    }
    .cart-product-subtotal {
        padding: 10px 0;
        margin-top: 10px;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        background-color: #cfcfcf;
        font-family: $table-headers-font;
        font-size: 16px;
    }
    .cart-product-delete {
        margin-top: 10px;
        width: 100%;
        font-family: $table-headers-font;
        font-size: 16px;
        padding: 10px 20px;
        color: $main-font-color;
        background-color: $main-background-color;
        cursor: pointer;
        transition: 0.5s;
        &:hover {
            color: $main-hover-color;
        }
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