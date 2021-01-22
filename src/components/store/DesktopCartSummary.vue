<template>
    <div id=table>
        <div id="table-headers">
            <p class="table-header align-center">Resumen</p>
        </div>
        <div id="table-data">
            
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
    }
    #table-headers {
        background-color: $main-background-color;
        color: $main-font-color;
        padding-bottom: 0.1px;
    }
    .table-header {
        text-align: center;
        font-size: 24px;
        font-family: $table-headers-font;
    }
    .align-center {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
</style>

<script>
export default {
    props: ['subtotal', 'shippingCost', 'total'],
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