// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(iView);


 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDra-0ipyuvRtxuTgTPWXekS9IqSwVirZg',

  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
