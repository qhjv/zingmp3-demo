import { createStore } from 'vuex';
import globalModule from './modules/global.module.js';

export default createStore({
  modules: {
    global: globalModule,
  },
});
