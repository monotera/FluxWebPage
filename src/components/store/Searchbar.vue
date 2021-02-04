<template>
  <div id="searchbar">
    <div id="left">
      <v-select
        solo
        background-color="black"
        class="black left"
        id="select"
        :value="categorySelected"
        :items="categories"
        append-icon="mdi-chevron-down teal--text text--lighten-1 "
        v-on:change="onChangeCategory($event)"
      >
        <template v-slot:selection="{ item }">
          <span class="white--text d-flex align-center main-hover">
            {{ item }}
          </span>
        </template>
      </v-select>
    </div>

    <form id="search" @submit.prevent="onChangeName($event.target[0].value)">
      <v-text-field
        solo
        flat
        class="center"
        :height="height"
        @change="onChangeName($event)"
      ></v-text-field>
      <button class="right" type="submit">
        <v-icon class="right main-hover">mdi-magnify</v-icon>
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
html {
  font-size: 10px;
}
#searchbar {
  width: 90%;
  height: 48px;
  margin: auto;
  min-width: 300px;
  max-width: 1130px;
  display: flex;
  box-shadow: 0px 0px 15px 10px #b3b3b3;
  border-radius: 10px;
  @media (min-width: $breakpoint-desktop) {
    height: 80px;
  }
}
.left {
  width: 132px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  font-family: $footer-title-font;
  font-size: 12px;
  padding: 0 0;
  padding-top: 30px;
  border-radius: 10px 0 0 10px;
  --v-primary-lighten1: #26a69a;
  @media (min-width: $breakpoint-desktop) {
    width: 207px;
    font-size: 15px;
    padding: 0 20px;
    padding-top: 30px;
  }
}
#search {
  width: 100%;
  height: 100%;
  display: flex;
}
.center {
  height: 100%;
  width: 100%;
  font-family: $footer-title-font;
  font-size: 12px;
  color: rgb(100, 100, 100);
  padding-left: 10px;
  @media (min-width: $breakpoint-desktop) {
    font-size: 15px;
  }
}
#center:focus {
  outline: none;
}
.right {
  width: 61px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: $main-font-color;
  font-size: 26px;
  border-radius: 0 10px 10px 0;
  @media (min-width: $breakpoint-desktop) {
    width: 94px;
    font-size: 40px;
  }
  &:focus {
    outline: none;
  }
}
.left:hover .main-hover,
.main-hover:hover {
  color: $main-hover-color !important;
}
</style>

<script>
export default {
  props: ["categories", "categorySelected", "onChangeCategory", "onChangeName", "height"],
};
</script>
