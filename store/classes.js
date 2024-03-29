import Vue from "vue";
import { GradeComponent, Course } from "~/backend/classes";
import {
  capFirst,
  getRandomInt,
  generateName,
  getCourseObject
} from "~/backend/helpers";
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
  for (let x of Object.keys(state)) {
    if (state[x].name === name) {
      return x;
    }
  }
  return -1;
}

function saveDB(state) {
  let stringified = JSON.stringify(state);
  getCourseObject().then(course => {
    course.set("course_json", stringified);
    course.save();
  });
}

export const state = () => [];
export const mutations = {
  saveDB,
  delcomcom(state, obj) {
    let index = find(state, obj.course);
    let dad = state[index].weights;
    index = findO(dad, obj.com);
    dad = dad[index];
    index = findO(dad.grad, obj.comcom);
    // console.log(index);
    // console.log(dad.grad);
    if (Object.keys(dad.grad).length > 1) {
      delete dad.grad[index];
      // console.log(dad.grad);
      state.push("rerender");
      state.pop();
      saveDB(state);
    }
  },
  deleteClass(state, name) {
    let index = find(state, name);
    if (index != -1) {
      state.splice(index, 1);
      saveDB(state);
    } else {
      console.log("class not found");
    }
  },
  changeSub(state, vue) {
    let dat = vue.$store.state.comcom;
    let index = find(state, dat.course);
    if (index != -1) {
      let j = findO(state[index].weights, dat.com);
      if (j != -1) {
        let com = state[index].weights[j];
        let k = findO(com.grad, dat.comcom);
        if (k != -1) {
          let comcom = com.grad[k];
          let newthing = dat.new;
          if (dat.type == "name") {
            let oldVals = Object.keys(com.grad).map(v => {
              return com.grad[v].name;
            });
            if (!oldVals.includes(newthing) && newthing) {
              comcom.name = newthing;
            }
          } else {
            let grade = Number(dat.new);
            if (!isNaN(grade) && grade <= 100 && grade >= 0) {
              comcom.gradie = grade;
              vue.$root.$emit("clearcomcom");
            }
          }
          vue.$store.commit("comcom/clear");
        } else {
          console.log("subcomponent not found");
        }
      } else {
        console.log("component not found");
      }
    } else {
      console.log("class not found");
    }
    saveDB(state);
  },
  changeGrade(state, [grade, compname, name]) {
    let index = find(state, name);
    if (index != -1) {
      let j = findO(state[index].weights, compname);
      state[index].weights[j].grad = grade;
    } else {
      console.log("class not found");
    }
    saveDB(state);
  },
  changeWeights(state, [name, weights]) {
    let index = find(state, name);
    let sweight = state[index].weights;
    for (let w in weights) {
      let k = findO(sweight, w);
      if (k != -1) {
        sweight[k].weight = Number(weights[w]);
      } else {
        console.log(sweight);
        console.log(w);
        console.log("Weight not found");
      }
    }
    saveDB(state);
  },
  addComp(state, [id, name]) {
    let dad = state[find(state, name)];
    try {
      var storelen = Object.keys(dad.weights).reduce((a, b) => {
        a = parseInt(a);
        b = parseInt(b);
        return a > b ? a : b;
      });
    } catch {
      var storelen = -1;
    }
    storelen++;
    if (id === "t") {
      Vue.set(dad.weights,storelen,new GradeComponent(
        `Test ${storelen + 1}`,
        100,
        0
      ));
    } else {
      Vue.set(dad.weights,storelen, new GradeComponent(
        `Homework ${storelen + 1}`,
        100,
        0
      ));
      Vue.set(dad.weights[storelen], 'grade', { "1": 100 });
    }
    state.push("rerender");
    state.pop();
    saveDB(state);
  },
  delComp(state, [name, coursename]) {
    let dad = state[find(state, coursename)];
    let key = findO(dad.weights, name);
    delete dad.weights[key];
    state.push("rerender");
    state.pop();
    saveDB(state);
  },
  changeName(state, [nV, oV]) {
    let index = find(state, oV);
    if (index != -1) {
      state[index].name = nV;
      saveDB(state);
    } else {
      console.log("class not found");
    }
  },
  addcomcom(state, [comp, course]) {
    let index = find(state, course);
    let grand = state[index].weights;
    index = findO(grand, comp);
    let dad = grand[index];
    try {
      var storelen = Object.keys(dad.grad).reduce((a, b) => {
        a = parseInt(a);
        b = parseInt(b);
        return a > b ? a : b;
      });
    } catch {
      var storelen = -1;
    }
    storelen++;
    dad.grad[storelen] = { name: `${dad.name} ${storelen}`, gradie: 100 };
    state.push("rerender");
    state.pop();
    saveDB(state);
  },
  changeComponentName(state, [nV, oV, name]) {
    let index = find(state, name);
    if (index != -1) {
      let j = findO(state[index].weights, oV);
      console.log(state[index].weights[j])
      if (j != -1) {
        Vue.set(state[index].weights[j], 'name', nV);
        state.push('rerender')
        state.pop()
      } else {
        console.log("component not found");
      }
    } else {
      console.log("class not found");
    }
    saveDB(state)
  },
  addClass(state, classs) {
    state.push(classs);
    saveDB(state);
  },
  newClass(state) {
    let next = generateName();
    while (find(state, next) != -1) {
      next = generateName();
    }
    state.push(new Course(next, [100]));
    saveDB(state);
  },
  clear(state) {
    state.length = 0;
    saveDB(state);
  },
  replace(state, stringified) {    
    state.length = 0;
    if (!stringified) stringified = "[]";
    for (let course of JSON.parse(stringified)) {
      state.push(course);
    }
  }
};

export const getters = {
  getNames(state) {
    return state.map(v => {
      return v.name;
    });
  }
};
