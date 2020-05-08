<template>
  <div class="foo">
      <h3>Foo组件</h3>
      <p>{{count}}</p>
      <button @click="$store.commit('increment',{count:10, num: 20})">+</button>
      <button @click="$store.commit('changeCount')">mutation中修改state数据</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'FooIndex',
  data () {
    return {
    }
  },
  // mounted: {
  //   count () {
  //     return this.$store.state.count
  //   }
  // }
  computed: Object.assign(
    mapState(['count', 'msg']),
    {
      hello () {
        return 'world'
      }
    }
  )
}
</script>

<style>
.foo{
    text-align: center;
    border: 1px solid black;
}
</style>
