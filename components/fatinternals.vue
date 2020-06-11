<template>
  <v-card class="pl-6 pt-2" width="100%" height="100%">
    <v-btn @click.stop="$emit('done')" icon class="deleteicon">
      <v-icon class="bigg">fa-times</v-icon>
    </v-btn>
    <v-card-title>
      <input
        @keyup.enter="$emit('change', 'Title', [name, dat.name])"
        type="text"
        style="width: 100%"
        v-model="name"
        v-bind:class="[size, dark]"
        :placeholder="dat.name"
      />
    </v-card-title>
    <v-card-subtitle class="mx-1 display-2"
      >{{ calcSum(dat) }}% ({{ letterGrade(calcSum(dat)) }})</v-card-subtitle
    >

    <div class="mx-8">
      <v-row class="centerme mx-0 mb-8">
        <ic
          @kill="deleteComp"
          @comcomChange="$emit('change', 'Sub')"
          @delcomcom="delcomcom"
          @changeCompName="changeCompName"
          @changeGrade="editCompGrade"
          @addcomcom="addcomcom"
          :comp="w"
          v-for="w in dat.weights"
          :key="w.name"
        />
      </v-row>
      <v-divider></v-divider>
      <div>
        <v-btn @click="getWeights" class="my-2 mbigg" text>
          <span>Update Weights</span>
        </v-btn>
      </div>

      <v-btn @click.stop="addComp('l')" class="my-2 mbigg" text>
        <v-icon>fa-list</v-icon>
      </v-btn>
      <v-btn @click.stop="addComp('t')" class="my-2 mbigg" text>
        <v-icon>fa-check-square</v-icon>
      </v-btn>
      <v-switch
        @change="$store.commit('advanced/toggleEdit')"
        class="mx-4 my-2 mbigg"
        label="Delete Mode"
      ></v-switch>
      <!-- <v-card-actions class="alignbottom">
        <v-btn class="mbigg" text>Save</v-btn>
      </v-card-actions>-->
    </div>
    <v-snackbar v-model="snackbar">
      {{ snackbartext }}
      <v-btn color="pink" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-card>
</template>

<script>
import ic from "~/components/internalcomponent.vue";
import { letterGrade } from "~/backend/helpers.js";
export default {
  props: {
    dat: Object
  },
  data: () => {
    return {
      name: "",
      weights: {},
      snackbar: false,
      snackbartext: "",
      oldweights: {}
    };
  },
  mounted: function() {
    if (this.$store.state.advanced.editmode) {
      this.$store.commit("advanced/toggleEdit");
    }
    this.$root.$on("clearadvanced", () => {
      this.name = "";
    });
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
    letterGrade,
    addComp(val) {
      this.$store.commit("classes/addComp", [val, this.dat.name]);
    },
    setSnackbar(val) {
      this.snackbartext = val;
      this.snackbar = true;
    },
    findO(state, name) {
      for (let x of Object.keys(state)) {
        if (state[x].name === name) {
          return x;
        }
      }
      return -1;
    },
    delcomcom(obj) {
      this.$store.commit("classes/delcomcom", {
        ...obj,
        course: this.dat.name
      });
    },
    deleteComp(name) {
      let key = this.findO(this.dat.weights, name);
      if (key != -1) {
        if (this.dat.weights[key].weight != 0) {
          this.setSnackbar("Please set this component's weight to 0 first.");
          return;
        }
        this.$store.commit("classes/delComp", [name, this.dat.name]);
      } else {
        this.setSnackbar(
          "Something went very wrong...this component could not be found!"
        );
      }
    },
    getWeights() {
      this.$root.$on("weight", ([k, v, o]) => {
        this.weights[k] = v;
        this.oldweights[k] = o;
      });
      this.$root.$emit("requestweights");
      setTimeout(() => {
        let total = 0;
        let notset = [];
        for (let w in this.weights) {
          if (this.weights[w] === "") {
            notset.push(w);
          }
          try {
            let pot = Number(this.weights[w]);
            if (isNaN(pot)) {
              this.setSnackbar("Weights are invalid");
              return;
            }
            total += pot;
          } catch {
            this.setSnackbar("Weights are invalid");
            return;
          }
        }
        let notTotal = 0;
        for (let i of notset) {
          notTotal += Number(this.oldweights[i]);
          delete this.weights[i];
        }

        if (total != 100 - notTotal) {
          this.setSnackbar(
            "Weights do not add up to " + String(100 - notTotal)
          );
          return;
        }

        this.$store.commit("classes/changeWeights", [
          this.dat.name,
          this.weights
        ]);
        this.$root.$emit("clearweights");
      }, 200);
    },
    addcomcom(compname) {
      this.$store.commit("classes/addcomcom", [compname, this.dat.name]);
    },
    calcGrad(grade, weight) {
      let num = (grade / 100) * weight;
      return Math.round((num + Number.EPSILON) * 100) / 100;
    },
    changeCompName(names) {
      this.$emit("change", "CompName", names);
    },
    calcSum(data) {
      if (data && Object.keys(data).length !== 0) {
        let sum = 0;
        for (let i of Object.keys(data.weights)) {
          sum += this.calcGrad(data.weights[i].grade, data.weights[i].weight);
        }
        return Math.round((sum + Number.EPSILON) * 100) / 100;
      } else {
        return 100;
      }
    },
    editCompGrade([gradee, name]) {
      this.$store.commit("classes/changeGrade", [gradee, name, this.dat.name]);
    }
  },
  computed: {
    dark: function() {
      return this.$vuetify.theme.dark ? "dark" : "";
    },
    size: function() {
      return "display-4";
      //   let length = this.dat.name.length;
      //   if (length >= 22) {
      //     return "lh headlinee";
      //   }
      //   if (length >= 14) {
      //     return "lh headline";
      //   } else {
      //     return "lh display-4";
      //   }
      // return "headlinee";
    }
  },
  components: {
    ic
  }
};
</script>

<style scoped>
.centerme {
  flex-wrap: nowrap;
}
.bigg {
  font-size: 30px !important;
}

.mbigg {
  font-size: 1.3em !important;
}
.alignbottom {
  position: absolute;
  bottom: 0.4vw;
  left: 95vw;
}

.deleteicon {
  float: right;
  margin: 0.5vw 1vw 0 0;
}
</style>
