const playingModule = {
  namespaced: true,
  state: {
    listPlaying: [],
    show: true,
  },
  mutations: {
    setPlaying(state, payload) {
      state.listPlaying = [payload];
    },
    addListPlaying(state, payload) {
      if (!state.listPlaying.find((song) => song.encodeId === payload.encodeId)) {
        state.listPlaying.push(payload);
      }
    },
    toggleListPlaying(state, payload) {
      state.show = payload;
    },
  },
  actions: {},
  getters: {},
};

export default playingModule;
