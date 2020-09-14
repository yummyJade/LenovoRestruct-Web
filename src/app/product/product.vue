<template>
    <div class="container">
        <div class="mainer">
            <div class="left">
                <img class="big_pic" :src="info.img_url" alt="">
                <div class="play_pic" @mouseover="stopInv()" @mouseout="runInv()">
                    <div class="left_button" @click="gotoPage(prevIndex)">
                        <div class="inner"></div>
                        <div class="inner2"></div>
                    </div>
                    <div class="list">
                        <ul>
                            <li v-for="(item, index) in info.small_image" :key="index" @click="gotoPage(index)" @mouseover="gotoPage(index)" :class="{'current':currentIndex === index}" >
                                <img :src="item.thumb_url" alt="">
                            </li>


                        </ul>
                    </div>
                    <div class="right_button" @click= "gotoPage(nextIndex)">
                        <div class="inner"></div>
                        <div class="inner2"></div>
                    </div>





                </div>
            </div>
            <div class="right">
                <div class="big_title">
                   {{this.info.name}}
                </div>
                <div class="des">{{this.info.des}}</div>
                <span></span>
                <div class="business_staff">

                    <div class="title">价格</div>
                    <div class="price_wrap">
                        <span class="sign">¥</span>
                        <span class="price">{{this.info.price}}</span>
                    </div>

                </div>
                <div class="business_staff">

                    <div class="title">{{this.info.option.option_name}}</div>
                    <div class="detail">
                        <div  class="list" v-for="(item, index) in info.option.option_list" :key="index" :class="{'option_select':optionSelect === index}" @click="optionChange(index)">
                            <OptionBlock :item="item"></OptionBlock>
                        </div>

                    </div>



                </div>
                <div class="business_staff">

                    <div class="title">购买数量</div>
                    <div class="buy_count_wrap">
                        <div class="reduce" @click="numReduce"></div>
                        <input class="num" type="text" :value="numVal">
                        <div class="add" @click="numAdd">

                        </div>
                    </div>

                </div>

                <div class="business_staff">
                    <div class="button_group">
                        <div class="pay">立即支付</div>
                        <div class="add">加入购物车</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .mainer{
        width: 1200px;
        margin: 0 auto;
        .left{
            width: 520px;
            float: left;
            /*background-color: blueviolet;*/
            img{
                width: 520px;
                height: 520px;
            }
            .play_pic{
                display: flex;
                justify-content: space-around;
                align-items: center;
                position: relative;
            }
            .left_button{
                position: relative;
                width: 12px;
                height: 20px;
                cursor: pointer;
                margin-right: 5px;
                .inner{
                    opacity: 0.3;
                    position: absolute;
                    display: inline-block;
                    top: 0;
                    cursor: pointer;
                    border-top: 10px solid transparent;
                    border-right: 12px solid #A5A5A5;
                    border-bottom: 10px solid transparent;
                }
                .inner2{
                    top: 0;
                    left: 3px;
                    position: absolute;
                    width: 0;
                    border-top: 10px solid transparent;
                    border-right: 12px solid #ffffff;
                    border-bottom: 10px solid transparent;
                }
            }
            .right_button{
                position: relative;
                width: 12px;
                height: 20px;

                cursor: pointer;
                margin-left: 5px;
                .inner{
                    /*line-height: 86px;*/
                    opacity: 0.3;
                    position: absolute;
                    display: inline-block;
                    top: 0;
                    cursor: pointer;
                    border-top: 10px solid transparent;
                    border-left: 12px solid #A5A5A5;
                    border-bottom: 10px solid transparent;
                }
                .inner2{
                    top: 0;
                    left: -3px;
                    position: absolute;
                    width: 0;
                    border-top: 10px solid transparent;
                    border-left: 12px solid #ffffff;
                    border-bottom: 10px solid transparent;
                }

            }
            .list{
                height: 88px;
                width: 470px;
            }
            .list ul{
                display: flex;
                justify-content: space-around;
                align-items: center;

            }
            .list ul li{
                border: 1px solid $border;
                cursor: pointer;
            }

            .list img{
                width: 84px;
                height: 84px;

            }
        }

        .right{
            width: 642px;
            float: right;
            /*background-color: aqua;*/
            .big_title{
                font-size: 22px;
                word-break: break-all;
            }
            .des{
                color: $fontProductdes;
                font-size: 14px;
                margin-top: 8px;
            }
            .business_staff{
                margin: 15px 0 0px 20px;;
                .title{
                    float: left;
                    width: 58px;
                    line-height: 30px;
                    margin-right: 20px;
                    font-size: 12px;
                }
                .detail{
                    display: flex;
                    justify-content: flex-start;
                    flex-wrap: wrap;
                    width: 537px;
                    .list{
                        border: 1px solid $borderProduct;
                        margin-right: 10px;
                        margin-bottom: 10px;
                    }
                }
            }
            .option_select{
                color: $fontPriceProduct;
                border: 1px solid $fontPriceProduct !important;
            }
            .price_wrap{
                color: $fontPriceProduct;
                .price{
                    font-weight: bold;
                    font-size: 28px;

                }
            }
            .buy_count_wrap{
                width: 92px;
                height: 26px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                border: 1px solid $borderProduct;
                .reduce{
                    width: 20px;
                    height: 24px;
                    background-color: #e2231a;
                    cursor: pointer;
                }
                .add{
                    width: 20px;
                    height: 24px;
                    background-color: #e2231a;
                    cursor: pointer;
                }
                input{
                    width: 50px;
                    border: none;
                    text-align: center;
                    vertical-align: middle;
                    outline: none;
                }
            }
            .button_group{
                .pay{
                    width: 130px;
                    height: 36px;
                    line-height: 36px;
                    display: inline-block;
                    color: #FFFFFF;
                    background-color: #E1140A;
                    text-align: center;
                    font-size: 15px;
                    margin-right: 10px;
                    cursor: pointer;
                }
                .add{
                    width: 130px;
                    height: 36px;
                    line-height: 36px;
                    border: 1px solid #E1140A;
                    display: inline-block;
                    background-color: #FFEDED;
                    text-align: center;
                    color: #E1140A;
                    font-size: 15px;
                    margin-right: 10px;
                    cursor: pointer;

                }

            }

        }

        .current{
            border: 1px solid $borderchoose !important;
        }
    }

</style>
<script>
    import {getDetailInfo} from '@/common/network/api.js'
    import optionBlock from "./optionBlock"
    export default {
        components:{
          'OptionBlock': optionBlock
        },
        data(){
            return {
                id: 0,
                numVal: 1,
                optionSelect: 0,
                currentIndex: 0,   //默认显示图片
                timer: null,    //定时器,
                // bigPic: require("./assets/pic1.jpg"),
                info: {
                    "id": 1,
                    "name": "",
                    "des": "",
                    "img_url": "",
                    "thumb_url": "",
                    "price": "",
                    "stock": 128,
                    "small_image": [

                    ],
                    "option": {
                        "option_name": "选择配置",
                        "option_list": [

                        ]
                    }


                }
            }


        },
        methods: {

            numAdd() {

                this.numVal++;
            },
            numReduce() {
                if (this.numVal === 1) {
                    return
                }
                this.numVal--;
            },
            gotoPage(index) {
                this.info.img_url = this.info.small_image[index].img_url
                // console.log(this.info.small_image[index].img_url)
                this.currentIndex = index;
                //替换上面的大图
                // console.log(this.info)

            },
            runInv() {

                this.timer = setInterval(() => {
                    this.gotoPage(this.nextIndex)
                }, 3000)

            },
            stopInv() {
                clearInterval(this.timer);
                // this.gotoPage()

            },
            getDetailInfo(_this, params) {
                getDetailInfo(params).then(result => {
                    if (result.status === 200) {

                        let data = result.data.data;

                        console.log(data);
                        let infoData = {
                            id: 1,
                            name: data["name"],
                            des: data["introduce"],
                            img_url: data["img_url"],
                            thumb_url: data["thumb_url"],
                            price: data["price"],
                            stock: data["stock"],
                            small_image: data["small_image"],
                            option: data["option"]
                        }

                        //todo: 有一个小问题，最开始得到的img_url和thumb_url实际上是小图的第一组，我要手动加进去
                        if(infoData.small_image.length > 5){
                            infoData.small_image = infoData.small_image.slice(0,5)
                        }
                        _this.info = infoData
                        // console.log(infoData)

                        }
                    }).catch(err => {
                        console.log(err)
                    })
                },
            optionChange(index){
                this.optionSelect = index;
            }
            },
            //用来监控一些变
            computed: {
                //上一张
                prevIndex() {
                    if (this.currentIndex === 0) {
                        return this.info.small_image.length - 1;
                    } else {
                        return this.currentIndex - 1;
                    }
                },
                //下一张
                nextIndex() {

                    if (this.currentIndex === this.info.small_image.length - 1) {
                        return 0;
                    } else {
                        return this.currentIndex + 1;
                    }
                },


            },
            created() {
                this.id = this.$route.params.id;
                console.log(this.id)



            },
            watch:{
                $route(n,o){
                    if(n.fullPath !== o.fullPath){ //监听路由参数是否变化
                        location.reload()  //强制刷新页面
                    }
                }
            },
            mounted(){


                this.$options.methods.getDetailInfo(this, {id: this.id});
                this.timer = setInterval(() => {
                    this.gotoPage(this.nextIndex)
                }, 5000)
            },
            //销毁的时候需要顺带把timer也清了
            beforeDestroy() {
                clearInterval(this.timer);
                this.timer = null;
            }


    }
</script>