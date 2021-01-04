module.exports = {
  "css": {
    "loaderOptions": {
      "scss": {
        "additionalData": "@import \'./src/styles/_variables.scss\'; @import \'./src/styles/fonts.scss\';"
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}