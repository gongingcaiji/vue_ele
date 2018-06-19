<template>
  <div id="app">
    <hea></hea>

    <router-view></router-view>

    <foot></foot>

  </div>
</template>

<script>
  import hea from './components/hea'
  import foot from './components/foot'

  import home from './components/home';
  import my from './components/my';
  import myorder from './components/myorder';
  import worker from './components/worker';
  import login from './components/login';
  import register from './components/register';
  
  export default {
    name: 'App',
    components:{
      hea,my,home,myorder,worker,login,register,foot,
    }
  }
</script>

<style>

</style>
