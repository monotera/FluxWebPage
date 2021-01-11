<template>
  <div id="contact">
    <address class="contact-section">
      <h1 class="tittle">CONTACTANOS</h1>
      <div class="contact-main-section">
        <div class="contact-phone">
          <i class="fas fa-phone-alt"></i>
          <p>312-578-4791</p>
        </div>
        <div class="contact-email">
          <i class="far fa-envelope"></i>
          <p>flux@prueba.com</p>
        </div>
      </div>
    </address>
    <div class="question-section">
      <h1>TIENES ALGUNA DUDA?</h1>
      <form class="questions-main-section">
        <p class="question-title">Nombre *</p>
        <textField />
        <p class="question-title">Email *</p>
        <textField />
        <p class="question-title">Mensaje *</p>
        <textField />
      </form>
      <div class="p">
        <button type="submit">Enviar</button>
      </div>
    </div>
  </div>
</template>

<script>
import textField from "./Text-field";
export default {
  components: {
    textField,
  },
};
</script>

<style lang="scss" scoped>
#contact {
  background-color: $dark-theme-background;
  color: white;
  font-family: $footer-main-font;
  padding: 4rem 1rem;
}
.contact-section {
  box-sizing: border-box;
  width: 100%;
  padding: 1rem;
  background-color: $dark-theme-surface;
  border-radius: 10px;
  margin: 2rem 0;
  background-color: gray;
  border-radius: 10px;
  .contact-main-section {
    display: flex;
    padding: 2rem 0;
    justify-content: space-around;
  }

  .tittle {
    text-align: center;
    font-family: $footer-title-font;
    font-size: 1.2rem;
    padding: 1rem;
    @media screen and (min-width: $breakpoint-tablet) and (max-width: $breakpoint-desktop) {
      font-size: 1.5rem;
    }
  }

  .contact-phone,
  .contact-email {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.9rem;
    width: 50%;
    @media screen and (min-width: $breakpoint-tablet) and (max-width: $breakpoint-desktop) {
      font-size: 1.3rem;
    }
    p {
      font-family: $footer-copyRigth-font;
      padding-top: 1rem;
    }
  }

  .contact-phone {
    border-right: 3px solid white;
  }
}

.question-section {
  width: 100%;
  padding: 1rem;
  background-color: gray;
  border-radius: 10px;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  h1 {
    text-align: center;
    font-family: $footer-title-font;
    font-size: 1.2rem;
    padding: 1rem;
  }
  .question-title {
    margin-left: 12px;
    font-family: $footer-copyRigth-font;
  }
  .p {
    width: 100%;
    align-self: center;
    text-align: center;
  }
  button {
    margin: auto;
    padding: 0.5rem 2rem;
    border: 3px solid $main-font-color;
    color: $main-font-color;
    background-color: $main-background-color;
    cursor: pointer;
    font-family: "headers-font";
    transition: 0.5s;
    font-size: 0.8rem;
    &:hover {
      background-color: $secondary-background-color;
      color: $secondary-font-color;
    }
  }
}
</style>
