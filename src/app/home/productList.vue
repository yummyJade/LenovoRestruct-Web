<template>
    <div class="product_list_all">
        <div class="top">
            <div class="content">
                {{this.item.name}}
            </div>
        </div>
        <div class="bottom">
            <div class="content">
                <div class="left">
                    <img :src="this.item.left" alt="">
                </div>
                <div class="right">
                    <div class="product_list_main">
                        <ul>
                            <li v-for="(item, index) in this.item.list" :key="index">
                                <ProductBlock :item="item"></ProductBlock>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>
<style lang="scss" scoped>
    .product_list_all{
        clear: both;
        height: 643px;
        .top{
            height: 100px;
            .content{
                line-height: 100px;
                width: 1200px;
                margin: 0 auto;
                font-size: 26px;
                font-weight: bold;
                color: $fontBlack;
            }
        }

    }
    .product_list_wrap .bottom{
        .content{
            width: 1200px;
            margin: 0 auto;

        }
        .left{
            width: 230px;
            height: 542px;
            float: left;
            background-color: aqua;
            img{
                width: 100%;
                height: 542px;
            }

        }
        .right{
            width: 958px;
            height: 542px;
            float: right;

        }
    }
    ul{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;

    }
</style>
<script>
    import productBlock from './productBlock'
    export default {
        props: {
            "item": Object
            // "list": Array
        },
        components:{
            "ProductBlock": productBlock,
        },
        data(){
            return{

            }
        }
    }
</script>