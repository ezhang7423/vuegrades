<template>
  <v-layout column justify-center align-center>
    <v-col>
      <NameInput v-show="name === ''" />
    </v-col>
    <client-only>
      <v-row>
        <CourseV v-for="course in internalState" :key="course.name" :dat="course" />
      </v-row>
    </client-only>
  </v-layout>
</template>

<script>
import NameInput from "~/components/nameinput.vue";
import { GradeComponent, Course } from "~/backend/classes";
import * as helpers from "~/backend/helpers";
import CourseV from "~/components/course.vue";
export default {
  data() {
    return {};
  },
  mounted: function() {
    if (this.$store.state.classes.length == 0) {
      console.log(this.internalState);
      let bois = helpers.addFake();
      this.$store.commit("classes/addClass", bois.x);
      this.$store.commit("classes/addClass", bois.y);
    } else {
      // let bois = helpers.addFake();
      // this.$store.commit("classes/clear");
      // this.$store.commit("classes/addClass", bois.y);
    }
  },
  computed: {
    name: function() {
      return this.$store.state.name.name;
    },
    internalState: function() {
      // try {
      let store = this.$store.state.classes;
      let act = [];
      if (store !== null) {
        let i = 0;
        for (let course of store) {
          let weights = [];
          for (let component of Object.keys(course.weights)) {
            weights.push(course.weights[component].weight);
          }
          act.push(new Course(course.name, weights));
          for (let component of Object.keys(course.weights)) {
            if (typeof course.weights[component].grad === "object") {
              act[i].weights[component].grad = course.weights[component].grad;
              act[i].weights[component].isList = true;
            } else {
              act[i].weights[component].grade = course.weights[component].grad;
            }
            act[i].weights[component].name = course.weights[component].name;
          }
          i++;
        }
        return act;
      } else {
        return "";
      }
      // } catch (e) {
      //   console.log(e);
      //   return "";
      //   //display to user
      // }
    }
  },
  methods: {},
  components: {
    NameInput,
    CourseV
  }
};
</script>
