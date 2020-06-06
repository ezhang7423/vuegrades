<template >
  <v-card class="mx-4 golden" elevation="24">
    <v-btn @click.stop="dialog = true" icon class="deleteicon">
      <v-icon class="small">fa-times</v-icon>
    </v-btn>
    <input
      type="text"
      class="px-6 display-1"
      v-bind:class="{dark: $vuetify.theme.dark}"
      :placeholder="dat.name"
    />
    <!-- <v-card-title class="px-6 display-1">{{dat.name}}</v-card-title> -->
    <v-col>
      <cc :comp="w" v-for="w in dat.weights" :key="w.name" />
      <v-btn class="my-2 mx-3">Advanced</v-btn>
      <v-divider></v-divider>
      <v-row class="pad4">
        <div class="my-2 headline">Total:</div>
        <v-spacer></v-spacer>
        <div class="my-2 headline">{{calcSum(dat)}}%</div>
        <!-- <div>{{dat}}</div> -->
      </v-row>
    </v-col>
    <v-spacer style="height: 20vh;"></v-spacer>
    <v-dialog v-model="dialog" hide-overlay max-width="12vw">
      <v-card>
        <v-card-title class="headline">
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
      dialog: false
    };
  },
  mounted: function() {},
  methods: {
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