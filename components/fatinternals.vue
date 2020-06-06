<template>
  <v-card width="100%" height="100%">
    <v-btn @click.stop="$emit('done')" icon class="deleteicon">
      <v-icon class="bigg">fa-times</v-icon>
    </v-btn>
    <v-card-title>
      <input
        type="text"
        class="px-6"
        style="width: 100%"
        v-bind:class="[size, dark]"
        :placeholder="dat.name"
      />
    </v-card-title>
    <v-card-subtitle class="mx-1 px-12 display-2">94% (A)</v-card-subtitle>
    <v-card-actions class="alignbottom">
      <v-btn class="mbigg" text>Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    dat: Object
  },
  data: () => {
    return {};
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
  }
};
</script>

<style scoped>
.bigg {
  font-size: 40px !important;
}

.mbigg {
  font-size: 1.7em !important;
}
.alignbottom {
  position: absolute;
  bottom: 0.2vw;
  left: 94vw;
}

.deleteicon {
  float: right;
  margin: 1vw 1vw 0 0;
}
</style>