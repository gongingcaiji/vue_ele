<template>
  <div class="my">
      <myhead></myhead>
      <myhome></myhome>
      <foot></foot>
  </div>
</template>

<script>
    import myhead from './myhead'
    import myhome from './myhome'
    import foot from './foot'

    export default {
        components:{
            myhead,myhome,foot
        }
    }
</script>


