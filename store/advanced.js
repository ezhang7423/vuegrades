export const state = () => ({
  name: "",
  editmode: false
});

export const mutations = {
  set(state, name) {
    state.name = name;
  },
  toggleEdit(state, val) {
    state.editmode = !state.editmode;
  }
};
