<template>
    <div class="container">
        <div class="product_list">
            <ul >
                <li v-for="(item, index) in searchList" :key="index">
                    <ProductBlock :item="item"></ProductBlock>
                </li>
            </ul>
        </div>
        <Shop-footer></Shop-footer>
        <Footer></Footer>
    </div>

</template>

<style lang="scss" scoped>
    .container{
        background-color: $lightgrey;
    }
    .product_list{
        ul{
            width: 1200px;
            height: auto;
            margin: 0 auto;
            font-size: 14px;
            overflow: hidden;
            padding-bottom: 20px;
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
        }
    }

</style>

<script>
    import productBlock from "./searchProductBlock"
    import shopFooter from '../../common/components/shopFooter/shopFooter'
    import footer from '../../common/components/footer/footer'
    export default {
        components: {
            "ProductBlock": productBlock,
            "ShopFooter": shopFooter,
            "Footer": footer
        },
        data(){
            return {
                searchList: [
                    {
                        img:"",
                        name: "GeekPro 2020 英特尔酷睿i5 分体式台式机",
                        des: "十代英特尔酷睿i5-10400F/i5-10400/Windows 10 家庭中文版 /8G/1T+256G SSD/GTX1650_4GB/黑色",
                        price: 4599
                    },
                    {
                        img:"",
                        name: "GeekPro 2020 英特尔酷睿i5 分体式台式机",
                        des: "十代英特尔酷睿i5-10400F/i5-10400/Windows 10 家庭中文版 /8G/1T+256G SSD/GTX1650_4GB/黑色",
                        price: 4599
                    },
                    {
                        img:"",
                        name: "GeekPro 2020 英特尔酷睿i5 分体式台式机",
                        des: "十代英特尔酷睿i5-10400F/i5-10400/Windows 10 家庭中文版 /8G/1T+256G SSD/GTX1650_4GB/黑色",
                        price: 4599
                    },
                    {
                        img:"",
                        name: "GeekPro 2020 英特尔酷睿i5 分体式台式机",
                        des: "十代英特尔酷睿i5-10400F/i5-10400/Windows 10 家庭中文版 /8G/1T+256G SSD/GTX1650_4GB/黑色",
                        price: 4599
                    }


                ]
            }
        }
    }

</script>