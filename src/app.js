/**
 * Created by SHENJO on 11/13/2017.
 */
import Vue from 'vue';
import router from './router';
import App from './App.vue';
import _ from 'lodash';
import axios from 'axios';
import Store from './modules/store/index';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);
window._ = _;
Vue.http = Vue.prototype.$http = axios;
new Vue({
	el: '#app',
	router,
	Store,
	// template: '<App/>',
	// components: { App },
	render: h => h(App)
});