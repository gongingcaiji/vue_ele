<template>
  <div class="banner" id="index-banner">
  <div class="banner-pics">
    <ul class="banner-pics-list OnSale-banner">
      <li><a href="#"><img src="../assets/images/ind-banner.jpg" alt=""/></a></li>
      <li><a href="#"><img src="../assets/images/ind-banner.jpg" alt=""/></a></li>
      <li><a href="#"><img src="../assets/images/ind-banner.jpg" alt=""/></a></li>
    </ul>
  </div>
  <ul class="banner-tit">
    <li class="on"></li>
    <li></li>
    <li></li>
  </ul>
</div>
</template>
<script>
export default {
  mounted(){
      // TouchSlide({
      //     slideCell:"#index-banner",
      //     titCell:".banner-tit li",//开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
      //     mainCell:".banner-pics-list",
      //     effect:"left",
      //     autoPlay:true,//自动播放
      //     //autoPage:true, //自动分页
      // })
  }
}
</script>
<style>
.banner {position:relative;background:#fff;}
.banner-pics-list li {width:100%;}
.banner-pics-list li a img {display:block;width:100%;}
.banner-tit {position:absolute; left: 0; bottom:0.5rem; font-size: 0; width: 100%;text-align: center; background-color:transparent;}
.banner-tit li {width:0.5rem;height:0.5rem; display: inline-block; vertical-align: middle; background-color:rgba(255, 255, 255, 1);-webkit-border-radius:100%;border-radius:100%;margin-right:0.3rem; }
.banner-tit li.on {background-color:rgba(0, 0, 0, .4);}
</style>


