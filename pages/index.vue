<template>
  <v-layout style="margin-bottom: 100px" column justify-center align-center>
    <!-- <v-col>
      <NameInput v-show="name === ''" />
    </v-col> -->
    <client-only>
      <div class="course-grid">
        <CourseV
          @advanced="setAdvanced"
          v-for="course in internalState"
          :key="course.name"
          :dat="course"
        />
      </div>
    </client-only>
    <v-dialog v-model="advanced" fullscreen>
      <advancedview
        @change="editData"
        @done="advanced = false"
        :dat="internalState[advindex]"
      />
    </v-dialog>
  </v-layout>
</template>

<style scoped>
.course-grid {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
  grid-gap: 16px;
  justify-content: center;
  padding: initial;
}
</style>
<script>
import advancedview from "~/components/fatinternals.vue";
import { Course } from "~/backend/classes";
import * as helpers from "~/backend/helpers";
import CourseV from "~/components/course.vue";
export default {
  data() {
    return {
      advanced: false,
      advindex: 0,
      advname: "PSTAT 120A",
    };
  },
  async mounted() {
    if (this.$parse.User.current()) {
      let course = await helpers.getCourseObject(this.$parse);
      console.debug("course:", course);
      this.$store.commit("classes/replace", await course?.get("course_json"));
    }
  },
  methods: {
    editData(type, vals) {
      let funcname = "edit" + type;
      this[funcname](vals);
      this.$root.$emit("clearadvanced");
    },
    editTitle([nV, oV]) {
      let pot = nV;
      let already = this.$store.getters["classes/getNames"];
      if (!already.includes(pot) && pot) {
        this.$store.commit("classes/changeName", [pot, oV]);
      }
    },
    editSub() {
      this.$store.commit("comcom/change", { course: this.advname });
      this.$store.commit("classes/changeSub", this);
    },
    editCompGrade([gradee, name]) {
      this.$store.commit("classes/changeGrade", [gradee, name, this.advname]);
    },
    editCompName([nV, oV]) {
      let we = this.internalState[this.advindex].weights;
      let oldVals = Object.keys(we).map((v) => {
        return we[v].name;
      });
      if (!oldVals.includes(nV) && nV) {
        this.$store.commit("classes/changeComponentName", [
          nV,
          oV,
          this.advname,
        ]);
      }
    },
    find(state, name) {
      let i = 0;
      for (let x of state) {
        if (x.name === name) {
          return i;
        }
        i++;
      }
      return -1;
    },
    setAdvanced(name) {
      this.advindex = this.find(this.internalState, name);
      this.advname = name;
      this.advanced = true;
    },
  },
  computed: {
    name: function () {
      return this.$store.state.name.name;
    },
    internalState: function () {
      console.log("UPDATE STATE!!!");
      let store = this.$store.state.classes;
      let act = [];
      try {
        if (store !== null) {
          let i = 0;
          for (let course of store) {
            let weights = [];
            for (let component of Object.keys(course.weights)) {
              weights.push(course.weights[component].weight);
            }
            act.push(new Course(course.name, weights));
            let j = 0;
            for (let component of Object.keys(course.weights)) {
              if (typeof course.weights[component].grad === "object") {
                act[i].weights[j].grad = course.weights[component].grad;
                act[i].weights[j].isList = true;
              } else {
                act[i].weights[j].grade = course.weights[component].grad;
              }
              act[i].weights[j].name = course.weights[component].name;
              j++;
            }
            i++;
          }
          // throw "fuck";
          setTimeout(() => (this.advname = this.advname), 0);
          return act;
        } else {
          return "";
        }
      } catch (e) {
        console.log(e);
        console.log(this.$store.state.classes);
        // console.log("CLEARING STATE!!");
        // this.$store.commit("classes/clear");
        // window.location.reload();
      }
      // } catch (e) {
      //   console.log(e);
      //   return "";
      //   //display to user
      // }
    },
  },
  components: {
    CourseV,
    advancedview,
  },
};
</script>
