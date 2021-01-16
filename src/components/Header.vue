<template>
  <header class="header-wrapper" :class="{ scrolledOpacity: isScrolled }">
    <nav class="header-wrapper-nav" :class="{ scrolledHeigth: isScrolled }">
      <h1 class="header-logo">Flux Academy</h1>
      <ul class="header-wrapper-ul" :class="{ navActive: isOpen }">
        <li>
          <a
            @click="activate(1), scrollAnimation('#intro')"
            :class="{ active: active_el == 1 }"
            >Inicio</a
          >
        </li>
        <li>
          <a
            @click="activate(2), scrollAnimation('#class-component')"
            :class="{ active: active_el == 2 }"
            >Clases</a
          >
        </li>
        <li>
          <a
            @click="activate(3), scrollAnimation('#gallery-component')"
            :class="{ active: active_el == 3 }"
            >Galería</a
          >
        </li>
        <li>
          <a
            @click="activate(4), scrollAnimation('#contact-component')"
            :class="{ active: active_el == 4 }"
            >Contacto</a
          >
        </li>
        <li>
          <router-link to="/store"
            ><i class="fas fa-shopping-cart fa-lg"></i
          ></router-link>
        </li>
        <li v-if="windowWidth <= 768" class="header-icons">
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
          openMenu();
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
      isScrolled: false,
    };
  },
  methods: {
    setWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
    activate(el) {
      this.active_el = el;
    },
    openMenu() {
      this.isOpen ? (this.isOpen = false) : (this.isOpen = true);
    },
    navSlide() {
      const navLinks = document.querySelectorAll(".header-wrapper-ul li");
      navLinks.forEach((link, index) => {
        if (!link.style.animation)
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s`;
        else link.style.animation = "";
      });
    },
    setOpacity() {
      if (window.scrollY == 0) {
        this.isScrolled = false;
      } else this.isScrolled = true;
    },
    scrollAnimation(section) {
      document.querySelector(section).scrollIntoView({
        behavior: "smooth",
      });
    },
  },
  created() {
    this.setWindowWidth();
    window.addEventListener("resize", () => {
      this.setWindowWidth();
    });
    window.addEventListener("scroll", this.setOpacity);
    this.setOpacity();
  },
};
</script>

<style lang="scss">
i {
  cursor: pointer;
}

.header-wrapper {
  background-color: $secondary-font-color;
  color: $main-font-color;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2;
  transition: 0.4s ease-in;
  .scrolledHeigth {
    @media screen and (min-width: $breakpoint-desktop) {
      min-height: 10vh;
      transition: 0.4s ease-out;
    }
  }
}
.scrolledOpacity {
  opacity: 0.8;
  transition: 0.4s ease-out;
  &:hover {
    opacity: 1;
  }
}
.header-logo {
  flex: 2 1;
  font-family: $nav-tittle-font;

  @media screen and (max-width: $breakpoint-desktopSmall) and (min-width: $breakpoint-tablet) {
    padding-bottom: 1rem;
    text-align: center;
  }
}

.header-wrapper-nav {
  align-items: center;
  display: flex;
  font-family: $nav-tittle-font;
  flex-flow: wrap;
  margin: auto;
  padding: 2rem;
  width: 90%;
  min-height: 13vh;
  transition: 0.2s ease-out;

  @media screen and (max-width: $breakpoint-tablet) {
    flex-flow: nowrap;
    padding: 2rem 1rem;
  }

  @media screen and (max-width: $breakpoint-desktopSmall) and (min-width: $breakpoint-tablet) {
    display: block;
  }
}

.header-wrapper-ul {
  align-items: center;
  display: flex;
  flex: 1 1;
  justify-content: space-evenly;
  list-style: none;

  @media screen and (max-width: $breakpoint-desktopSmall) and (min-width: $breakpoint-tablet) {
    top: 10vh;
  }
  @media screen and (max-width: $breakpoint-tablet) {
    align-items: center;
    background-color: $main-background-color;
    display: flex;
    flex-direction: column;
    height: 90vh;
    position: absolute;
    right: 0;
    top: 13vh;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;
    width: 50%;

    li {
      opacity: 0;
    }
  }

  a {
    padding: 3rem;
    transition: 0.2s ease-in;

    @media screen and (max-width: $breakpoint-desktopSmall) and (min-width: $breakpoint-tablet) {
      padding: 0;
    }
  }

  a:hover {
    color: $main-links-color;
    transition: 0.2s ease-in;
  }

  .header-icons {
    display: flex;

    a {
      padding: 0 0.9rem;
    }
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
  background-color: $main-font-color;
  margin: 5px;
  transition: all 0.5s ease;
}

//Dynamic classes and animation
.active {
  color: $main-links-color !important;
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
  padding: 0 !important;
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
