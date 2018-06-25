<template>
<div id="loginlist">
    <header class="header" id="header">
    <a href="javascript:history.go(-1)" target=_self class="back">返回</a>
    <h1>登录</h1>
    </header>
    <!-- <form method="post" class="login-form" action="" id="login" autocomplete="off"> -->
        <div class="registered">
        <div class="field">
            <input id='loginname' type="text"  class="username" placeholder="请输入账号" ref='aa' v-model="inputvalue">
        </div>
        <div class="field">
            <input type="text" name="yzm" id="yzm" class="yzm" placeholder="请输入密码"  maxlength="" ref='bb' v-model="inputpass">
            <!-- <a href="#" class="fsyzm">发送验证码</a> -->
        </div>
        </div>
        <div class="next-step" @click="loginclick">
            <button class="submit-btn" id='log' >{{logingo}}</button>
        </div>
    <!-- </form> -->
</div>
</template>
<script>
    import {mapGetters,mapMutations, mapActions} from 'vuex';
    import ajax from 'yiajax';
    export default {
        data(){
            return{
                    logingo : '登录',
                    inputvalue:'',
                    inputpass:'',
                }
        },
        methods:{
            loginclick:function(){
                this.$store.dispatch('loginDL')
                if(this.inputvalue == '' && this.inputpass == ''){
                    alert('用户或者密码不能为空')
                }else {
                    
                     if(this.inputvalue == this.registerZH){
                         alert('登录成功')
                    }else{
                        alert('用户或密码错误')
                    }
                }
               
                
            }
        },
        computed:mapGetters(['getloginZH','getloginMM']),

    }
</script>
<style>
.header-bot-item{ height:1.75rem; line-height:1.75rem; background-color:#fa4b28; color:#fff; width:100%; display: -moz-box; display: -webkit-box; display: box; -ms-flex-align: center; -webkit-align-items: center; -webkit-box-align: center; align-items: center;   }
.header-bot-item em{ font-size:0.7rem; display:block; margin-left:0.625rem; text-align: center;}
.header-bot-item h2{ font-size:0.75rem; text-align:center;-webkit-box-flex: 1;-moz-box-flex: 1;-ms-box-flex: 1; box-flex: 1; }
.header-bot-item .tel{margin-right:0.625rem; width:0.8rem; height:0.8rem; display:block; background:url(../assets/images/header-bot-tel.jpg) center center no-repeat; background-size:cover;}
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

