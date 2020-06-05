<template>
  <v-form @submit="submit" onsubmit="return false;">
    <v-text-field v-model="name" label="What's your name?"></v-text-field>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    };
  },
  methods: {
    submit() {
      this.$store.commit("name/change", this.name);
    }
  }
};
</script>
