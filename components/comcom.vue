<template>
  <v-row justify="start" no-gutters align="center">
    <!-- <v-slide-x-transition> -->
    <v-btn
      @click.stop="$emit('deletecomcom', comp.name)"
      class="mx-3"
      icon
      x-small
      v-show="editMode == true"
    >
      <v-icon>fa-times</v-icon>
    </v-btn>
    <!-- </v-slide-x-transition> -->
    <v-text-field
      v-model="name"
      @keyup.enter="editName"
      class="nobord pepwrapper"
      hide-details
      solo
      flat
      dense
      :label="comp.name"
    />
    <v-text-field
      v-model="gradie"
      class="nobord"
      :class="editMode ? 'smallwrapper' : 'pewrapper'"
      @keyup.enter="editGrade"
      hide-details
      solo
      flat
      shaped
      dense
      :suffix="`/100%`"
    >
      <template v-slot:label>
        <span style="text-align: right">{{ comp.gradie }}</span>
      </template>
    </v-text-field>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    comp: Object,
    offset: Number,
  },
  mounted: function () {
    this.$root.$on("clearcomcom", () => {
      this.name = "";
      this.gradie = "";
    });
  },
  methods: {
    editName: function () {
      this.$store.commit("comcom/change", {
        new: this.name,
        old: this.comp.name,
        type: "name",
        comcom: this.comp.name,
      });
      this.$emit("changeSub");
    },
    editGrade: function () {
      this.$store.commit("comcom/change", {
        new: this.gradie,
        old: this.comp.gradie,
        comcom: this.comp.name,
        type: "grade",
      });
      this.$emit("changeSub");
    },
  },
  computed: {
    editMode: function () {
      return this.$store.state.advanced.editmode;
    },
    boi: function () {
      let f =
        this.comp.gradie === 100
          ? this.emAmt[3] - 0.9
          : this.emAmt[String(this.comp.gradie).length];
      return f - this.offset;
    },
  },
  data: () => {
    return {
      name: "",
      gradie: "",
      emAmt: {
        1: 2.7,
        2: 2.1,
        3: 2.4,
        4: 1.8,
        5: 1.3,
      },
    };
  },
};
</script>

<style scoped>
.nobord {
  border-radius: 0;
  /* transition: width 10s; */
}
.boi {
  width: a;
}
.pewrapper {
  max-width: 67%;
}
.smallwrapper {
  max-width: 50%;
}
.pepwrapper {
  max-width: 33%;
}

.goright {
  float: right;
}
.pad4 {
  margin: 0 10px;
}
</style>
