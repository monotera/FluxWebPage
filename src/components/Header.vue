<template>
  <header class="header-wrapper">
    <nav class="header-wrapper-nav">
      <h1 class="header-logo">Flux Academy</h1>
      <div class="menu">
        <h2>Menu</h2>
        <ul class="header-wrapper-ul">
          <li>
            <a
              @click="activate(1)"
              :class="{ active: active_el == 1 }"
              href="#home-component"
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
            <a><i class="fas fa-shopping-cart"></i></a>
          </li>
        </ul>
      </div>
      <div class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </nav>
  </header>
</template>

<script>
//import Burger from "./Burger";
export default {
  el: "#header",
  data() {
    return {
      active_el: 1,
    };
  },
  methods: {
    activate: function (el) {
      this.active_el = el;
    },
  },
};
</script>

<style lang="scss" scoped>
.active {
  color: $main-links-color;
}
.header-wrapper {
  background-color: black;
  color: white;
  position: sticky;
  top: 0;
}
.header-wrapper-nav {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  font-family: $nav-tittle-font;
  margin: auto;
  min-height: 10vh;
  padding: 2rem;
  width: 90%;
}
.header-wrapper-ul {
  align-items: center;
  display: flex;
  flex: 1 1 40rem;
  justify-content: space-around;
  list-style: none;
}

.header-logo {
  flex: 2 1 40rem;
  font-family: fontLogo, sans-serif;
}
a {
  padding: 3rem;
  transition: 0.2s ease-in;
}
a:hover {
  color: lightseagreen;
  transition: 0.2s ease-in;
}
.burger {
  display: none;
}
.burger div {
  width: 28px;
  height: 3px;
  background-color: white;
  margin: 5px;
}

@media screen and (max-width: 768px) {
  .menu {
    position: absolute;
    right: 0;
    height: 96vh;
    top: 3.9vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
  }
  h2 {
    border-bottom: 1px white solid;
    padding: 0 1rem;
  }
  .header-wrapper-ul {
    display: flex;
    flex-direction: column;
  }
}
</style>
