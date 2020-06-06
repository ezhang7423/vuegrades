import NameInput from "~/components/nameinput.vue";
import { GradeComponent, Course } from "~/backend/classes";

export const state = () => [];
export const mutations = {
  addClass(state, classs) {
    state.push(classs);
  },
  newClass(state) {
    console.log("newclass called");
    state.push(new Course(`Untitled Course ${state.length + 1}`, [100]));
  },
  clear(state) {
    state.length = 0;
  }
};
