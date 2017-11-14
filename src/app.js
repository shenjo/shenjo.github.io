/**
 * Created by SHENJO on 11/13/2017.
 */
import Vue from 'vue';
import router from './router';
import App from './App.vue';
import _ from 'lodash';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
window._ = _;

new Vue({
    el: '#app',
    router,
    // template: '<App/>',
    // components: { App },
    render: h => h(App)
});