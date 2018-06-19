<template>
    <ul id="nav">
        <li><span class="selected"><h2>全部订单</h2></span></li>
        <li><span><h2>已完成</h2></span></li>
        <li><span><h2>待付款</h2></span></li>
        <li><span><h2>待评价</h2></span></li>
    </ul>
</template>
<style>
    .my-order ul{padding:0 0.5rem;}
    .my-order #nav{ border-bottom:1px solid #e5e5e5; }
    .my-order ul{ display:-moz-box; /* Firefox */display:-webkit-box; /* Safari and Chrome */display:box;text-align:center;-webkit-box-align: center;box-align: center;　-webkit-align-items: center; align-items: center; } 
    .my-order ul a{padding:0.5rem 0; -webkit-box-flex: 1;-moz-box-flex: 1;-ms-box-flex: 1; box-flex: 1; font-size:0.7rem; color:#181818; }
    .my-order ul a:last-child{ border-right:none; }
    .my-order ul li span{ display:block;}
    .my-order ul a.selected{ border-bottom:2px solid #fa4b28; color:#fa4b28; }
</style>

