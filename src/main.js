import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';

Vue.config.productionTip = false
Vue.mixin({
  methods: {
    sleep(time) {
      return new Promise(resolve => setTimeout(resolve, time));
    },
  }
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
