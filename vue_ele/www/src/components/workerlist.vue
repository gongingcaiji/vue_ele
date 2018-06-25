<template>
    <div class="container" id="container"> 
        <div class="worker-join">
            <!-- <form> -->
            <div class="worker-join-item clearfix" @click="changename">
                <label for="worker-name">姓名</label><input id="worker-name" type="text" name="item-name" class="item-name" :placeholder="name" value="">
            </div>
            <div class="worker-join-item clearfix" @click="changephoneNumber">
                <label for="worker-tel">电话</label><input id="worker-tel" type="number" name="worker-tel" class="worker-tel" :placeholder="phoneNumber" value="">
            </div>
            <div class="worker-join-item clearfix file">
                <label for="worker-face">头像</label><input id="worker-face" type="text" name="worker-face" class="worker-face" placeholder="上传头像更易获得客户信任" value="">
                <div class="worker-img"><img src="images/worker-img.jpg"></div>
            </div>
            <div class="worker-join-item clearfix select" @click="changeGZ">
                <label for="worker-type">工种</label><input id="worker-type" type="text" name="worker-type" class="worker-type" :placeholder="GZ" value="">
            </div>
            <div class="worker-join-item clearfix">
                <label for="worker-age">工龄</label><input id="worker-age" type="number" name="worker-age" class="worker-age" :placeholder="GL" value="">
            </div>
            <div class="worker-join-item clearfix">
                <label for="worker-id">身份证</label><input id="worker-id" type="text" name="worker-id" class="worker-id" :placeholder="IdentityCard" value="">
            </div>
            <div class="worker-join-item clearfix">
                <label for="worker-remarks">备注</label><input id="worker-remarks" type="text" name="worker-remarks" class="worker-remarks" placeholder="其他个人描述" value="">
            </div>
            <button type="submit" class="tjxx">提交信息</button>
            <!-- </form> -->
        </div>
    </div>
</template>
<script>

import {mapGetters,mapMutations, mapActions} from 'vuex'

export default {
    data(){
        return{
            name:'',
            phoneNumber:'',
            GZ:'',
            GL:'',
            IdentityCard :''
        }
    },
    computed:mapGetters(['getName','getphoneNumber','getGZ','getGL','getIdentityCard']),
    created(){
        this.name=this.getName,
        this.phoneNumber=this.getphoneNumber,
        this.GZ = this.getGZ,
        this.GL = this.getGL,
        this.IdentityCard = this.getIdentityCard
    },
    methods:{
        ...mapActions(['changename1','changephoneNumber']),
        // changename:function(){//}
        changename:function(){
            console.log(this.$store);
            this.$store.dispatch('changename1');
            this.name=this.getName
            // this.name='蔡少东'
        },
        changephoneNumber:function(){
            this.$store.dispatch('changephoneNumber');
            // this.phoneNumber= this.getphoneNumber;
            this.phoneNumber=this.getphoneNumber
        },
        changeGZ:function(){
           this.$store.commit('CHANGE_GZ','架构师');
           this.GZ = this.getGZ
        }





    }

    

    
}
</script>
<style>
    .worker-join .worker-join-item{ font-size:0.7rem; padding:0.6rem 0.5rem; background-color:#fff; border-bottom:1px solid #e5e5e5; }
    .worker-join .worker-join-item label{ float:left; min-width:2.2rem; margin-right:0.3rem; text-align:right; }
    .worker-join .worker-join-item input{ float:left; }
    .worker-join-item.file,.worker-join-item.select{position:relative; background:#fff url(../assets/images/my-arrow.png) 95% center no-repeat;background-size:0.275rem 0.5rem; }
    .worker-join .worker-join-item.file .worker-img{ position:absolute; right:10%; top:0.2rem; width:1.5rem; height:1.5rem; border:1px solid #e8e8e8; -moz-border-radius:0.3rem; -webkit-border-radius:0.3rem; border-radius:0.3rem; overflow:hidden; }
</style>

