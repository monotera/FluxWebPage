<template>
    <div id="gallery-component">
        <h2 class="main-header">GALERÍA</h2>
        <div id="main-carousel">
            <v-carousel
                cycle
                height="100%"
                show-arrows-on-hover
                dark
            >
                <v-carousel-item
                v-for="(slide, i) in mainContent"
                :key="i"
                >
                <v-sheet
                    rounded
                    elevation="12"
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
                        width="916.65"
                        frameborder="0"
                        allow="accelerometer;
                        autoplay;
                        clipboard-write;
                        encrypted-media;
                        gyroscope;
                        picture-in-picture" 
                        allowfullscreen
                        ></iframe>
                    </div>
                    </v-row>
                </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </div>
        <div v-if="windowWidth<768" id="categories">
            <v-carousel 
            height="500">
                <v-carousel-item
                v-for="(slide, i) in slides"
                :key="i"
                >
                <v-sheet
                    light
                    height="100%"
                    tile
                >
                    <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                    >
                    <div class="display-3" id="carousel-card">
                        <CategoryCarousel :content="content[slide]" :title="titles[i]"/>
                    </div>
                    </v-row>
                </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </div>
        <div v-else id="categories">
            <div class="carousel-cards" v-for="(slide, i) in slides" :key="i">
                <CategoryCarousel :content="content[slide]" :title="titles[i]"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
    #gallery-component {
        padding-top: 110px;
        padding-bottom: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: $dark-theme-background;
        color: $main-font-color;
        @media (min-width: $breakpoint-tablet) {
            padding-top: 140px;
        }
        @media (min-width: $breakpoint-desktop) {
            padding-top: 110px;
        }
        iframe {
        max-width: 100%;
        }
        img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        }
    }
    .main-header {
        font-family: $section-main-title-font;
        font-size: 30px;
        margin: auto;
        margin-bottom: 100px;
        text-align: center;
        @media (min-width: $breakpoint-desktop) {
            font-size: 72px;
        }
    }
    #main-carousel {
        display: inline-block;
        width: 90%;
        height: 450px;
        .display-3 {
            height: 100%;
            max-width: 430px;
            img {
                height: 100%;
                object-fit: cover;
            }
        }
        // carousel sheet
        .v-sheet
        {
            height: 91%;
            background-color: $dark-theme-surface;
        }
        // carousel size
        @media (min-width: $breakpoint-tablet) {
            height: 873px;
            .display-3 {
                max-width: 916.65px;
            }
            .v-sheet
            {
                height: 834px;
            }
        }
        // carousel controls
        .v-carousel__controls {
            position:relative;
            .v-carousel__controls__item {  
                top: -60px;
            }
        }
    }
    #categories {     
        width: 90%;
        @media (min-width: $breakpoint-tablet) {
            margin: 50px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 10px;
            row-gap: 50px;
        }
        @media (min-width: $breakpoint-desktop) {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            column-gap: 10px;
        }
        // carousel colors
        .v-sheet
        {
            background-color: $dark-theme-background;
        }
    }
    .carousel-cards {
        margin: auto;
        width: 100%;
        @media (min-width: $breakpoint-desktop) {
            max-width: 325px;
        }
    }
</style>

<script>
import CategoryCarousel from './CarouselCard.vue'
  export default {
    components: {
        CategoryCarousel,
    },
    data () {
      return {
        slides: [
          'kids',
          'jovenes',
          'atletas',
          'entrenadores',
        ],
        titles: [
            'Kids',
            'Jóvenes',
            'Atletas',
            'Entrenadores',
        ],
        content: {
            'kids': [
                ['image', 'https://i.pinimg.com/736x/7e/54/2f/7e542ffb47e63ff83cd19e8c4bf382d5.jpg'],
                ['image', 'https://www.aviatorsports.com/wp-content/uploads/2020/01/Ninja-Warrior-Classes.jpg'],
                ['image', 'https://images.squarespace-cdn.com/content/v1/59fb715dd55b41827859a6d5/1556495995107-473KPD92MXKOCB7634WL/ke17ZwdGBToddI8pDm48kE7wb8oKQjYFvEij_PHMOSh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmEczKEiHaQrO44vfJ0kKvINi3gaTiUfKZFC85yLj-X80CmVffK4pMyZgdh4QXvTO3/saywer2.jpg?format=1500w'],
            ],
            'jovenes': [
                ['image', 'https://i2-prod.dailyrecord.co.uk/incoming/article6062732.ece/ALTERNATES/s1200c/JS67968137.jpg'],
                ['image', 'https://cms.qz.com/wp-content/uploads/2017/01/rtx896b.jpg?quality=75&strip=all&w=900&h=900&crop=1'],
                ['image', 'https://diarioportal.com/wp-content/uploads/2020/05/deporte-desarrolla-capacidad-motriz-claudia.jpg'],
            ],
            'atletas': [
                ['image', 'https://static3.abc.es/media/bienestar/2020/01/21/prakour-kIHB--620x349@abc.jpg'],
                ['image', 'https://pxsports.com/wp-content/uploads/2018/07/parkour.jpg'],
                ['image', 'https://moveacademy.sg/wp-content/uploads/2020/06/move-adult-parkour-02-1000x1000.jpg'],
                ['video', 'https://www.youtube.com/embed/sRbvkPqBnTg'],
            ],
            'entrenadores': [
                ['image', 'https://images.squarespace-cdn.com/content/v1/5805187b893fc0cf0e4dfc4a/1587053770243-O7N5VTHJG3ZNQ1EHN3WA/ke17ZwdGBToddI8pDm48kO6t_FIigFZlD-2ukJs68NZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UdQnRCmyfmE32mt8hf8jTbpNOvskeoRv-ygqK_y0NLe3pygZMNSAPtQr-kV0SxGO-A/Maxwell.jpg'],
                ['image', 'https://www.paragym.com/wp-content/uploads/2018/12/mikhail-e1543768788950-1024x1024.jpg'],
                ['image', 'https://images.squarespace-cdn.com/content/v1/5575d788e4b09e05ac69db8e/1577032706747-56P3L8CPBZ3HLYANKJS6/ke17ZwdGBToddI8pDm48kPkefKsueKYnzzHtpm_PQRV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQXrkmYtCeF4HPCtiIA1MSHF-e2R5cwAeco5N9iAftMUOIEZPXLJGnCfSPUgNxkTVA/Innate%2BMovement_177.jpg'],
            ],
        },
        mainContent: [
            ['image', 'https://cdn.britannica.com/91/198191-050-D2791AFC/Parkour-athlete-jumping-walls.jpg'],
            ['image', 'https://underwoodpeople.com/wp-content/uploads/2018/10/parkour.jpg'],
            ['image', 'https://media1.popsugar-assets.com/files/thumbor/2PV_AxkY5bF66dCv730OaKBOmg8/1096x0:5079x3983/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/05/734/n/1922729/c1edb5d45d7139b0875c86.31159139_/i/What-Parkour.jpg'],
        ],
        windowWidth: 0,
      }
    },
    created() {
        this.setWindowWidth()
        window.addEventListener('resize', () => {
        this.setWindowWidth()
      })
    },
    methods: {
        setWindowWidth() {
        this.windowWidth = window.innerWidth
        },
    }
  }
</script>