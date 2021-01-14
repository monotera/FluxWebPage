<template>
  <v-card
    elevation="24"
    id="primary-card"
    min-width="140"
    class="4mx-auto"
    dark
    height="353"
  >
    <v-system-bar lights-out dark id="carousel-bar"></v-system-bar>
    <v-carousel
      :continuous="false"
      :cycle="cycle"
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      width="70%"
      height="265px"
      dark
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
        
      >
        <v-sheet
          :color="$main-background-color"
          height="100%"
          tile
          dark
          id="carousel-sheet"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-3">
              <img v-if="slide[0] === 'image'" :src="slide[1]"/>
              <iframe v-else-if="slide[0] === 'video'" :src="slide[1]"
              height="100%"
              frameborder="0"
              allow="accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture" 
              allowfullscreen
              >
              </iframe>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-list dark id="carousel-body">
      <v-list-item >
        <v-list-item-content>
          <v-list-item-title>{{title}}</v-list-item-title>
        </v-list-item-content>
        
      </v-list-item>
    </v-list>
  </v-card>
  
</template>

<style lang="scss" scoped>
// general styles
iframe {
  max-width: 100%;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
// card colors
.v-card,
#carousel-bar,
#carousel-body,
#carousel-body .v-list-item__title
{
  background-color: $dark-theme-surface !important;
  color: $main-font-color;
}
#carousel-sheet {
  background-color: $dark-theme-surface;
}
.v-carousel__controls__item {  
  background-color: rgba(0,0,0,0.5);
  &:hover {
    background-color: rgba(255,255,255,0.5);
  }
  &:focus {
    background-color: rgba(255,255,255,0.8);
  }
}
#primary-card {
  .v-carousel__controls__item.v-btn--active {
    background-color: rgba(32,178,170, 1);
  }
}
  // mobile view styles
  #carousel-card {
    display: inline-block;
    width: 65%;
    max-width: 444px;
    #carousel-body {
      font-size: 10px;
      .v-list-item__title {
        font-family: 'headers-font', sans-serif;
        font-size: 1.2em;
        text-align: center;
      }
    }
    .display-3, #carousel-sheet { 
      height: 100%;
    }
    .v-carousel__controls {
       position:relative;
      .v-item-group {
        height: 50px !important;
      }
    }
    .v-carousel__controls__item {  
      top: -62px;
    }
  }
  // tablet and desktop view styles
  .carousel-cards {
    height: 391px;
    .v-card {
      height: 100% !important;
    }
    .v-item-group,
    .v-window__container,
    .v-window-item,
    .v-carousel__item {
      height: 265px !important;
    }
    .v-carousel__controls__item {  
      top: -40px;
    }
    .v-carousel__controls {
      position:relative;
      .v-item-group {
        height: 50px !important;
      }
    }
    .v-list-item__title {
        font-family: 'headers-font', sans-serif;
        font-size: 24px;
    }
    .display-3, #carousel-sheet {
      height: 100%;
    }
  }
</style>

<script>
  export default {
    props: ['content', 'title'],
    data () {
      return {
        cycle: false,
        slides: this.content,
      }
    },
    created() {
      console.log('This are the props:' ,this.content[0])
    }
  }
</script>