<template>
  <v-card class="pl-6 pt-2" width="100%" height="100%">
    <v-btn @click.stop="$emit('done')" icon class="deleteicon">
      <v-icon class="bigg">fa-times</v-icon>
    </v-btn>
    <v-card-title>
      <input
        @keyup.enter="$emit('change', 'Title', [name, dat.name])"
        type="text"
        style="width: 100%"
        v-model="name"
        v-bind:class="[size, dark]"
        :placeholder="dat.name"
      />
    </v-card-title>
    <v-card-subtitle class="mx-1 display-2">{{calcSum(dat)}}% ({{letterGrade(calcSum(dat))}})</v-card-subtitle>
    <div class="mx-8">
      <v-row class="centerme mx-0 mb-8">
        <ic :comp="w" v-for="w in dat.weights" :key="w.name" />
      </v-row>
      <v-divider></v-divider>
      <v-btn class="my-2 mbigg" text>
        <v-icon>fa-list</v-icon>
      </v-btn>
      <v-btn class="my-2 mbigg" text>
        <v-icon>fa-check-square</v-icon>
      </v-btn>

      <!-- <v-card-actions class="alignbottom">
        <v-btn class="mbigg" text>Save</v-btn>
      </v-card-actions>-->
    </div>
  </v-card>
</template>

<script>
import ic from "~/components/internalcomponent.vue";
import { letterGrade } from "~/backend/helpers.js";
export default {
  props: {
    dat: Object
  },
  data: () => {
    return { name: "" };
  },
  mounted: function() {
    this.$root.$on("clearadvanced", () => {
      this.name = "";
    });
    function disableSpellCheck() {
      let selector = "input[type=text], textarea";
      let textFields = window.document.querySelectorAll(selector);
      textFields.forEach(function(field, _currentIndex, _listObj) {
        field.spellcheck = false;
      });
    }

    setTimeout(disableSpellCheck, 500);
  },
  methods: {
    letterGrade,
    calcGrad(grade, weight) {
      let num = (grade / 100) * weight;
      return Math.round((num + Number.EPSILON) * 100) / 100;
    },
    calcSum(data) {
      console.log(data);
      if (data && Object.keys(data).length !== 0) {
        let sum = 0;
        for (let i of Object.keys(data.weights)) {
          sum += this.calcGrad(data.weights[i].grade, data.weights[i].weight);
        }
        return Math.round((sum + Number.EPSILON) * 100) / 100;
      } else {
        return 100;
      }
    }
  },
  computed: {
    dark: function() {
      return this.$vuetify.theme.dark ? "dark" : "";
    },
    size: function() {
      return "display-4";
      //   let length = this.dat.name.length;
      //   if (length >= 22) {
      //     return "lh headlinee";
      //   }
      //   if (length >= 14) {
      //     return "lh headline";
      //   } else {
      //     return "lh display-4";
      //   }
      // return "headlinee";
    }
  },
  components: {
    ic
  }
};
</script>

<style scoped>
.centerme {
  flex-wrap: nowrap;
}
.bigg {
  font-size: 30px !important;
}

.mbigg {
  font-size: 1.3em !important;
}
.alignbottom {
  position: absolute;
  bottom: 0.4vw;
  left: 95vw;
}

.deleteicon {
  float: right;
  margin: 0.5vw 1vw 0 0;
}
</style>