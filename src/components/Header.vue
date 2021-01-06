<template>
  <header class="header-wrapper">
    <nav class="header-wrapper-nav">
      <h1 class="header-logo">Flux Academy</h1>
      <ul class="header-wrapper-ul">
        <li><a href="#Inicio">Inicio</a></li>
        <li><a href="#Clases">Clases</a></li>
        <li><a href="Galeria">Galería</a></li>
        <li><a href="Contacto">Contacto</a></li>
        <li>
          <a><i class="fas fa-shopping-cart"></i></a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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

a:hover {
  color: lightseagreen;
}
</style>
