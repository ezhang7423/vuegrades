<template>
  <v-layout column justify-center align-center>
    <v-col>
      <NameInput v-if="this.$store.state.name.name === ''" />
    </v-col>
  </v-layout>
</template>

<script>
import NameInput from "~/components/nameinput.vue";

export default {
  data() {
    return {
      name: ""
    };
  },
  methods: {},
  components: {
    NameInput
  }
};
</script>
