<template>
  <v-row class="pad4" justify="start" no-gutters align="center">
    <v-btn icon>
      <v-icon v-if="!comp.isList">fa-check-square</v-icon>
      <v-icon v-else>fa-list</v-icon>
    </v-btn>

    <v-text-field hide-details solo flat :label="comp.name" />

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <span v-on="on">{{calcGrad(comp.grade, comp.weight) }}/{{comp.weight}}</span>
      </template>
      <span>{{comp.grade}}%</span>
    </v-tooltip>
  </v-row>
</template>

<script>
export default {
  props: {
    comp: Object
  },
  methods: {
    calcGrad(grade, weight) {
      let num = (grade / 100) * weight;
      return Math.round((num + Number.EPSILON) * 100) / 100;
    }
  }
};
</script>

<style scoped>
.pad4 {
  margin: 0 10px;
}
</style>