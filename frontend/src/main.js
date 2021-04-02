import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import firebase from "firebase/app";
import 'firebase/analytics';
import 'firebase/auth';

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyAEUlKCxFuBmzLExLaSic0l-0gYInf7mUM",
  authDomain: "test-auth-3ff7a.firebaseapp.com",
  projectId: "test-auth-3ff7a",
  storageBucket: "test-auth-3ff7a.appspot.com",
  messagingSenderId: "108876632383",
  appId: "1:108876632383:web:df5a1db28772529675c38a",
  measurementId: "G-PSFBRV7WRQ",
};

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log("user", user);
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});