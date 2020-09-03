import Vue from 'vue'
import App from './app/App.vue'
import router from '../src/router'
import './common/style.css'
// import './common/assets/constant'
// Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,  // 注入到根实例中
  render: h => h(App)

}).$mount('#app')


