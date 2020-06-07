<template>
  <v-app dark>
    <v-app-bar align app flat :collapse="!collapseOnScroll" :collapse-on-scroll="collapseOnScroll">
      <v-toolbar-title v-text="title" />

      <input style="display: none" v-on:change="getData" type="file" ref="fileinput" />
      <!-- <v-switch v-model="$vuetify.theme.dark" primary label="Dark Mode"></v-switch> put in a settings modal-->
      <v-btn icon @click.stop="$store.commit('classes/newClass')">
        <v-icon>fa-plus-square</v-icon>
      </v-btn>
      <v-btn icon @click.stop="download">
        <v-icon>fa-download</v-icon>
      </v-btn>
      <v-btn icon @click.stop="importt">
        <v-icon>fa-file-import</v-icon>
      </v-btn>
      <v-btn icon @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon>fa-moon</v-icon>
        <!-- make into full fledged modal later -->
      </v-btn>
      <v-spacer />
      <v-toolbar-title v-text="'Welcome back ' + $store.state.name.name " />
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
      title: "GradeGrade",
      exportedData: null
    };
  },
  mounted: function() {
    this.$store.commit("comcom/clear");
    function disableSpellCheck() {
      let selector = "input[type=text], textarea";
      let textFields = window.document.querySelectorAll(selector);
      textFields.forEach(function(field, _currentIndex, _listObj) {
        field.spellcheck = false;
      });
    }

    setTimeout(disableSpellCheck, 500);
  },
  methods: {
    simulateClick() {
      return new MouseEvent("click", {
        view: window,
        bubbles: false,
        cancelable: true
      });
    },
    download() {
      let textToSave = JSON.stringify(this.$store.state.classes);
      let hiddenElement = window.document.createElement("a");
      hiddenElement.href = "data:attachment/text," + encodeURI(textToSave);
      hiddenElement.target = "_blank";
      hiddenElement.download = `${this.$store.state.name.name}'s courses.json`;
      hiddenElement.click();
    },
    importt() {
      this.$refs.fileinput.click();
    },
    getData() {
      this.$store.commit("classes/clear");
      let file = this.$refs.fileinput.files[0];
      if (file !== undefined) {
        file.text().then(res => {
          try {
            let data = JSON.parse(res);

            for (let x of data) {
              this.$store.commit("classes/addClass", x);
            }
          } catch (e) {
            alert("that file ain't valid ma boi");
            throw "wrong file";
          }
        });
      }
    }
  }
};
</script>
