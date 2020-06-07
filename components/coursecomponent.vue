<template>
  <v-row class="pad4" justify="start" no-gutters align="center">
    <v-btn icon>
      <v-icon v-if="!comp.isList">fa-check-square</v-icon>
      <template v-else>
        <v-menu
          max-width="10%"
          :close-on-content-click="false"
          offset-y
          transition="slide-x-transition"
          bottom
        >
          <template v-slot:activator="{ on }">
            <v-hover v-slot:default="{ hover }">
              <v-card flat :elevation="hover ? 2 : 0">
                <div style="padding: 5px;" class="text-center" v-on="on">
                  <v-icon>fa-list</v-icon>
                </div>
              </v-card>
            </v-hover>
          </template>
          <v-card>
            <comcom :offset="0" v-for="cc in comp.grad" :key="cc.name" :comp="cc" />
          </v-card>
        </v-menu>
      </template>
    </v-btn>

    <v-text-field class="pepwrapper" hide-details solo flat dense :label="comp.name" />
    <v-spacer></v-spacer>
    <v-tooltip right>
      <template v-slot:activator="{ on }">
        <span class="pewrapper" v-on="on">
          <v-text-field class="goright" hide-details solo flat dense :suffix="`/${comp.weight}%`">
            <template v-slot:label>
              <span
                :style="`padding-left: ${percentage === '100' ? '.4' : emAmt[percentage.length]}em`"
              >{{percentage}}</span>
            </template>
          </v-text-field>
        </span>
      </template>
      <span>{{comp.grade}}%</span>
    </v-tooltip>
  </v-row>
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