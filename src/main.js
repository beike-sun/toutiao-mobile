import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  // 数据名，是固定的名字
  // 数据值，是上面导进来的容器数据
  // store: store  同名可以简写
  router,
  store,
  render: h => h(App)
}).$mount('#app')
