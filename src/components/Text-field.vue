<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col :cols="length">
          <v-text-field
            dark
            filled
            :label="message"
            :height="heigth"
            clearable
            :rules="rule"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
export default {
  props: {
    message: String,
    length: Number,
    heigth: String,
    rule: String,
  },
};
</script>
