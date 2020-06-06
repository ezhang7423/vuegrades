import { GradeComponent, Course } from "~/backend/classes";
import { capFirst, getRandomInt, generateName } from "~/backend/helpers";
function find(state, name) {
  let i = 0;
  for (let x of state) {
    if (x.name === name) {
      return i;
    }
    i++;
  }
  return -1;
}

export const state = () => [];
export const mutations = {
  deleteClass(state, name) {
    let index = find(state, name);
    if (index != -1) {
      state.splice(index, 1);
    } else {
      console.log("class not found");
    }
  },
  addClass(state, classs) {
    state.push(classs);
  },
  newClass(state) {
    let next = generateName();
    while (find(state, next) != -1) {
      next = generateName();
    }
    state.push(new Course(next, [100]));
  },
  clear(state) {
    state.length = 0;
  }
};
