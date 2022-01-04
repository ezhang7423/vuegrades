
<template>
  <v-app dark>
    <v-app-bar
      align
      app
      flat
      :collapse="!collapseOnScroll"
      :collapse-on-scroll="collapseOnScroll"
    >
      <v-toolbar-title v-text="title" />

      <v-dialog max-width="300" v-model="signup_modal">
        <signupmodal @close="closeSignupModal" />
      </v-dialog>
      <input
        style="display: none"
        v-on:change="getData"
        type="file"
        ref="fileinput"
      />
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
      <!-- <v-btn icon @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon>fa-moon</v-icon>
      </v-btn> -->
      <v-spacer />
      <div v-if="loggedin">
        <v-toolbar-title v-text="'Welcome back ' + $store.state.name.name" />
      </div>
      <div v-else>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <span @click="signup_modal = true" v-bind="attrs" v-on="on"
              ><v-btn>Login/Signup</v-btn></span
            >
          </template>
          <span>login or signup to save your courses in the cloud</span>
        </v-tooltip>
      </div>
      <!-- <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>fa-cog</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-main id="main">
      <v-container id="container">
        <nuxt />
      </v-container>
    </v-main>

    <v-footer app>
      <v-btn
        icon
        href="https://github.com/ezhang7423/vuegrades"
        target="_blank"
      >
        <v-icon>fab fa-github</v-icon>
      </v-btn>
      <span>{{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import * as helpers from "~/backend/helpers";

export default {
  data() {
    return {
      signup_modal: false,
      loggedin: false,
      collapseOnScroll: true,
      title: "GradeGrade",
      exportedData: null,
    };
  },
  created() {
    if (process.server) return;
    window.Parse = this.$parse;
  },
  mounted() {
    let user = this.$parse.User.current();
    this.loggedin = Boolean(user);
    if (user) {
      this.$store.commit("name/change", user.getUsername());
    }

    this.$store.commit("comcom/clear");
    function disableSpellCheck() {
      let selector = "input[type=text], textarea";
      let textFields = window.document.querySelectorAll(selector);
      textFields.forEach(function (field, _currentIndex, _listObj) {
        field.spellcheck = false;
      });
    }

    setTimeout(disableSpellCheck, 500);
  },
  methods: {
    async closeSignupModal() {
      this.signup_modal = false;
      let user = this.$parse.User.current();
      if (user) {
        this.$store.commit("name/change", user.getUsername());
        let course = await helpers.getCourseObject();
        this.$store.commit("classes/replace", await course.get("course_json"));

        this.loggedin = true;
      }
    },
    simulateClick() {
      return new MouseEvent("click", {
        view: window,
        bubbles: false,
        cancelable: true,
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
        file.text().then((res) => {
          try {
            this.$store.commit("classes/replace", res);
            this.$store.commit("classes/saveDB");
          } catch (e) {
            alert("that file ain't valid ma boi");
            console.error(e);
            throw "wrong file";
          }
        });
      }
    },
  },
};
</script>


<style scoped>
#main {
  overflow-y: scroll;
  height: calc(100vh - 48px);
}
#container {
  overflow-x: hidden;
}
@media only screen and (min-width: 960px) {
  #container {
    max-width: unset;
  }
}
</style>