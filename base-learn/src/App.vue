<template>
  <div id="app">
    <button @click="passMsg">传你</button>
    <m-parent :msga="a" :msgb="b" :msgc="c"></m-parent>
    <router-link to="/home">home</router-link>
    <!-- <button @click="tohome">home</button> -->
    <router-view></router-view>
  </div>
</template>

<script>
import bus from './util/bus'
import MParent from './views/Parent'
  export default {
    data() {
      return {
        a: 'msga',
        b: 'msgb',
        c: 'msgc'
      }
    },
    components: {
      MParent
    },
    methods: {
      // bus 传值
      passMsg() {
        bus.$emit('msg','I am from app')
      },
      // tohome() {
      //   this.$router.push({path: '/home'})
      // }
    },
  }
</script>

<style scoped>

</style>
