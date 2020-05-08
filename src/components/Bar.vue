<template>
  <div class="bar">
       <h3>Bar组件</h3>
      <p>{{$store.state.count}}</p>
      <button @click="$store.commit('Decrement')">-</button>
      <button @click="$store.dispatch('actionIncrement')">action Increment</button>
  </div>
</template>

<script>
export default {
  name: 'BarIndex',
  data () {
    return {
    }
  }
}
</script>

<style>
.bar{
    text-align: center;
    border: 1px solid black;
}
</style>
