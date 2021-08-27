import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueHighlightJS from 'vue-highlightjs'

import 'highlight.js/styles/a11y-dark.css'

Vue.config.productionTip = false

Vue.use(VueHighlightJS)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
