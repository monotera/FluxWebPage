<template>
    <div id=table>
        <div id="table-headers">
            <p class="table-header align-center">Resumen</p>
        </div>
        <div id="table-data">
            <div class="subtotals align-center">
                <h4 class="grey-title">
                    Subtotal
                </h4>
                <p class="value">
                    {{ formatPrice(subtotal) }}
                </p>
            </div>
            <div class="subtotals align-center">
                <h4 class="grey-title">
                    Envío
                </h4>
                <p class="value">
                    {{ formatPrice(shippingCost) }}
                </p>
            </div>
            <div class="total">
                <h4 class="grey-title">
                    Total
                </h4>
                <p class="value">
                    {{ formatPrice(total) }}
                </p>
            </div>
            <div class="comprar">
                <button>
                    COMPRAR
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #table {
        width: 100%;
        height: 100%;
        max-height: 700px;
        border: 1px solid rgb(0,0,0);
        font-family: $table-data-font;
        font-size: 18px;
        color: $cart-data-font;
        @media (max-width: $breakpoint-tablet) {
            border: 0;
        }
    }
    #table-headers {
        background-color: $main-background-color;
        color: $main-font-color;
        padding-bottom: 0.1px;
        @media (max-width: $breakpoint-tablet) {
            display: none;
        }
    }
    .table-header {
        text-align: center;
        font-size: 24px;
        font-family: $table-headers-font;
    }
    #table-data {
        display: grid;
        height: 90%;
        grid-template-rows: 1fr 1fr 1fr 1fr;
    }
    .align-center {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .subtotals {
        flex-direction: column;
        @media (max-width: $breakpoint-tablet) {
            margin-bottom: 10px;
            flex-direction: row;
            justify-content: space-evenly;
            background-color: #cfcfcf;
            font-family: $cart-mobile-summary-font;
            font-size: 18px;
            .value {
                margin: 0;
            }
        }
    }
    .grey-title {
        color: $table-subtotals-font;
    }
    .total {
        font-family: $table-main-data-font;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        @media (max-width: $breakpoint-tablet) {
            margin-bottom: 10px;
            flex-direction: row;
            justify-content: space-evenly;
            background-color: #e7e7e7;
            color: $cart-data-font;
            font-family: $cart-mobile-total-font;
            font-size: 18px;
            .value {
                margin: 0;
            }
        }
    }
    .comprar {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-bottom: 20px;
    }
    .comprar button {
        font-family: $table-main-data-font;
        font-size: 16.87px;
        width: 90%;
        padding: 10px 20px;
        border: 3px solid $main-font-color;
        color: $main-font-color;
        background-color: $main-background-color;
        cursor: pointer;
        transition: 0.5s;
        &:hover {
            background-color: $secondary-background-color;
            color: $secondary-font-color;
            box-shadow: 0px 10px 10px 5px rgba(200,200,200,0.5);
        }
        @media (max-width: $breakpoint-tablet) {
            width: 100%;
            font-size: 18px;
        }
    }
    
</style>

<script>
export default {
    props: ['subtotal', 'shippingCost', 'total',],
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