<template>
  <v-card
    min-width="250px"
    min-height="400px"
    :outlined="$vuetify.theme.dark"
    tile
    elevation="24"
    class="mr-8 pa-2 mt-3"
  >
    <v-btn icon>
      <v-icon class="typeicon" v-if="!comp.isList">fa-check-square</v-icon>
      <v-icon v-else class="typeicon">fa-list</v-icon>
    </v-btn>
    <v-btn @click.stop="$emit('kill', comp.name)" icon class="deleteicon">
      <v-icon class="bigg">fa-times</v-icon>
    </v-btn>

    <v-text-field
      class="pepwrapper"
      @keyup.enter="$emit('changeCompName', [name, comp.name])"
      v-model="name"
      hide-details
      solo
      flat
      dense
      :label="comp.name"
    />
    <v-row class="px-0 around" align="center">
      <div style="font-family: AbeeZee !important" class="px-3 subtitle-1">
        Weight:
      </div>
      <v-text-field
        class="nopadsp pewrapper"
        hide-details
        v-model="weight"
        solo
        flat
        dense
      >
        <template v-slot:label>
          <span :style="`padding-left: ${boi}em`">{{ comp.weight }}%</span>
        </template>
      </v-text-field>
      <!-- <div>{{comp.weight}}%</div> -->
    </v-row>
    <div v-if="comp.isList">
      <comcom
        :offset="editMode ? -0.6 : -3.7"
        @changeSub="propUp"
        @deletecomcom="deleteComp"
        class="smallboi"
        v-for="cc in comp.grad"
        :key="cc.name"
        :comp="cc"
      />
    </div>

    <v-btn @click="addComcom" v-if="comp.isList" class="mx-2" icon small>
      <v-icon style="font-size: 15px">fa-plus</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-row class="px-3 around">
      <div>Contribution:</div>
      <div>{{ percentage }}%</div>
    </v-row>
    <!-- <v-tooltip right>
    <template v-slot:activator="{ on }">-->
    <v-row
      v-if="comp.isList"
      class="pa-3 around"
      :class="{ around: comp.isList }"
    >
      <span style="font-family: AbeeZee !important" class="headline"
        >Total score:</span
      >
      <span style="font-family: AbeeZee !important" class="headline"
        >{{ round(comp.grade) }}%</span
      >
    </v-row>
    <template v-else>
      <v-row class="pa-3 around" align="center">
        <span class="headline" style="font-family: AbeeZee !important"
          >Total score:</span
        >

        <input
          @keyup.enter="changeGrade"
          type="text"
          class="spewrapper headline pl-4"
          style="font-family: AbeeZee !important"
          v-model="grade"
          v-bind:class="[dark]"
          :placeholder="String(round(comp.grade)) + '%'"
        />
        <!-- <div>{{comp.weight}}%</div> -->
      </v-row>
    </template>

    <!-- </template> -->
    <!-- </v-tooltip> -->
  </v-card>
</template>

<script>
import comcom from "~/components/comcom.vue";
export default {
  props: {
    comp: Object,
  },
  data: () => {
    return {
      editMode: false,
      weight: "",
      grade: "",
      name: "",
      emAmt: {
        1: 6,
        2: 5.4,
        3: 5.7,
        4: 5.1,
        5: 4.6,
      },
    };
  },
  methods: {
    deleteComp(name) {
      this.$emit("delcomcom", {
        comcom: name,
        com: this.comp.name,
      });
    },
    propUp() {
      this.$store.commit("comcom/change", { com: this.comp.name });
      this.$emit("comcomChange");
    },
    calcGrad(grade, weight) {
      let num = (grade / 100) * weight;
      return Math.round((num + Number.EPSILON) * 100) / 100;
    },
    round(num) {
      return Math.round((num + Number.EPSILON) * 100) / 100;
    },
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
    addComcom() {
      this.$emit("addcomcom", this.comp.name);
    },
  },
  mounted: function () {
    this.$root.$on("editcomcom", () => {
      this.editMode = !this.editMode;
    });

    this.$root.$on("requestweights", () => {
      this.$root.$emit("weight", [
        this.comp.name,
        this.weight,
        this.comp.weight,
      ]);
    });
    this.$root.$on("clearweights", () => {
      this.weight = "";
    });
  },
  computed: {
    dark: function () {
      return this.$vuetify.theme.dark ? "dark" : "";
    },
    percentage() {
      return String(this.calcGrad(this.comp.grade, this.comp.weight));
    },
    boi: function () {
      let f =
        this.comp.weight === 100
          ? this.emAmt[3] - 0.9
          : this.emAmt[String(this.comp.weight).length];
      return f - 3;
    },
  },
  components: {
    comcom,
  },
};
</script>

<style scoped>
.dark::placeholder {
  color: white;
}
.nobord {
  border-radius: 0;
}
.smallboi {
  width: 14.5vw;
  max-width: 274px;
}
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
.spewrapper {
  width: 80px;
  color: white;
  /* display: none; */
}

.pewrapper {
  max-width: 30%;
}
.pepwrapper {
  /* max-width: 50%; */
}

.goright {
  float: right;
}
.pad4 {
  margin: 0 10px;
}
</style>
