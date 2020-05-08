import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 创建并导出vuex容器模块
export default new Vuex.Store({
  // 存储需要共享的数据状态。任何组件都可以访问或者修改容器中的state数据
  state: {
    count: 101,
    msg: 'hello'
  },
  mutations: {
    increment (state) {
      state.count++
    },
    // increment (state, data) {
    //   console.log(data)
    //   state.count += data.count
    //   state.count += data.num
    // },
    Decrement (state) {
      state.count--
    }
    // changeCount (state) {
    //   setTimeout(() => {
    //     state.count++
    //   }, 1000)
    // }
  },
  actions: {
    actionIncrement (context) {
      setTimeout(() => {
        context.commit('increment', 2)
      }, 1000)
    }
  },
  modules: {
  }
})
// 注意导出后需将store配置到main.js的根实例中
