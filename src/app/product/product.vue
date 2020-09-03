<template>
    <div class="container">
        <div class="mainer">
            <div class="left">
                <img class="big_pic" src="./assets/pic1.jpg" alt="">
                <div class="play_pic">
                    <div class="left_button"></div>
                    <div class="list">
                        <ul>
                            <li>
                                <img src="./assets/pic1.jpg" alt="">
                            </li>
                            <li>
                                <img src="./assets/pic1.jpg" alt="">
                            </li>
                            <li>
                                <img src="./assets/pic1.jpg" alt="">
                            </li>
                            <li>
                                <img src="./assets/pic1.jpg" alt="">
                            </li>
                            <li>
                                <img src="./assets/pic1.jpg" alt="">
                            </li>

                        </ul>
                    </div>
                    <div class="right_button"></div>

                </div>
            </div>
            <div class="right">
                <div class="big_title">
                    2020款小新 Pro 13 英特尔酷睿i5 13.3英寸全面屏轻薄笔记本 亮银
                </div>
                <div class="des">第十代英特尔酷睿i5-10210U/Windows 10 家庭中文版/13.3英寸/16GB/512G SSD/GeForce MX350 2G独显/亮银</div>
                <div class="business_staff">
                    <div class="title">购买数量</div>
                    <div class="buy_count_wrap">
                        <div class="reduce" @click="numReduce"></div>
                        <input class="num" type="text" :value="numVal">
                        <div class="add" @click="numAdd"></div>
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
            background-color: blueviolet;
            img{
                width: 520px;
                height: 520px;
            }
            .play_pic{
                display: flex;
                justify-content: space-around;
                align-items: center;
            }
            .left_button{
                width: 24px;
                height: 86px;
                background-color: #e2231a;
            }
            .right_button{
                width: 24px;
                height: 86px;
                background-color: #e2231a;
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
                }
                .add{
                    width: 20px;
                    height: 24px;
                    background-color: #e2231a;
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
    }

</style>
<script>
    export default {
        data(){
            return{
                numVal: 1
            }
        },
        methods:{
            numAdd(){

                this.numVal++;
            },
            numReduce(){
                if(this.numVal === 1){
                    return
                }
                this.numVal--;
            }
        }
    }
</script>