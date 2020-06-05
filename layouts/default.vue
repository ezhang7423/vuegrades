<template>
  <v-app dark>
    <v-app-bar
      align
      fixed
      app
      flat
      :collapse="!collapseOnScroll"
      :collapse-on-scroll="collapseOnScroll"
    >
      <v-toolbar-title v-text="title" />

      <!-- <v-switch v-model="$vuetify.theme.dark" primary label="Dark Mode"></v-switch> put in a settings modal-->
      <v-btn icon @click.stop="miniVariant = !miniVariant">
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
      <v-toolbar-title v-text="'Welcome back!'" />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>fa-cog</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer :fixed="fixed" app>
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
      drawer: false,
      fixed: false,
      collapseOnScroll: true,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "GradeGrade"
    };
  }
};
</script>
