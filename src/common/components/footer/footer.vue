<template>
    <div class="footer">
        <div class="top">
            <ul>
                <li>
                    <a href="" class="title">服务商信息</a>
                    <a href="">购买流程</a>
                    <a href="">注册登录</a>
                </li>
                <li>
                    <a href="" class="title">配送方式</a>
                    <a href="">配送方式</a>
                    <a href="">配送方式信息</a>
                    <a href="">签收原则</a>
                    <a href="">物流查询</a>
                </li>
                <li>
                    <a href="" class="title">支付方式</a>
                    <a href=""> 分期支付</a>
                    <a href="">支付方式</a>
                    <a href="">支付问题</a>

                </li>
                <li>
                    <a href="" class="title">订单信息</a>
                    <a href="">订单信息</a>
                    <a href="">发票信息</a>
                    <a href="">支付问题</a>
                </li>
                <li>
                    <a href="" class="title">售后服务</a>
                    <a href="">售后服务总则</a>
                    <a href="">24小时在线客服</a>
                    <a href="">联想服务入口</a>
                    <a href="">热门解决方案</a>
                    <a href="">Lenovo Quick Fix工具</a>
                </li>
                <li>
                    <a href="" class="title">其他说明</a>
                    <a href="">服务承诺</a>
                    <a href="">账户安全</a>
                    <a href="">手机产品购买须知</a>
                    <a href="">环境信息</a>
                </li>

            </ul>
        </div>

        <div class="bottom">
            @软工龙舟队
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .footer{
        .top{
            width: 1200px;
            margin: 0 auto;
            padding: 70px 0 70px 0px;
            background-color: $backFooter;
        }
        .bottom{
            /*width: 1200px;*/
            width: 100%;
            margin: auto;
            font-size: 12px;
            line-height: 46px;
            background-color: $backFooterBot;
            color:$fontFooterdes;
        }

    }
    ul{
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }
    li{
        /*float: left;*/
        width: 152px;
    }
    li a{
        display: block;
        font-size: 13px;
        line-height: 13px;
        margin-bottom: 12px;
        color: $fontFooterdes;

    }
    li .title{
        font-size: 16px ;
        line-height: 16px ;
        margin-bottom: 18px ;
        font-weight: 600;
        color: $fontFooterTit;
    }

</style>