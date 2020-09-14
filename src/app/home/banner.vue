<template>
    <div class="banner">


        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide class="swiper-slide" v-for="(item,index) in bannerList" :key="index" :style="{backgroundImage:`url(${item})`}">

            </swiper-slide>
            <!-- 分页器 -->
            <div class="swiper-pagination"  slot="pagination">

            </div>
            <!-- 左右箭头 -->
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>


    </div>
</template>


<style lang="scss" scoped>
    .banner{

    }
    .swiper-container{
        width: 100%;
    }
    .swiper_warp{
        max-width: 1920px;

    }
    .swiper-slide{
        width: 100%;
        height: 470px;
        background-repeat: no-repeat;
        background-position: center center ;
    }
    .swiper-pagination{
        height: 20px;
        line-height: 17px;
        margin-bottom: 20px;
    }

</style>

<script>


    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    export default {
        data(){
           return {
               bannerList: [
                   require("./assets/banner1.jpg"),
                   require("./assets/banner2.jpg"),
                   require("./assets/banner3.jpg"),
                   require("./assets/banner4.jpg"),
                   require("./assets/banner5.jpg"),

               ],
                swiperOptions:{
                   initialSlide: 0,
                   //显示分页
                   pagination: {
                       el: '.swiper-pagination',
                       type: 'bullets',
                       clickable: true,     //点击会控制切换
                       hideOnclick: true,
                   },
                   //设置点击箭头
                   navigation: {
                       nextEl: '.swiper-button-next',
                       prevEl: '.swiper-button-prev',
                       hideOnclick: true,
                   },
                   //自动轮播
                   autoplay: {
                       delay: 2000,
                       stopOnLastSlide: false,
                       //当用户滑动图片后继续自动轮播
                       disableOnInteraction: false,
                   },

                   //开启循环模式
                    loop: true,
                    loopedSlide: 5
               }

           }
        },
        methods:{


        },
        components: {
            Swiper,
            SwiperSlide
        },
        directives: {
            swiper: directive
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.$swiper
            }
        },
        mounted() {
            // console.log('Current Swiper instance object', this.swiper)
            this.swiper.slideTo(3, 1000, false)
            // //鼠标放在swiper上发生的行为
            this.swiper.el.onmouseover = function () {
                this.swiper.autoplay.stop()
            }
            this.swiper.el.onmouseout = function () {
                this.swiper.autoplay.start()
            }
        }


    }
</script>