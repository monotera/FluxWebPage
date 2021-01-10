<template>
    <div id="intro">
        <section id="intro-parkour">
            <h2 class="section-header">¿Qué es parkour?</h2>
            <p class="section-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet finibus sem, a laoreet quam. Vivamus non orci vel eros bibendum gravida nec eget leo. Donec nec euismod nibh. Curabitur lacinia erat non arcu sodales, ut fringilla mauris fringilla. Vivamus neque felis, ornare eget volutpat eu, rhoncus in risus. Morbi vitae augue vitae metus ornare tempus sit amet in nibh. Donec ac lacus leo.
            </p>
            <iframe width="253.93" height="153" src="https://www.youtube.com/embed/mP4hI9UB0Og" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
        <section id="benefits">
            <h2 class="section-header">Beneficios</h2>
            <p class="section-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet finibus sem, a laoreet quam. Vivamus non orci vel eros bibendum gravida nec eget leo. Donec nec euismod nibh. Curabitur lacinia erat non arcu sodales, ut fringilla mauris fringilla.
            </p>
        </section>
        <section id="classes">
            <h2 class="section-header">Clases</h2>
            <p class="section-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet finibus sem, a laoreet quam. Vivamus non orci vel eros bibendum gravida nec eget leo. Donec nec euismod nibh. Curabitur lacinia erat non arcu sodales, ut fringilla mauris fring.
            </p>
            <button id="button-classes">CONOCE MÁS</button>
        </section>
    </div>
</template>

<style lang="scss" scoped>
    #intro {
        padding: 50px 0;
        background-color: $dark-theme-background;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: $main-font-color;
    }
    section {
        width: 90%;
        margin: 10px 0;
        padding: 20px;
        border-radius: 10px;
        background-color: $dark-theme-surface;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0px 5px 10px 5px rgba(0, 0, 0, 0.8);
        .section-header {
            margin-bottom: 10px;
            font-family: $section-title-font;
            font-size: 18px;
        }
        .section-body {
            margin: 20px 0;
            font-family: $section-body-font;
            font-size: 12px;
        }
    }
    button {
        padding: 10px 20px;
        border: 3px solid $main-font-color;
        color: $main-font-color;
        background-color: $main-background-color;
        cursor: pointer;
        font-family: $section-title-font;
        transition: 0.5s;
        font-size: 10px;
        &:hover {
            background-color: $secondary-background-color;
            color: $secondary-font-color;
        }
    }
</style>

<script>
export default {
    
}
</script>