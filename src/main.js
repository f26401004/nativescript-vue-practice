import Vue from 'nativescript-vue';

import router from './router';

import store from './store';

import './styles.scss';

// Uncomment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;
Vue.registerElement('Dialog', () => require('nativescript-dialog').Dialog)

new Vue({

  router,

  store,

}).$start();
