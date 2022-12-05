import { createStore } from 'vuex';
import globalModule from './modules/global.module.js';
import playingModule from './modules/playing.module.js';

export default createStore({
  modules: {
    global: globalModule,
    playing: playingModule,
  },
});
