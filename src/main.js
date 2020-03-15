import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Loading from './components/common/Loading/Loading'
import BScroll from './components/common/BScroll/BScroll'
Vue.component('Loading', Loading)
Vue.component('BScroll', BScroll)


Vue.filter('handleCover', function(url,size) {
    url = url.replace(/w\.h/,size)
    return url
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')