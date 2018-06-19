<template>
    <div class="my-order">
        <myordertit></myordertit>
        <myorderlist></myorderlist>
    </div>
</template>
<script>
    import myordertit from './myordertit'
    import myorderlist from './myorderlist'

    export default {
        components:{
            myordertit,myorderlist
        }
    }
</script>


