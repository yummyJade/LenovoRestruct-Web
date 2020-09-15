<template>
    <div class="container">
<!--        todo:导航栏做一下处理-->
        <Header :val="this.searchVal"></Header>
        <Banner></Banner>
        <div class="quick_access_wrap">
            <div class="content">
                <ul>
                    <li v-for="(item, index) in quickAccessList " :key="index">
                        <!--        todo:增加一下鼠标在上面的动画-->
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
        min-width: 1200px;
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
    import {getHomeInfoByType, getHomeInfoAll} from '@/common/network/api.js'
    // import vue from 'vue'

    // import quickAccessList  from "../../common/assets/constant"
    import header from "../../common/components/header/header"
    export default {
        components:{
            "Banner": banner,
            "Header": header,
            "QuickBlock": quickBlock,
            'ProductList': productList,
            "ShopFooter": shopFooter,
            "Footer": footer
        },
        data () {
            return {
                searchVal: "",
                msg: "我是aaa 组件",
                quickAccessList: [
                    {
                        name: "会员福利",
                        imgUrl: require("./assets/member_benefit_white.png"),
                        imgUrl2 :require("./assets/member_benefit.png"),
                        url:""
                    },
                    {
                        name: "驱动下载",
                        imgUrl: require("./assets/download_white.png"),
                        imgUrl2 : require("./assets/download_red.png"),
                        url: ""
                    },
                    {
                        name: "小新铺子",
                        imgUrl: require("./assets/xiaoxin_white.png"),
                        imgUrl2: require("./assets/xiaoxin_red.png"),
                        url: ""
                    },
                    {
                        name: "拯救者联盟",
                        imgUrl: require("./assets/savegroup_white.png"),
                        imgUrl2: require("./assets/savegroup_red.png"),
                        url: ""
                    },
                    {
                        name: "Think家族",
                        imgUrl: require("./assets/tp_white.png"),
                        imgUrl2: require("./assets/tp_red.png"),
                        url: ""
                    },
                    {
                        name: "手机新品",
                        imgUrl: require("./assets/phone.png"),
                        imgUrl2: require("./assets/phone_red.png"),
                        url: ""
                    },
                    {
                        name: "刃天堂",
                        imgUrl: require("./assets/renpara_white.png"),
                        imgUrl2: require("./assets/renpara_red.png"),
                        url: ""
                    },
                    {
                        name: "选件",
                        imgUrl: require("./assets/option_white.png"),
                        imgUrl2: require("./assets/option_red.png"),
                        url: ""

                    },
                    {
                        name: "智能",
                        imgUrl: require("./assets/ai_white.png"),
                        imgUrl2: require("./assets/ai_red.png"),
                        url: ""
                    },
                    {
                        name: "服务",
                        imgUrl: require("./assets/service_white.png"),
                        imgUrl2: require("./assets/service_red.png"),
                        url: ""
                    }

                ],
                productLists: [
                    {
                        id: 1,
                        name: "Lenovo 电脑",
                        type: "computer",
                        left: require("./assets/computer_left.jpg"),
                        list: [


                        ]
                    },
                    {
                        id: 2,
                        name: "平板电脑",
                        type: "pad",
                        left: require("./assets/pad_left.jpg"),
                        list: [


                        ]
                    },
                    {
                        id: 3,
                        name: "显示器",
                        type: "monitor",
                        left: require("./assets/monitor_left.png"),
                        list: [


                        ]
                    },

                ]

            }
        },
        methods: {

            //请求网站首页数据
            getHomeInfoByType(_this, params){

                getHomeInfoByType(params).then((result) => {

                    if(result.status === 200){
                        let data = result.data.data;
                        let item = data.computer;
                        let arr = []
                        for(let i = 0; i < item.length; i++){

                            let listdata = {
                                id: item[i]["id"],
                                img: item[i]["img_url"],
                                title: item[i]["name"],
                                subtitle: item[i]["introduce"],
                                price: item[i]["price"],
                                link: item[i]["thumb_url"]
                            }

                            arr.push(listdata)


                        }
                        _this.productLists[0].list = arr
                    }


                }).catch((error) => {
                    console.log(error)
                })
            },
            //获取所有的信息
            getHomeInfoAll(_this){
                //todo: 处理一下错误
                getHomeInfoAll().then((result)=>{
                    if(result.status === 200){

                        let data = result.data.data;
                        // console.log(data)

                        for(let t = 0; t < _this.productLists.length; t++){

                            let item = data[_this.productLists[t].type]
                            let arr = []
                            // for(let i = 0; i < item.length; i++){
                            for(let i = 0; i < 8; i++){
                                let listdata = {
                                    id: item[i]["id"],
                                    img: item[i]["img_url"],
                                    title: item[i]["name"],
                                    subtitle: item[i]["introduce"],
                                    price: item[i]["price"],
                                    link: item[i]["thumb_url"]
                                }

                                arr.push(listdata)
                            }
                            _this.productLists[t].list = arr
                        }

                    }
                }).catch((error) => {
                    console.log(error)
                })
            }
            //

        },
        mounted() {


            // for(let i = 0; i < this.productLists.length; i++){
            //     this.$options.methods.getHomeInfoByType(this,{
            //         type: this.productLists.type,
            //         num: 6
            //     })
            // }
            this.$options.methods.getHomeInfoAll(this)



        },

    }
</script>