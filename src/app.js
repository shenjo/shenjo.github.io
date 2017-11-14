/**
 * Created by SHENJO on 11/13/2017.
 */
import Vue from 'vue';
import router from './router';
import App from './App.vue';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

new Vue({
    el: '#app',
    router,
    // template: '<App/>',
    // components: { App },
    render: h => h(App)
});