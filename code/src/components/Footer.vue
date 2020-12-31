<template>
  <footer>
    <div class="footer-leftSection">
      <p class="footer-title">@FLUXACADEMY</p>
      <p>
        @FLUXACADEMY Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a
        viverra magna. Maecenas vitae est nunc. Phasellus vitae odio posuere, cursus purus
        id, faucibus metus. Cras posuere porttitor elit. Etiam dignissim, purus nec
        suscipit pretium.
      </p>
    </div>
    <div class="footer-middleSection">
      <p class="footer-title">CONTÁCTANOS</p>
      <p>
        PHONE: 312-323-3323 <br />
        EMAIL: flux@prueba.com <br />WHATSAPP: Click aquí
      </p>
    </div>
    <div class="footer-rightSection">
      <p class="footer-title">Siguenos</p>
      <div class="footer-icons">
        <a href="https://github.com/monotera/FluxWebPage"
          ><i class="fab fa-facebook fa-lg"></i
        ></a>
        <a href="https://github.com/monotera/FluxWebPage">
          <i class="fab fa-instagram fa-lg"></i>
        </a>
        <a href="https://github.com/monotera/FluxWebPage">
          <i class="fab fa-youtube fa-lg"></i>
        </a>
        <a href="https://github.com/monotera/FluxWebPage">
          <i class="fab fa-github fa-lg"></i>
        </a>
      </div>
    </div>
    <p class="footer-copyRight">
      2020 Flux Academy by <a href="https://github.com/Manuel-2011">Manuel Mosquera</a> y
      <a href="https://github.com/monotera">Nelson Mosquera</a>
    </p>
  </footer>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
* {
  margin-bottom: 0.5rem;
  text-align: center;
}
footer {
  color: white;
  background: black;
  display: inline-block;
  font-family: "fontMontserratRegular", sans-serif;
  margin: 0;
  padding: 0;
  width: 100%;

  .footer-title {
    font-family: "fontMontserratBold", sans-serif;
  }

  .footer-copyRight {
    font-family: "fontMontserratSemiBold", sans-serif;
    padding-bottom: 0.8rem;
  }

  .footer-leftSection,
  .footer-middleSection,
  .footer-rightSection,
  .copy,
  .footer-icons {
    align-items: center;
    margin: 0.5rem;
    padding: 0.8rem;
  }
  .footer-rightSection {
    display: flex;
    flex-direction: column;
  }
  .footer-icons {
    display: flex;
    height: 0;
    justify-content: space-evenly;
    width: 100%;
    @media screen and (min-width: $breakpoint-tablet) {
      width: 40%;
    }
  }
}
</style>
