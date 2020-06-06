<template >
  <v-card class="mx-4 golden" elevation="24">
    <v-icon class="deleteicon">fa-times</v-icon>
    <input
      type="text"
      class="px-6 display-1"
      v-bind:class="{dark: $vuetify.theme.dark}"
      :placeholder="boi.name"
    />
    <!-- <v-card-title class="px-6 display-1">{{boi.name}}</v-card-title> -->
    <v-col>
      <cc :comp="w" v-for="w in dat.weights" :key="w.name" />
      <v-btn class="my-2 mx-3">Advanced</v-btn>
      <v-divider></v-divider>
      <v-row class="pad4">
        <div class="my-2 headline">Total:</div>
        <v-spacer></v-spacer>
        <div class="my-2 headline">{{calcSum(dat)}}%</div>
        <!-- <div>{{boi}}</div> -->
      </v-row>
    </v-col>
    <v-spacer style="height: 20vh;"></v-spacer>
  </v-card>
</template>

<script>
import * as helpers from "~/backend/helpers";
import cc from "~/components/coursecomponent.vue";
export default {
  props: {
    dat: Object
  },
  mounted: function() {},
  methods: {
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
  computed: {
    boi: function() {
      return this.dat;
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
  font-size: 0.8vw;
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