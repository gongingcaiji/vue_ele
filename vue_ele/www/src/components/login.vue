<template>
  <div class="login">
      <loginlist></loginlist>
      <foot></foot>
  </div>
</template>
<script>
    import loginlist from './loginlist'
    import foot from './foot'

    export default {
        components:{
            loginlist,foot
        }
    }
</script>
