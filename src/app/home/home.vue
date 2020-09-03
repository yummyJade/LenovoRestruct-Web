<template>
    <div class="container">
        <Banner></Banner>
        <div class="quick_access_wrap">
            <div class="content">

                <ul>
                    <li v-for="(item, index) in quickAccessList " :key="index">
                        <QuickBlock :item="item"></QuickBlock>
                    </li>
                </ul>
            </div>
        </div>
        <div class="product_list_wrap">
            <ul>
                <li v-for="(item, index) in productLists" :key="index">
                    <ProductList :item="item"></ProductList>
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
    .quick_access_wrap{
        height: 95px;
        background-color: $bright;
        .content{
            width: 1200px;
            margin: 0 auto;
        }
        ul{
            display: flex;
            justify-content: flex-start;
            height: 95px;
        }
        li{
            width: 10%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

    }
    .product_list_wrap{
        padding-top: 20px;
        padding-bottom: 20px;
    }


</style>
<script>
    import banner from './banner'
    import quickBlock from './quickBlock'

    import productList from './productList'
    import shopFooter from '../../common/components/shopFooter/shopFooter'
    import footer from '../../common/components/footer/footer'
    // import quickAccessList  from "../../common/assets/constant"
    export default {
        components:{
            "Banner": banner,
            "QuickBlock": quickBlock,
            'ProductList': productList,
            "ShopFooter": shopFooter,
            "Footer": footer
        },
        data () {
            return {
                msg: "我是aaa 组件",
                quickAccessList: [
                    {
                        name: "会员福利",
                        imgUrl: "",
                        url:""
                    },
                    {
                        name: "驱动下载",
                        imgUrl: "",
                        url: ""
                    },
                    {
                        name: "小新铺子",
                        imgUrl: "",
                        url: ""
                    },
                    {
                        name: "拯救者联盟",
                        imgUrl: "",
                        url: ""
                    },
                    {
                        name: "Think家族",
                        imgUrl: "",
                        url: ""
                    },
                    {
                        name: "手机新品",
                        imgUrl: "",
                        url: ""
                    },
                    {
                        name: "刃天堂",
                        imgUrl: "",
                        url: ""
                    },
                    {
                        name: "选件",
                        imgUrl: "",
                        url: ""

                    },
                    {
                        name: "智能",
                        imgUrl: "",
                        url: ""
                    },
                    {
                        name: "服务",
                        imgUrl: "",
                        url: ""
                    }

                ],
                productLists: [
                    {
                        name: "Lenovo 电脑",
                        left: "",
                        list: [
                            {
                                "img": "./assets/item1.jpg",
                                "title": "2020款小新 Pro 13 英特尔酷睿i5 13.3英寸全面屏轻薄笔记本 亮银",
                                "subtitle": "第十代英特尔酷睿i5-10210U/Windows 10 家庭中文版/13.3英寸/16GB/512G SSD/GeForce MX350 2G独显/亮银",
                                "price": 5000
                            },
                            {
                                "img": "./assets/item1.jpg",
                                "title": "2020款小新 Pro 13 英特尔酷睿i5 13.3英寸全面屏轻薄笔记本 亮银",
                                "subtitle": "第十代英特尔酷睿i5-10210U/Windows 10 家庭中文版/13.3英寸/16GB/512G SSD/GeForce MX350 2G独显/亮银",
                                "price": 5000
                            },
                            {
                                "img": "./assets/item1.jpg",
                                "title": "2020款小新 Pro 13 英特尔酷睿i5 13.3英寸全面屏轻薄笔记本 亮银",
                                "subtitle": "第十代英特尔酷睿i5-10210U/Windows 10 家庭中文版/13.3英寸/16GB/512G SSD/GeForce MX350 2G独显/亮银",
                                "price": 5000
                            },
                            {
                                "img": "./assets/item1.jpg",
                                "title": "2020款小新 Pro 13 英特尔酷睿i5 13.3英寸全面屏轻薄笔记本 亮银",
                                "subtitle": "第十代英特尔酷睿i5-10210U/Windows 10 家庭中文版/13.3英寸/16GB/512G SSD/GeForce MX350 2G独显/亮银",
                                "price": 5000
                            },
                            {
                                "img": "./assets/item1.jpg",
                                "title": "2020款小新 Pro 13 英特尔酷睿i5 13.3英寸全面屏轻薄笔记本 亮银",
                                "subtitle": "第十代英特尔酷睿i5-10210U/Windows 10 家庭中文版/13.3英寸/16GB/512G SSD/GeForce MX350 2G独显/亮银",
                                "price": 5000
                            },
                            {
                                "img": "./assets/item1.jpg",
                                "title": "2020款小新 Pro 13 英特尔酷睿i5 13.3英寸全面屏轻薄笔记本 亮银",
                                "subtitle": "第十代英特尔酷睿i5-10210U/Windows 10 家庭中文版/13.3英寸/16GB/512G SSD/GeForce MX350 2G独显/亮银",
                                "price": 5000
                            },
                            {
                                "img": "./assets/item1.jpg",
                                "title": "2020款小新 Pro 13 英特尔酷睿i5 13.3英寸全面屏轻薄笔记本 亮银",
                                "subtitle": "第十代英特尔酷睿i5-10210U/Windows 10 家庭中文版/13.3英寸/16GB/512G SSD/GeForce MX350 2G独显/亮银",
                                "price": 5000
                            },
                            {
                                "img": "./assets/item1.jpg",
                                "title": "2020款小新 Pro 13 英特尔酷睿i5 13.3英寸全面屏轻薄笔记本 亮银",
                                "subtitle": "第十代英特尔酷睿i5-10210U/Windows 10 家庭中文版/13.3英寸/16GB/512G SSD/GeForce MX350 2G独显/亮银",
                                "price": 5000
                            },

                        ]
                    }
                ]

            }
        }
    }
</script>