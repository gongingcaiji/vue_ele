<template>
  <div id="menu_con">
      <!--全部订单开始-->
      <section class="tag" style="display:block">
        <div class="my-order-item">
          <div class="my-order-item-tit clearfix">
          <h3>订单号：888888888</h3>
          <span class="my-order-wait-zf">等待支付</span>
          </div>
          <div class="my-order-item-txt">
            <div class="my-order-time">2015-11-28  13:30</div>
            <div class="my-order-address">合肥市高新区长江路拓基城市广场金座A2002</div>
          </div>
          <div class="my-order-item-btn">
            <div class="pos-r">
              <span class="my-order-item-cancel">取消订单</span>
              <span class="my-order-item-red"><a href="order-payment.html">立即支付</a></span>
            </div>  
          </div>
        </div>
        
        <div class="my-order-item">
          <div class="my-order-item-tit clearfix">
          <h3>订单号：888888888</h3>
          <span class="my-order-acceptance">订单受理中</span>
          </div>
          <div class="my-order-item-txt">
            <div class="my-order-time">2015-11-28  13:30</div>
            <div class="my-order-address">合肥市高新区长江路拓基城市广场金座A2002</div>
          </div>
          <div class="my-order-item-btn">
            <div class="pos-r">
              <span class="my-order-item-cancel">取消订单</span>
              <span class="my-order-item-jindu"><a href="order-schedule1.html">查看进度</a></span>
            </div>  
          </div>
        </div>
        
        <div class="my-order-item">
          <div class="my-order-item-tit clearfix">
          <h3>订单号：888888888</h3>
          <span class="my-order-wait-pj">待评价</span>
          </div>
          <div class="my-order-item-txt">
            <div class="my-order-time">2015-11-28  13:30</div>
            <div class="my-order-address">合肥市高新区长江路拓基城市广场金座A2002</div>
          </div>
          <div class="my-order-item-btn">
            <div class="pos-r">
              <span class="my-order-item-red"><a href="order-evaluation.html">立即评价</a></span>
              <span class="my-order-item-jindu"><a href="order-schedule1.html">查看进度</a></span>
            </div>
          </div>
        </div>
        
        <div class="my-order-item">
          <div class="my-order-item-tit clearfix">
          <h3>订单号：888888888</h3>
          <span class="my-order-over">交易完成</span>
          </div>
          <div class="my-order-item-txt">
            <div class="my-order-time">2015-11-28  13:30</div>
            <div class="my-order-address">合肥市高新区长江路拓基城市广场金座A2002</div>
          </div>
          <div class="my-order-item-btn">
            <div class="pos-r">
              <!--<span class="my-order-item-cancel">取消订单</span>
                <span class="my-order-item-jindu"><a href="order-schedule1.html">查看进度</a></span>-->
            </div>
            </div>
          </div> 
      </section>
      <!--全部订单结束-->
      
      <!--已完成开始-->
      <section class="tag" style="display:none">
        <div class="my-order-item">
          <div class="my-order-item-tit clearfix">
          <h3>订单号：888888888</h3>
          <span class="my-order-over">交易完成</span>
          </div>
          <div class="my-order-item-txt">
            <div class="my-order-time">2015-11-28  13:30</div>
            <div class="my-order-address">合肥市高新区长江路拓基城市广场金座A2002</div>
          </div>
          <div class="my-order-item-btn">
            <div class="pos-r">
            <!--  <span class="my-order-item-cancel">取消订单</span>-->
            </div>
          </div>
        </div> 
      </section>
      <!--已完成结束-->
      
      <!--待付款开始-->
      <section class="tag" style="display:none">
        <div class="my-order-item">
          <div class="my-order-item-tit clearfix">
          <h3>订单号：888888888</h3>
          <span class="my-order-wait-zf">等待支付</span>
          </div>
          <div class="my-order-item-txt">
            <div class="my-order-time">2015-11-28  13:30</div>
            <div class="my-order-address">合肥市高新区长江路拓基城市广场金座A2002</div>
          </div>
          <div class="my-order-item-btn">
            <div class="pos-r">
              <span class="my-order-item-cancel">取消订单</span>
              <span class="my-order-item-pay">立即支付</span>
            </div>
          </div>
        </div>
      </section>
      <!--待付款结束-->
      
      <!--待评价开始-->
      <section class="tag" style="display:none">
        <div class="my-order-item">
          <div class="my-order-item-tit clearfix">
          <h3>订单号：888888888</h3>
          <span class="my-order-wait-pj">待评价</span>
          </div>
          <div class="my-order-item-txt">
            <div class="my-order-time">2015-11-28  13:30</div>
            <div class="my-order-address">合肥市高新区长江路拓基城市广场金座A2002</div>
          </div>
          <div class="my-order-item-btn">
            <div class="pos-r">
              <span class="my-order-item-pj">立即评价</span>
              <span class="my-order-item-jindu"><a href="order-schedule1.html">查看进度</a></span>
            </div>  
          </div>
        </div>
      </section>
      <!--待评价结束-->
  </div>
</template>
<style>
.my-order-item{ background-color:#fff; margin-bottom:0.3rem; }
.my-order-item-tit{ padding:0 0.5rem; font-size:0.7rem; height:1.5rem; line-height:1.5rem; }
.my-order-item-tit h3{ float:left; }
.my-order-item-tit span{ float:right;}
.my-order-wait-zf{ color:#fa4b28;}
.my-order-acceptance{ color:#fa4b28;}
.my-order-wait-pj{ color:#fa4b28;}
.my-order-over{ color:#fa4b28;}
.my-order-item-txt{ padding:0.5rem; border-top:1px solid #e5e5e5; border-bottom:1px solid #e5e5e5; font-size:0.6rem; color:#666666; }
.my-order-time{ background:url(../assets/images/my-order-time.png) left center no-repeat; background-size:0.9rem 0.9rem; padding-left:1rem; margin-bottom:0.3rem; }
.my-order-address{ background:url(../assets/images/my-order-address.png) left center no-repeat; background-size:0.9rem 0.9rem; padding-left:1rem; }
.my-order-item-btn{ position:relative; height:2rem; }
.my-order-item-btn span{ display:block; float:left; text-align:center; border:1px solid #fa4b28; width:3.1rem; height:1.3rem; line-height:1.3rem; font-size:0.6rem; color:#fa4b28; margin-left:0.3rem; -moz-border-radius:0.2rem;-webkit-border-radius:0.2rem;border-radius:0.2rem;  }
.my-order-item-btn span.my-order-item-red{border:1px solid #fa4b28;color:#fa4b28;}
.my-order-item-btn span.my-order-item-red a,.my-order-item-btn span.my-order-item-jindu a{ color:#fa4b28;}
.pos-r{ position:absolute; right:0.5rem; top:0.35rem; }
</style>
<script>
  //   mapGetters,mapMutations  自带的
  // import Vuex from 'vuex' ;
  // console.log(Vuex);
  
  // import {mapGetters,mapMutations} from "vuex";
  // computed:{
  //   ...mapGetters(["favou"])
  // }




</script>
