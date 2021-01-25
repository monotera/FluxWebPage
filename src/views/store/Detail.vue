<template>
  <section>
    <div class="left-section">
      <carousel :starting-image="0" :images="images"></carousel>
    </div>
    <div class="rigth-section">
      <h1>s</h1>
    </div>
  </section>
</template>

<script>
import Carousel from "../../components/store/Carousel.vue";

export default {
  components: { Carousel },
  data() {
    return {
      images: [
        {
          id: "1",
          big:
            "https://www.all4o.com/image/cache/data/brand/TrueStory/TRUE-STORY-Elite-orienteering-shirt-Men-Deep-BLUE-800x800.jpg",
          thumb:
            "https://www.all4o.com/image/cache/data/brand/TrueStory/TRUE-STORY-Elite-orienteering-shirt-Men-Deep-BLUE-150x150.jpg",
        },
        {
          id: "2",
          big:
            "https://www.all4o.com/image/cache/data/brand/TrueStory/TRUE-STORY-Classic-o-shirt-MEN-BLACK-STERLING-back-800x800.jpg",
          thumb:
            "https://www.all4o.com/image/cache/data/brand/TrueStory/TRUE-STORY-Classic-o-shirt-MEN-BLACK-STERLING-back-150x150.jpg",
        },
        {
          id: "3",
          big:
            "https://www.all4o.com/image/cache/data/brand/TrueStory/TRUE%20STORY-Classic-o-shirt-WOMEN-LAVENDER-PIE-800x800.jpg",
          thumb:
            "https://www.all4o.com/image/cache/data/brand/TrueStory/TRUE%20STORY-Classic-o-shirt-WOMEN-LAVENDER-PIE-back-150x150.jpg",
        },
        {
          id: "4",
          big:
            "https://www.all4o.com/image/cache/data/brand/FRENSON/Shirts/frenson-o-division-orienteering-mesh-shirt-white-front-800x800.jpg",
          thumb:
            "https://www.all4o.com/image/cache/data/brand/FRENSON/Shirts/frenson-o-division-orienteering-mesh-shirt-white-front-150x150.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  @media screen and (max-width: $breakpoint-desktop) {
    flex-direction: column;
  }
}
.left-section {
  width: 40%;
  margin: 0 5rem;
}
.rigth-section {
  background-color: black;
  width: 60%;
}
</style>
