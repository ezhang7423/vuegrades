<template>
  <v-row justify="start" no-gutters align="center">
    <v-text-field class="nobord pepwrapper" hide-details solo flat dense :label="comp.name" />
    <v-text-field class="nobord pewrapper" hide-details solo flat shaped dense :suffix="`/100%`">
      <template v-slot:label>
        <span :style="`padding-left: ${boi}em`">{{comp.gradie}}</span>
      </template>
    </v-text-field>
  </v-row>
</template>

<script>
export default {
  props: {
    comp: Object,
    offset: Number
  },
  computed: {
    boi: function() {
      let f =
        this.comp.gradie === 100
          ? this.emAmt[3] - 0.9
          : this.emAmt[String(this.comp.gradie).length];
      return f - this.offset;
    }
  },
  data: () => {
    return {
      emAmt: {
        1: 2.7,
        2: 2.1,
        3: 2.4,
        4: 1.8,
        5: 1.3
      }
    };
  }
};
</script>

<style scoped>
.nobord {
  border-radius: 0;
}
.boi {
  width: a;
}
.pewrapper {
  max-width: 67%;
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