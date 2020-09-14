import Vue from 'vue'
import App from './app/App.vue'
import router from '../src/router'
import './common/style.css'
import vuelazyload from 'vue-lazyload'
// import vueSwiper from 'vue-awesome-swiper'
// import 'swiper/swiper-bundle.css'


// import './common/assets/constant'
// Vue.config.productionTip = false

// Vue.use(vueSwiper)
Vue.use(vuelazyload, {
  loading: require("@/common/assets/loading.jpg"),
  error: require("@/common/assets/loading.jpg")
})


new Vue({
  el: '#app',
  router,  // 注入到根实例中
  render: h => h(App)

}).$mount('#app')

