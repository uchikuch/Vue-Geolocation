import Vue from "vue";
import App from "./App.vue";
import VueGeolocation from "vue-browser-geolocation";
import key from "../config/key";

Vue.config.productionTip = false;
Vue.use(VueGeolocation);

import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: key.mapAPI,
    installComponents: false,
  },
});

new Vue({
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
