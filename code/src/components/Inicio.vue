<template>
    <div id="inicio-component">
        <h1>FLUX ACADEMY</h1>
        <div class="subtitle">
            <div class="point"></div>
            <h4>KEEP MOVING</h4>
            <div class="point"></div>
        </div>
        <button id="principal-button">IR A PRODUCTOS</button>
    </div>

</template>

<style>
    #inicio-component {
        width: 100%;
        height: 100vh;
        padding-top: 1px;
        background-image: url("https://static.nationalgeographic.es/files/styles/image_3200/public/parkour-adventures-dubai.jpg?w=1900&h=1267");
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    h1 {
        display: inline-block;
        margin-top: -70px;
        margin-bottom: -5px;
        font-family: 'Roboto', sans-serif;
        text-align: center;
        width: 500px;
        font-size: 110px;
        letter-spacing: -0.04em;
    }
    .subtitle {
        width: 500px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 200px;
        margin-bottom: 30px;
    }
    .subtitle h4 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 15px;
        text-align: center;
    }
    .point {
        background-color: black;
        width: 10px;
        height: 10px;
        border-radius: 50%;
    }

    button {
        padding: 10px 20px;
        border: 3px solid #fff;
        color: #fff;
        background-color: #000;
        cursor: pointer;
        font-family: Montserrat;
        font-weight: bold;
        transition: 0.5s;     
    }
    button:hover {
        background-color: #fff;
        color: #000;
    }
    #principal-button {
        font-size: 20px;
        width: 327px;
        margin-bottom: 75px;
    }
</style>

<script>
export default {
    
}
</script>