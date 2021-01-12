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
      <div class="contact-button">
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
  background-color: $dark-theme-surface;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 2rem 0;
  padding: 1rem;
  width: 100%;

  @media screen and (min-width: $breakpoint-desktop) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1.5rem;
    width: 50%;
  }

  .contact-main-section {
    display: flex;
    justify-content: space-around;
    padding: 2rem 0;

    @media screen and (min-width: $breakpoint-desktop) {
      align-items: center;
      flex-direction: column;
      padding: 0;
    }
  }

  .contact-tittle {
    font-family: $contact-title-font;
    font-size: 1.2rem;
    padding: 1rem;
    text-align: center;

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
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    width: 50%;

    @media screen and (min-width: $breakpoint-tablet) and (max-width: $breakpoint-desktop) {
      font-size: 1.3rem;
    }

    @media screen and (min-width: $breakpoint-desktop) {
      display: flex;
      font-size: 1.8rem;
      flex-direction: row;
      justify-content: center;
      padding: 2rem 0;
      width: 25rem;
    }

    p {
      font-family: $contact-text-font;
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
  background-color: $dark-theme-surface;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  padding: 1rem;
  width: 100%;

  @media screen and (min-width: $breakpoint-desktop) {
    font-size: 1.2rem;
    margin: 1.5rem;
    width: 50%;
  }

  .contact-tittle {
    font-family: $contact-title-font;
    font-size: 1.2rem;
    padding: 1rem;
    text-align: center;

    @media screen and (min-width: $breakpoint-desktop) {
      font-size: 1.5rem;
    }
  }

  .question-title {
    margin-left: 12px;
    font-family: $contact-text-font;
  }

  .contact-button {
    text-align: center;
    width: 100%;
  }

  button {
    background-color: $main-background-color;
    border: 3px solid $main-font-color;
    color: $main-font-color;
    cursor: pointer;
    font-family: $contact-text-font;
    font-size: 0.8rem;
    margin: auto;
    padding: 0.5rem 2rem;
    transition: 0.5s;

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
