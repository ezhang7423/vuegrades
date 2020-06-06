<template >
  <v-card class="mx-4" elevation="24">
    <v-card-title class="px-6 display-1">{{boi.name}}</v-card-title>
    <v-col>
      <cc :comp="w" v-for="w in dat.weights" :key="w.name" />
      <v-btn class="my-2 mx-3">Advanced</v-btn>
      <v-divider></v-divider>
      <v-row class="pad4">
        <div class="my-2 headline">Total:</div>
        <v-spacer></v-spacer>
        <div class="my-2 headline">{{calcSum(dat)}}%</div>
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
  mounted: function() {
    // console.log(this.dat.weights[0].grade);
  },
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
.pad4 {
  margin: 0 10px;
}
</style>