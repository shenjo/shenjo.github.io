/**
 * Created by SHENJO on 11/13/2017.
 */
import Vue from 'vue';
import router from './router';
import App from './App.vue';
import {each} from 'lodash';
import axios from 'axios';
import store from './modules/store/store';
import filters from './modules/filters/index';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

each(filters, filter => {
  Vue.filter(filter.name, filter.func);
});
Vue.use(iView);
Vue.http = Vue.prototype.$http = axios;
new Vue({
  el: '#app',
  router,
  store,
  // template: '<App/>',
  // components: { App },
  render: h => h(App)
});