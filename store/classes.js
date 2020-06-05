import { GradeComponent, Course } from "~/backend/classes";
import * as helpers from "~/backend/helpers";
export const state = () => [];
export const mutations = {
  addClass(state, classs) {
    state.push(classs);
  },
  clear(state) {
    state.length = 0;
  }
};
