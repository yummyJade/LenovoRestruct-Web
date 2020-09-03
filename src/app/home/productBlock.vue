<template>
    <div class="display_block">
        <div class="pic">
            <a href="">
<!--                <img :src="this.item.img" alt="">-->
                <img src="./assets/item1.jpg" alt="">
            </a>
        </div>
        <div class="des">
            <a class="title">{{this.item.title}}</a>
            <a class="subtitle">{{this.item.subtitle}}</a>
            <a class="price" >
                <span class="sym">￥</span>
                <span class="figure">{{this.item.price}}</span>

            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .display_block{
        width: 230px;
        height: 265px;
        margin-bottom: 12px;
        background-color: $bright;
        img{
            width: 160px;
            height: 160px;
            vertical-align: middle;
        }
        .pic a{
            display: block;
            height: 170px;
            line-height: 170px;
            text-align: center;
            vertical-align: middle;
        }
        .title{
            display: block;
            height: 19px;
            line-height: 19px;
            font-size: 15px;
            color:$fontSmallTit;
            text-align: center;
            font-weight: 600;
            overflow: hidden;
            padding: 0 15px;
        }
        .subtitle{
            display: block;
            font-size: 12px;
            color: $fontSmallSubTit;
            text-align: center;
            height: 14px;
            line-height: 14px;
            margin-bottom: 10px;
            overflow: hidden;
            padding: 0 40px;
        }
        .price{
            display: block;
            font-size: 16px;
            color: $fontPrice;
            text-align: center;
            font-weight: 400;
        }
    }
</style>
<script>
    export default {
        props: {
            "item": Object
        }
    }
</script>