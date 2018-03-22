// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import axios from 'axios';


import './assets/styles/reset.css';
import './assets/styles/base.css';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
});


Vue.prototype.$http = axios;

// 全局过滤器
Vue.filter('money', function (value, type) {
  return "¥" + value.toFixed(2) + type;
});
