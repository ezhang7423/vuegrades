<template>
  <v-card
    min-width="15vw"
    min-height="52vh"
    :outlined="$vuetify.theme.dark"
    tile
    elevation="24"
    class="mr-8 pa-2"
  >
    <v-btn icon>
      <v-icon class="typeicon" v-if="!comp.isList">fa-check-square</v-icon>
      <v-icon v-else class="typeicon">fa-list</v-icon>
    </v-btn>
    <v-btn @click.stop="$emit('kill')" icon class="deleteicon">
      <v-icon class="bigg">fa-times</v-icon>
    </v-btn>

    <v-text-field class="pepwrapper" hide-details solo flat dense :label="comp.name" />
    <v-row class="px-3 around">
      <div class="px-0 subtitle-1">Weight:</div>
      <div>{{comp.weight}}%</div>
    </v-row>
    <div v-if="comp.isList">
      <comcom v-for="cc in comp.grad" :key="cc.name" :comp="cc" />
    </div>
    <v-spacer></v-spacer>
    <v-row class="px-3 around">
      <div>Contribuition:</div>
      <div>{{percentage}}%</div>
    </v-row>
    <!-- <v-tooltip right>
    <template v-slot:activator="{ on }">-->
    <v-row class="pa-3 around">
      <span class="headline">Total score:</span>
      <span class="headline">{{comp.grade}}%</span>
    </v-row>
    <!-- </template> -->
    <!-- </v-tooltip> -->
  </v-card>
</template>

<script>
import comcom from "~/components/comcom.vue";
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
  },
  components: {
    comcom
  }
};
</script>

<style scoped>
.around {
  justify-content: space-between;
  margin: 0 1px;
}
.typeicon {
  font-size: 18px !important;
}
.deleteicon {
  float: right;
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