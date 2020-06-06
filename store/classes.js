export const state = () => [];
export const mutations = {
  addClass(state, classs) {
    state.push(classs);
  },
  clear(state) {
    state.length = 0;
  }
};
