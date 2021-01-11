<template>
  <div id="contact">
    <address class="contact-section">
      <h1 class="contact-tittle">CONTÁCTANOS</h1>
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
      <h1 class="contact-tittle">TIENES ALGUNA DUDA?</h1>
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
  color: $main-font-color;
  font-family: $contact-main-font;
  padding: 4rem 1rem;

  @media screen and (min-width: $breakpoint-desktop) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
.contact-section {
  box-sizing: border-box;
  width: 100%;
  padding: 1rem;
  background-color: $dark-theme-surface;
  border-radius: 10px;
  margin: 2rem 0;
  background-color: $dark-theme-surface2;
  border-radius: 10px;

  @media screen and (min-width: $breakpoint-desktop) {
    width: 50%;
    margin: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .contact-main-section {
    display: flex;
    padding: 2rem 0;
    justify-content: space-around;
    @media screen and (min-width: $breakpoint-desktop) {
      flex-direction: column;
      align-items: center;
      padding: 0;
    }
  }

  .contact-tittle {
    text-align: center;
    font-family: $footer-title-font;
    font-size: 1.2rem;
    padding: 1rem;
    @media screen and (min-width: $breakpoint-tablet) and (max-width: $breakpoint-desktop) {
      font-size: 1.5rem;
    }
    @media screen and (min-width: $breakpoint-desktop) {
      font-size: 2rem;
      margin: 1rem 0;
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
    @media screen and (min-width: $breakpoint-desktop) {
      font-size: 1.8rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 25rem;
      padding: 2rem 0;
    }
    p {
      font-family: $footer-copyRigth-font;
      padding-top: 1rem;
      @media screen and (min-width: $breakpoint-desktop) {
        padding: 0;
      }
    }
    i {
      padding: 0 1rem;

      @media screen and (min-width: $breakpoint-desktop) {
        align-self: center;
      }
    }
  }

  .contact-phone {
    border-right: 3px solid white;
    @media screen and (min-width: $breakpoint-desktop) {
      border-right: none;
      border-top: 2px solid white;
      border-bottom: 2px solid white;
      padding: 3rem 0;
    }
  }
}

.question-section {
  width: 100%;
  padding: 1rem;
  background-color: $dark-theme-surface2;
  border-radius: 10px;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: $breakpoint-desktop) {
    width: 50%;
    margin: 1.5rem;
    font-size: 1.2rem;
  }
  .contact-tittle {
    text-align: center;
    font-family: $footer-title-font;
    font-size: 1.2rem;
    padding: 1rem;
    @media screen and (min-width: $breakpoint-desktop) {
      font-size: 1.5rem;
    }
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
    @media screen and (min-width: $breakpoint-tablet) and (max-width: $breakpoint-desktop) {
      font-size: 1rem;
    }
    @media screen and (min-width: $breakpoint-desktop) {
      font-size: 1.2rem;
    }
  }
}
</style>
