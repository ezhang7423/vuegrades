<template >
  <v-card class="ma-4 golden" elevation="24">
    <v-btn @click.stop="dialog = true" icon class="deleteicon">
      <v-icon>fa-times</v-icon>
    </v-btn>
    <input
      @keyup.enter="editTitle(title, dat.name)"
      v-model="title"
      type="text"
      class="px-6"
      v-bind:class="[size, dark]"
      :placeholder="dat.name"
    />
    <!-- <v-card-title class="px-6 display-1">{{dat.name}}</v-card-title> -->
    <v-col>
      <cc
        :comp="w"
        @comcomChange="editSub"
        @changeGrade="editCompGrade"
        @changeCompName="editCompName"
        v-for="w in dat.weights"
        :key="w.name"
      />
      <v-btn @click.stop="setAdvanced" class="my-2 mx-3">Advanced</v-btn>
      <v-divider></v-divider>
      <v-row class="pad4">
        <div class="my-2 headline" style="font-family: AbeeZee !important;">Total:</div>
        <v-spacer></v-spacer>
        <div style="font-family: AbeeZee !important;" class="my-2 headline">{{calcSum(dat)}}%</div>
        <!-- <div>{{dat}}</div> -->
      </v-row>
    </v-col>
    <v-spacer style="height: 20vh;"></v-spacer>
    <v-dialog v-model="dialog" hide-overlay max-width="12vw">
      <v-card style="min-height: 22vh">
        <v-card-title class="headline breaknormal">
          Are you sure you want to delete
          <br />
          {{dat.name}}?
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false; deleteMe()">Yes</v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">No</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import * as helpers from "~/backend/helpers";
import cc from "~/components/coursecomponent.vue";

export default {
  props: {
    dat: Object
  },
  data: () => {
    return {
      dialog: false,
      title: ""
    };
  },
  computed: {
    dark: function() {
      return this.$vuetify.theme.dark ? "dark" : "";
    },
    size: function() {
      let length = this.dat.name.length;
      if (length >= 22) {
        return "lh headlinee";
      }
      if (length >= 14) {
        return "lh headline";
      } else {
        return "lh display-1";
      }
      // return "headlinee";
    }
  },
  mounted: function() {
    // this.advanced = true;
    // console.log(this.advanced);
    // if (this.dat.name == "PSTAT120A") {
    //   this.advanced = true;
    // }
  },
  methods: {
    setAdvanced() {
      this.$emit("advanced", this.dat.name);
    },
    editSub() {
      this.$store.commit("comcom/change", { course: this.dat.name });
      this.$store.commit("classes/changeSub", this);
    },
    editCompGrade([gradee, name]) {
      this.$store.commit("classes/changeGrade", [gradee, name, this.dat.name]);
    },
    editCompName([nV, oV]) {
      let we = this.dat.weights;
      let oldVals = Object.keys(we).map(v => {
        return we[v].name;
      });
      if (!oldVals.includes(nV) && nV) {
        this.$store.commit("classes/changeComponentName", [
          nV,
          oV,
          this.dat.name
        ]);
      }
    },
    editTitle(nV, oV) {
      let pot = nV;
      let already = this.$store.getters["classes/getNames"];
      if (!already.includes(pot) && pot) {
        this.$store.commit("classes/changeName", [pot, oV]);
      }
    },
    deleteMe() {
      this.$store.commit("classes/deleteClass", this.dat.name);
    },
    calcGrad(grade, weight) {
      let num = (grade / 100) * weight;
      return Math.round((num + Number.EPSILON) * 100) / 100;
    },
    calcSum(data) {
      let sum = 0;
      for (let i of Object.keys(data.weights)) {
        sum += this.calcGrad(data.weights[i].grade, data.weights[i].weight);
      }
      return Math.round((sum + Number.EPSILON) * 100) / 100;
    }
  },
  components: {
    cc
  }
};
</script>

<style scoped>
.breaknormal {
  word-break: normal;
}
.lh {
  line-height: 2rem;
}
.headlinee {
  font-size: 1.1rem;
  width: 100%;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: normal;
}
::placeholder {
  font-family: AbeeZee;
  color: black;
}
.dark::placeholder {
  color: white;
}

.deleteicon {
  float: right;
  margin: 0.5vw 0.5vw 0 0;
}
.golden {
  width: 17.2vw;
}
.pad4 {
  margin: 0 10px;
}
</style>