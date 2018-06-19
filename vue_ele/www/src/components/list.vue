<template>
<!--家居安装开始-->
<!--家居维修开始复用-->
    <div class="ind-nav ind-nav1">
        <div class="ind-tit">
            <h2>家居安装</h2> 
        </div>
        <ul class="clearfix">
            <!-- <li v-for="(item ,index) in msg3" :key='index'><div><a href="floor-classification.html"><i><img src="../assets/images/wyaz.png"></i><em>{{ item}}</em></a></div></li> -->
            <!-- <li><div><a href="floor-classification.html"><i><img src="../assets/images/wyaz.png"></i><em>卫浴安装</em></a></div></li>
            <li><div><a href="floor-classification.html"><i><img src="../assets/images/djaz.png"></i><em>灯具安装</em></a></div></li>
            <li><div><a href="floor-classification.html"><i><img src="../assets/images/dbaz.png"></i><em>地板安装</em></a></div></li>
            <li><div><a href="floor-classification.html"><i><img src="../assets/images/ymaz.png"></i><em>移门安装</em></a></div></li>
            <li><div><a href="floor-classification.html"><i><img src="../assets/images/jjaz.png"></i><em>家具安装</em></a></div></li>
            <li><div><a href="floor-classification.html"><i><img src="../assets/images/qzaz.png"></i><em>墙纸安装</em></a></div></li>
            <li><div><a href="floor-classification.html"><i><img src="../assets/images/ybddaz.png"></i><em>浴霸吊顶安装</em></a></div></li>
            <li><div><a href="add-class.html"><i><img src="../assets/images/xczx.png"></i><em>现场增项</em></a></div></li>
            <li><div><a href="javascript:void(0)" class="more"><i><img src="../assets/images/more.png"></i><em>更多</em></a></div></li> -->
            <li v-for="(item,index) in msg3" :key="index"><div><a href="floor-classification.html"><i><img src="../assets/images/wyaz.png"></i><em>{{item}}</em></a></div></li>
        </ul>
    </div>
<!--家居安装结束-->
<!--家居维修结束-->
</template>
<style>
.ind-nav{ margin-bottom:0.35rem; position: relative; }
.ind-nav::after { content: ''; height: 1px; width: 100%; background:#ededed; position: absolute; bottom: 0; left: 0;}
.ind-nav .ind-tit{ height:1.85rem; background-color:#FFF; }
.ind-nav .ind-tit h2{height:1.85rem;line-height:2rem;width:4.2rem;color:#fff;font-size:0.7rem;text-align:center;background:url(../assets/images/ind-tit.png) center center no-repeat;background-size:contain; }
.ind-nav ul{height:8rem; border-top:1px solid #efefef;overflow:hidden;  }
.ind-nav ul.intro{ height:auto; }
.ind-nav ul li{float:left;width:25%; height:4rem; box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;border-right:1px solid #ededed;border-bottom:1px solid #ededed;  -webkit-box-align: center; box-align: center;-webkit-align-items: center; align-items: center;display:-moz-box; display:-webkit-box; display:box; }
.ind-nav ul li:last-child{border-right: none;}
.ind-nav ul li div{ margin:0 auto; width: 100%; }
.ind-nav ul li a i,.more i{ width:1.5rem; height:1.5rem; display:block; margin:0 auto 0.3rem;  }
.ind-nav ul li a em,.ind-nav .more{ color:#222222; font-size:0.6rem;text-align:center; display: block;}
.ind-nav .more{ width:25%; position:absolute; bottom:0; right:0; padding: 0.6rem 0; z-index:10; background-color:#fff;border-bottom:1px solid #ededed;}
.ind-nav .add-more{ width:100%; position:static;border-bottom:none; display:block;}
ul.intro li:last-child{ border-right:1px solid #ededed;}
.ind-nav .hide-more{ display:none;}
</style>
<script>
    export default {
        data(){
            return{
                msg:123,
                caiji:{value:'123',name:'小明'},
                msg3:['卫浴安装','灯具安装','地板安装','移门安装','家具安装','墙纸安装','浴霸吊顶安装','现场增项'],
            }
        },
        methods:{
            good(){},
            good1:()=>{},
        },
        created(){

        },
        mounted(){

        }

    }

</script>