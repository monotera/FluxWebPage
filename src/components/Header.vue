<template>
  <header class="header-wrapper">
    <nav class="header-wrapper-nav">
      <h1 class="header-logo">Flux Academy</h1>
      <ul class="header-wrapper-ul" v-bind:class="{ navActive: isOpen }">
        <li>
          <a
            @click="activate(1)"
            :class="{ active: active_el == 1 }"
            href="#home-component-test"
            >Inicio</a
          >
        </li>
        <li>
          <a
            @click="activate(2)"
            :class="{ active: active_el == 2 }"
            href="#clases-component"
            >Clases</a
          >
        </li>
        <li>
          <a
            @click="activate(3)"
            :class="{ active: active_el == 3 }"
            href="#galeria-component"
            >Galería</a
          >
        </li>
        <li>
          <a
            @click="activate(4)"
            :class="{ active: active_el == 4 }"
            href="#contacto-component"
            >Contacto</a
          >
        </li>
        <li>
          <a><i class="fas fa-shopping-cart fa-lg"></i></a>
        </li>
        <li v-if="windowWidth < 769" class="header-icons">
          <a href="https://www.facebook.com/pg/Flux-academy-103864354337166/posts/"
            ><i class="fab fa-facebook fa-lg"></i
          ></a>
          <a href="https://www.instagram.com/flux.parkour/">
            <i class="fab fa-instagram fa-lg"></i>
          </a>
          <a href="https://www.youtube.com/user/PlusParkour">
            <i class="fab fa-youtube fa-lg"></i>
          </a>
        </li>
      </ul>
      <div
        class="burger"
        @click="
          navSlide();
          open();
        "
      >
        <div class="line1" v-bind:class="{ rotate1: isOpen }"></div>
        <div class="line2" v-bind:class="{ rotate2: isOpen }"></div>
        <div class="line3" v-bind:class="{ rotate3: isOpen }"></div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      active_el: 1,
      isOpen: false,
      windowWidth: 0,
    };
  },
  methods: {
    setWindowWidth() {
      this.windowWidth = window.innerWidth;
      console.log(this.windowWidth);
    },
    activate: function (el) {
      this.active_el = el;
    },
    open: function () {
      this.isOpen ? (this.isOpen = false) : (this.isOpen = true);
    },
    navSlide: function () {
      const navLinks = document.querySelectorAll(".header-wrapper-ul li");
      navLinks.forEach((link, index) => {
        if (!link.style.animation)
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s`;
        else link.style.animation = "";
      });
    },
  },
  created() {
    this.setWindowWidth();
    window.addEventListener("resize", () => {
      this.setWindowWidth();
    });
  },
};
</script>

<style lang="scss">
.header-wrapper {
  background-color: black;
  color: white;
  position: sticky;
  top: 0;
}
.header-wrapper-nav {
  align-items: center;
  display: flex;
  font-family: $nav-tittle-font;
  flex-flow: wrap;
  margin: auto;
  min-height: 10vh;
  padding: 2rem;
  width: 90%;
  @media screen and (max-width: $breakpoint-tablet) {
    padding: 2rem 1rem;
    flex-flow: nowrap;
  }
}
.header-wrapper-ul {
  align-items: center;
  display: flex;
  flex: 1 1;
  justify-content: space-around;
  list-style: none;
  @media screen and (max-width: $breakpoint-tablet) {
    position: absolute;
    right: 0;
    height: 90vh;
    top: 10vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;

    li {
      opacity: 0;
    }
  }
  a {
    padding: 3rem;
    transition: 0.2s ease-in;
  }
  a:hover {
    color: lightseagreen;
    transition: 0.2s ease-in;
  }
  .header-icons {
    display: flex;
    a {
      padding: 0 0.9rem;
    }
  }
}

.header-logo {
  flex: 2 1;
  font-family: fontLogo, sans-serif;
  @media screen and (max-width: $breakpoint-desktopSmall) and (min-width: $breakpoint-tablet) {
    text-align: center;
    padding-bottom: 1rem;
  }
}

.burger {
  display: none;
  @media screen and (max-width: $breakpoint-tablet) {
    display: block;
    cursor: pointer;
  }
}
.burger div {
  width: 28px;
  height: 3px;
  background-color: white;
  margin: 5px;
  transition: all 0.3s ease;
}

//Dynamic classes and animation
.active {
  color: $main-links-color;
}
.rotate1 {
  transform: rotate(-45deg) translate(-5px, 6px);
}
.rotate2 {
  opacity: 0;
}
.rotate3 {
  transform: rotate(45deg) translate(-5px, -6px);
}
.navActive {
  transform: translateX(0);
}

@keyframes navLinkFade {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>
