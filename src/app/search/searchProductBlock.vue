<template>
    <div class="search_product">
        <a class="img_a" href="">
<!--            <img :src="this.item.img" alt="">-->
            <router-link :to="'/product/' + this.item.id">
                <img v-lazy="this.item.img" :key="this.item.img" alt="">
            </router-link>
        </a>
        <div style="height: 50px;"></div>
        <div class="name">
            <a href="">{{this.item.name}}}</a>
        </div>
        <div class="des">
            <a href="">{{this.item.des}}</a>
        </div>
        <div class="price">
            <span> ￥</span>
            <span>{{this.item.price}}</span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.search_product{
    width: 250px;
    height: 375px;
    background-color: #fff;
    vertical-align: top;
    padding: 10px 20px 22px;
    overflow: hidden;
    margin-right: 10px;
    margin-bottom: 14px;

    .img_a{
        width: 250px;
        height: 160px;
        display: block;
        text-align: center;
        cursor: pointer;
        margin: 0 auto;
        overflow: hidden;
    }
    img{
        max-width: 100%;
        height: auto;
    }
    .name{
        line-height: 17px;
        height: 36px;
        overflow: hidden;
        margin-top: 14px;
        text-align: left;
        a{
            color: $fontFooterTit;
            font-size: 12px;
        }
    }
    .des{
        height: 36px;
        line-height: 17px;
        overflow: hidden;
        margin-top: 5px;
        text-align: left;
        color: #cfcfcf;
        a{
            color: $fontSearchProductDes;
            font-size: 12px;

        }
    }
    .price{
        font-size: 14px;
        font-weight: bold;
        color: $fontSearchProductPrice;
        height: 36px;
        line-height: 36px;
    }
}
</style>
<script>
    export default {
        props: {
            item: Object
        }
    }
</script>