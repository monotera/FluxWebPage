<template>
    <div>
        <div id="selector" v-if="type==='number'">
            <label :for="label">
                {{ label }}
            </label>
            <input :id="label"
            class="input-qty"
            type="number"
            :value="value"
            @change="onChange($event.target.value)"/>
        </div>
        <div id="selector" v-else>
            <label>
                {{ label }}
            </label>
            <v-select
            dense
            :label="label"
            solo
            background-color="#cfcfcf"
            class="col-5"
            flat
            height="100%"
            :value="value" 
            :items="options"
            append-icon="mdi-chevron-down grey--text text--darken-3"
            @change="onChange($event)"
            >
                <template v-slot:selection="{item}">
                    <span
                    id="input-size"
                    >
                        {{item}}
                    </span>

                </template>
            </v-select>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #selector {
        margin-top: 10px;
        display: flex;
        background-color: #cfcfcf;
        color: #3f3f3f;
        width: 95%;
        max-width: 210px;
        height: 43px;
        padding: 5px 5%;
        justify-content: space-between;
        font-family: $cart-selectors-font;
    }
    .input-qty {
        width: 36%;
    }
    .input-qty:focus {
        outline: none;
    }
    #input-size {
        background-color: #cfcfcf;
        color: #3f3f3f;
        font-family: $cart-selectors-font;
        font-size: 18px;
    }
    .row {
        height: 35px;
    }
    .v-text-field.v-text-field--solo .v-input__control {
        min-height: 30px;
    }
</style>

<script>
export default {
    props: ['label', 'value', 'onChange', 'type', 'options'],
}
</script>