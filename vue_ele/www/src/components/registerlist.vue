<template>
<div id="loginlist">
    <form method="post" class="login-form" action="" id="login" autocomplete="off">
        <div class="registered">
        <div class="field">
            <input id="username" type="text" name="username" class="username" placeholder="请输入账号" >
        </div>
        <div class="field">
            <input type="text" name="yzm" id="yzm" class="yzm" placeholder="请输入密码"  maxlength="">
            <!-- <a href="#" class="fsyzm">发送验证码</a> -->
        </div>
        </div>
        <div class="next-step">
        <button type="submit" class="submit-btn">注册</button>
        </div>
    </form>   
</div>
</template>
<style>
.registered{ margin-top:0.3rem; padding:0 0.5rem; background-color: #fff; border-top: 1px solid #e8e8e8; border-bottom: 1px solid #e8e8e8; }
.registered .field{  border-bottom:1px solid #efefef; position:relative;}
.registered .field:last-child{border-bottom:none; }
.registered .field a.fsyzm{ position:absolute; right:0.5rem; bottom:0.5rem; display:block; width:3.85rem; height:1.35rem; line-height:1.35rem; font-size:0.6rem; text-align:center; color:#ff731c; border:1px solid #ff731c; -moz-border-radius:0.3rem;  -webkit-border-radius:0.3rem; border-radius:0.3rem; }
.registered .field input{height:2.2rem; line-height:2.2rem; font-size:0.75rem; color:#c8c8c8; }
.registered .field input.username{ width:100%; }
.registered .field input.yzm{ width:50%; }
.registered .field input::-webkit-input-placeholder,.add-class ul li input::-webkit-input-placeholder{color:#c8c8c8; }
.registered .field input:-moz-placeholder,.add-class ul li input:-moz-placeholder{color:#c8c8c8; }
.registered .field input::-moz-placeholder,.add-class ul li input::-moz-placeholder{color:#c8c8c8; }
.registered .field input:-ms-input-placeholder,.add-class ul li input:-ms-input-placeholder{color:#c8c8c8; }
</style>
