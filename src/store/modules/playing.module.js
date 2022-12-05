const playingModule = {
  namespaced: true,
  state: {
    listPlaying: [],
  },
  mutations: {
    setPlaying(state, payload) {
      state.listPlaying = [payload];
    },
  },
  actions: {},
  getters: {},
};

export default playingModule;
