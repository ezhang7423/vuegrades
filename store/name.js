export const state = () => ({
  name: ""
});

export const mutations = {
  change(state, name) {
    state.name = name;
  }
};
