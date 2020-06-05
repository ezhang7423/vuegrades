<template>
  <v-layout column justify-center align-center>
    <v-col>hi</v-col>
    <!-- <v-switch v-model="$vuetify.theme.dark" primary label="Dark Mode"></v-switch> -->
  </v-layout>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
  components: {
    Logo,
    VuetifyLogo
  }
};
</script>
