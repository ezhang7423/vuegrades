<template>
  <v-card>
    <v-btn @click.stop="$emit('done')" icon class="deleteicon">
      <v-icon class="small">fa-times</v-icon>
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
.deleteicon {
  float: right;
  margin: 0.5vw 0.5vw 0 0;
}
</style>