export const state = () => ({
  old: "",
  new: "",
  com: "",
  comcom: "",
  course: "",
  type: ""
});

export const mutations = {
  change(state, obj) {
    for (let x of Object.keys(obj)) {
      state[x] = obj[x];
    }
  },
  clear(state) {
    for (let x of Object.keys(state)) {
      state[x] = "";
    }
  }
};
