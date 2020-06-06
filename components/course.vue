<template>
  <v-card elevation="24">
    <v-card-title>{{boi.name}}</v-card-title>

    <cc :comp="w" v-for="w in dat.weights" :key="w.name" />
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
    console.log(this.dat.weights[0].grade);
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
</style>