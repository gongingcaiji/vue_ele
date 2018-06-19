<template>
    <div class="my-face">
        <div class="my-face-con">
            <div class="my-face-pic"><img src="../assets/images/my-face-pic.jpg"></div>
            <p>18050000000</p>
            <input type="button" value="注销">
        </div>
  </div>
</template>
<style>
    .my-face{ height:6.65rem; width:100%;display:-moz-box; display:-webkit-box; display:box; -ms-flex-align: center; -webkit-align-items: center; -webkit-box-align: center; align-items: center; background:url(../assets/images/face-bg.jpg) center center no-repeat; background-size:cover; }
    .my-face .my-face-con{ height:5rem; width:5rem; margin:0 auto; position:relative;}
    .my-face .my-face-pic{ width:3.75rem; height:3.75rem; margin:0 auto; overflow:hidden; border:2px solid #fff; -moz-border-radius:100%;  -webkit-border-radius:100%; border-radius:100%;}
    .my-face p{ width:100%; text-align:center; color:#fff; font-size:0.7rem; position:absolute; bottom:0; left:0; }
    .my-face input{font-size: 14px;margin-left: 130px;}
</style>

