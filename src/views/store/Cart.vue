<template>
    <div id="shopping-cart">
        <h2 class="main-header">Carrito de Compras</h2>
        <div 
        v-if="!cart"
        id="empty-cart">
            El carro está vacío.
        </div>
        <div 
        v-else
        id="cart">
            <div id="detail">
                <DesktopCart v-if="windowWidth > 769" 
                    :products="cart"
                    :changeProductAttr="changeProductAttr"
                    :deleteProduct="deleteProduct"/>
                <div v-else>
                    
                </div>
            </div>
            <div id="summary">
                <Summary
                :subtotal="subtotal"
                :shippingCost="shippingCost"
                :total="total"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #shopping-cart {
        padding: 50px 40px;
        height: 100vh;
    }
    .main-header {
        height: 20%;
        padding-bottom: 20px;
        width: 100%;
        text-align: center;
        border-bottom: 1px solid $store-header-underline;
        font-family: $section-title-font;
        font-size: 40px;
    }
    #cart {
        padding-top: 30px;
        height: 80%;
        width: 100%;
        display: grid;
        grid-template-columns: 4fr 1fr;
        column-gap: 30px;
    }
</style>

<script>
import DesktopCart from '../../components/store/DesktopCart'
import Summary from '../../components/store/DesktopCartSummary'
export default {
    components: {
        DesktopCart,
        Summary,
    },
    data() {
        return {
            cart: [
                {
                    name: "Producto 1",
                    category: "Camisetas",
                    image: "https://contents.mediadecathlon.com/p1594532/k$5242b7ab6707052de43a6c0dd0a50c53/camiseta-regular-100-algodon-sportee-100-gimnasia-stretching-hombre-blanco.jpg?format=auto&f=800x800",
                    price: 50000,
                    quantity: 2,
                    size: 'L',
                    sizes: ['S', 'M', 'L'],
                },
                {
                    name: "Producto 2",
                    category: "Camisetas",
                    image: "https://contents.mediadecathlon.com/p1594532/k$5242b7ab6707052de43a6c0dd0a50c53/camiseta-regular-100-algodon-sportee-100-gimnasia-stretching-hombre-blanco.jpg?format=auto&f=800x800",
                    price: 99999.99,
                    quantity: 1,
                    size: 'L',
                    sizes: ['S', 'M', 'L'],
                },
                {
                    name: "Producto 3",
                    category: "Camisetas",
                    image: "https://contents.mediadecathlon.com/p1594532/k$5242b7ab6707052de43a6c0dd0a50c53/camiseta-regular-100-algodon-sportee-100-gimnasia-stretching-hombre-blanco.jpg?format=auto&f=800x800",
                    price: 129000,
                    quantity: 1,
                    size: 'L',
                    sizes: ['M', 'L'],
                },
            ],
            windowWidth: 0,
            subtotal: 0,
            shippingCost: 0,
            total: 0,
        }
    },
    created() {
        const cartItems = localStorage.getItem('shopping-cart');
        if (cartItems) {
            try {
                this.cart = JSON.parse(cartItems);
            } catch(e) {
                this.cart = null;
            }   
        }
        window.addEventListener('resize', this.setWindowWidth)
        this.setWindowWidth();
        this.calculateTotal();
    },
    methods: {
        setWindowWidth() {
            this.windowWidth = window.innerWidth;
        },
        deleteProduct(index) {
            this.cart.splice(index, 1);
        },
        changeProductAttr(index, attr, newVal) {
            this.cart[index][attr] = newVal;
            this.calculateTotal();
        },
        calculateTotal() {
            if (this.cart) {
                const subtotal = this.cart.reduce((total, product) => total + (product.price * product.quantity), 0)
                this.subtotal = subtotal;
                this.total = subtotal + this.shippingCost;
            }
        }
    },
}
</script>