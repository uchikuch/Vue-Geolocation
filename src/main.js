import Vue from "vue";
import App from "./App.vue";
import VueGeolocation from "vue-browser-geolocation";

Vue.config.productionTip = false;
Vue.use(VueGeolocation);

import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAyU7VS26X06vH8fXfbMy7XmDwDuy_xJxg",
    installComponents: false,
  },
});

new Vue({
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
