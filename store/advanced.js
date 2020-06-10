export const state = () => ({
  name: ""
});

export const mutations = {
  set(state, name) {
    state.name = name;
  }
};
