<template>
    <div id="home-component">
        <h1>FLUX ACADEMY</h1>
        <div class="subtitle">
            <div class="point"></div>
            <h4>KEEP MOVING</h4>
            <div class="point"></div>
        </div>
        <button id="principal-button">IR A PRODUCTOS</button>
    </div>

</template>

<style lang="scss">
    #home-component {
        font-size: 10px;
        width: 100%;
        height: 100vh;
        padding-top: 1px;
        background-image: url('../../../assets/parkour-wallpaper.jpg');
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    /* Titutlo principal */
    h1 {
        display: inline-block;
        margin-top: -70px;
        margin-bottom: -5px;
        font-family: 'Roboto', sans-serif;
        text-align: center;
        width: 6em;
        font-size: 11em;
        letter-spacing: -0.04em;
        color: #fff;
    }
    /* Subtitulo */
    .subtitle {
        width: 50em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 20em;
        margin-bottom: 30px;
        color: #fff;
    }
    .subtitle h4 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 1.5em;
        text-align: center;
    }
    .point {
        background-color: #fff;
        width: 1em;
        height: 1em;
        border-radius: 50%;
    }
    /* Boton principal */
    button {
        padding: 10px 20px;
        border: 3px solid #fff;
        color: #fff;
        background-color: #000;
        cursor: pointer;
        font-family: Montserrat;
        font-weight: bold;
        transition: 0.5s;
        font-size: 10px;    
    }
    button:hover {
        background-color: #fff;
        color: #000;
    }
    #principal-button {
        font-size: 2em;
        width: 16em;
        margin-bottom: 75px;
    }

    /* Media query mobile view */
    @media (max-width: $breakpoint-columns) {
        #home-component {
            font-size: 5px;
        }
        .subtitle h4 {
            font-size: 2em;
        }
    }
    
</style>

<script>
export default {
    
}
</script>