import Vue from 'nativescript-vue';

import router from './router';

import store from './store';

import firebase from 'nativescript-plugin-firebase';

import './styles.scss';

// init the firebase.
firebase.init({
  onAuthStateChanged: data => {
    console.log((data.loggedIn ? "Logged in to firebase" : "Logged out from firebase") + " (init's onAuthStateChanged callback)");
  },
  persist: false
}).then(
  () => {
    console.log('Firebase is ready')
  }, 
  error => {
    console.log(error)
  }
)

// Uncomment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;
Vue.registerElement('Dialog', () => require('nativescript-dialog').Dialog)

new Vue({

  router,

  store,

}).$start();