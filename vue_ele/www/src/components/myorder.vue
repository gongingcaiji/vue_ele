<template>
    <div class="myorder">
        <myorderhead></myorderhead>
        <myorderhome></myorderhome>
        <foot></foot>
    </div>
</template>
<script>
    import myorderhead from './myorderhead'
    import myorderhome from './myorderhome'
    import foot from './foot'

    export default {
        components:{
            myorderhead,myorderhome,foot
        }
    }
</script>

