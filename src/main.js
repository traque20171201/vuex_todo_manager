import Vue from 'vue'
import App from './App.vue'
import store from './store'

/**
 * Vuetify用
 */
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.prototype.$log = console.log

new Vue({
  store,
  render: h => h(App),
  vuetify,
}).$mount('#app')
