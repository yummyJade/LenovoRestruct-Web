<template>
    <a href="">
        <div class="quick_access_block">
            <img src="./assets/member_benefit.png" alt="">
            <span>{{this.item.name}}</span>
        </div>
    </a>

</template>
<style lang="scss" scoped>
    a{
        /*display: inline-block;*/
        /*vertical-align: middle;*/
        display: block;
    }
    img{
        display: block;
        width: 30px;
        margin: 0 auto;
    }
    span{
        display: block;
        height: 16px;
        font-size: 13px;
        color:$fontGrey;
        margin: 0 auto;
    }
</style>

<script>
    export default {
        props: ["item"]
    }

</script>
