<template>
    <div class="worker">
        <workerhead></workerhead>
        <workerlist></workerlist>
        <foot></foot>
    </div>
</template>
<script>
    import workerhead from './workerhead'
    import workerlist from './workerlist'
    import foot from './foot'

    export default {
        components:{
            workerhead,workerlist,foot
        }
    }
</script>

