<template>
  <v-row class="pad4" justify="start" no-gutters align="center">
    <v-btn icon>
      <v-icon v-if="!comp.isList">fa-check-square</v-icon>
      <v-icon v-else>fa-list</v-icon>
    </v-btn>

    <v-text-field class="pepwrapper" hide-details solo flat dense :label="comp.name" />
    <v-spacer></v-spacer>
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <span class="pewrapper" v-on="on">
          <v-text-field class="goright" hide-details solo flat dense :suffix="`/${comp.weight}%`">
            <template v-slot:label>
              <span :style="`padding-left: ${emAmt[percentage.length]}em`">{{percentage}}</span>
            </template>
          </v-text-field>
        </span>
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
  data: () => {
    return {
      emAmt: {
        1: 2.3,
        2: 1.7,
        3: 2,
        4: 1.4,
        5: 0.9
      }
    };
  },
  methods: {
    calcGrad(grade, weight) {
      let num = (grade / 100) * weight;
      return Math.round((num + Number.EPSILON) * 100) / 100;
    }
  },
  computed: {
    percentage() {
      return String(this.calcGrad(this.comp.grade, this.comp.weight));
    }
  }
};
</script>

<style scoped>
.boi {
  width: a;
}
.pewrapper {
  width: 39%;
}
.pepwrapper {
  max-width: 20%;
}

.goright {
  float: right;
}
.pad4 {
  margin: 0 10px;
}
</style>