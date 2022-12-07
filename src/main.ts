import { createApp } from 'vue';
import './style.css';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';
import Antd from 'ant-design-vue';
import router from './router';
import store from './store';
import vClickOutside from './directives/vClickOutside.js';

const app = createApp(App)
  .use(store)
  .use(router)
  .use(Antd)
  .directive('click-outside', vClickOutside);
app.mount('#app');
