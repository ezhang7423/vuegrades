<template>
  <v-app dark>
    <v-app-bar align app flat :collapse="!collapseOnScroll" :collapse-on-scroll="collapseOnScroll">
      <v-toolbar-title v-text="title" />

      <!-- <v-switch v-model="$vuetify.theme.dark" primary label="Dark Mode"></v-switch> put in a settings modal-->
      <v-btn icon @click.stop="$store.commit('classes/newClass')">
        <v-icon>fa-plus-square</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>fa-download</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>fa-file-import</v-icon>
      </v-btn>
      <v-btn icon @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon>fa-moon</v-icon>
        <!-- make into full fledged modal later -->
      </v-btn>
      <v-spacer />
      <v-toolbar-title v-text="'Welcome back ' + this.$store.state.name.name " />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>fa-cog</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer app>
      <v-btn icon href="https://github.com/ezhang7423/vuegrades" target="_blank">
        <v-icon>fab fa-github</v-icon>
      </v-btn>
      <span>{{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      collapseOnScroll: true,
      title: "GradeGrade"
    };
  }
};
</script>
