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
function findO(state, name) {
  let i = 0;
  for (let x of Object.keys(state)) {
    if (state[x].name === name) {
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
  changeName(state, [nV, oV]) {
    let index = find(state, oV);
    if (index != -1) {
      state[index].name = nV;
    } else {
      console.log("class not found");
    }
  },
  changeComponentName(state, [nV, oV, name]) {
    let index = find(state, name);
    if (index != -1) {
      let j = findO(state[index].weights, oV);
      state[index].weights[j].name = nV;
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

export const getters = {
  getNames(state) {
    return state.map(v => {
      return v.name;
    });
  }
};
