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
                <div style="padding: 5px" class="text-center" v-on="on">
                  <v-icon>fa-list</v-icon>
                </div>
              </v-card>
            </v-hover>
          </template>
          <v-card>
            <comcom
              @changeSub="propUp"
              :offset="0"
              v-for="cc in comp.grad"
              :key="cc.name"
              :comp="cc"
            />
          </v-card>
        </v-menu>
      </template>
    </v-btn>

    <v-text-field
      @keyup.enter="$emit('changeCompName', [name, comp.name])"
      class="pepwrapper"
      hide-details
      solo
      flat
      dense
      v-model="name"
      :label="comp.name"
    />
    <v-spacer></v-spacer>
    <v-tooltip right>
      <template v-slot:activator="{ on }">
        <span class="pewrapper" v-on="on">
          <v-text-field
            class="goright"
            @keyup.enter="changeGrade"
            :disabled="comp.isList"
            hide-details
            solo
            v-model="grade"
            flat
            dense
            :suffix="`/${comp.weight}%`"
          >
            <template v-slot:label>
              <span
                :style="`padding-left: ${
                  percentage === '100' ? '.4' : emAmt[percentage.length]
                }em`"
                >{{ percentage }}</span
              >
            </template>
          </v-text-field>
        </span>
      </template>
      <span>{{ comp.grade }}%</span>
    </v-tooltip>
  </v-row>
</template>

<script>
import comcom from "~/components/comcom.vue";
export default {
  props: {
    comp: Object,
  },
  data: () => {
    return {
      grade: "",
      name: "",
      emAmt: {
        1: 2.3,
        2: 1.7,
        3: 1.4,
        4: 0.8,
        5: 0.2,
      },
    };
  },
  methods: {
    propUp() {
      this.$store.commit("comcom/change", { com: this.comp.name });
      this.$emit("comcomChange");
    },
    changeGrade() {
      let grade = Number(this.grade);
      if (!isNaN(grade) && grade <= 100 && grade >= 0) {
        this.$emit("changeGrade", [grade, this.comp.name]);
        this.grade = "";
      }
    },
    calcGrad(grade, weight) {
      let num = (grade / 100) * weight;
      return Math.round((num + Number.EPSILON) * 100) / 100;
    },
  },
  computed: {
    percentage() {
      return String(this.calcGrad(this.comp.grade, this.comp.weight));
    },
  },
  components: {
    comcom,
  },
};
</script>

<style scoped>
.pewrapper {
  width: 39%;
}
@media screen and (max-width: 1200px) {
  .pewrapper {
    width: 47%;
  }
}
.pepwrapper {
  max-width: 46%;
}

.goright {
  float: right;
}
.pad4 {
  margin: 0 10px;
}
</style>