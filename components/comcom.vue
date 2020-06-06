<template>
  <v-row justify="start" no-gutters align="center">
    <v-text-field
      color="accent"
      class="nobord pepwrapper"
      hide-details
      solo
      flat
      dense
      :label="comp.name"
    />
    <v-text-field
      color="accent"
      class="nobord pewrapper"
      hide-details
      solo
      flat
      shaped
      dense
      :suffix="`/100%`"
    >
      <template v-slot:label>
        <span
          :style="`padding-left: ${comp.gradie === '100' ? '.4' : emAmt[comp.gradie.length]}em`"
        >{{comp.gradie}}</span>
      </template>
    </v-text-field>
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
  mounted: function() {
    // console.log(comp);
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
  /* max-width: 39%; */
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