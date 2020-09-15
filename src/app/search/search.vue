<template>

    <div class="container">
        <Header :val="this.word"></Header>
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
        padding-top: 20px;
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
    import {getSearchList} from '@/common/network/api.js'
    import header from "@/common/components/header/header"
    export default {

        components: {
            "ProductBlock": productBlock,
            "ShopFooter": shopFooter,
            "Footer": footer,
            'Header': header
        },
        data(){
            return {
                searchVal: "",
                word:"" ,
                searchList: [



                ]
            }
        },
        methods: {
            getSearchList(_this, params){

                getSearchList(params).then(result => {
                    if(result.status === 200){
                        let data = result.data.data;
                        let arr = [];
                        // console.log(data)
                        for(let i = 0; i < data.length; i++){

                            let listdata = {
                                id: data[i]["id"],
                                img: data[i]["img_url"],
                                thumb_url: data[i]["thumb_url"],
                                name: data[i]["name"],
                                des: data[i]["introduce"],
                                price: data[i]["price"]

                            }
                            arr.push(listdata)
                        }
                        _this.searchList = arr;



                    }
                }).catch(err => {
                    console.log(err)
                })
            }
        },
        created(){
            // console.log(this.$route.params)
                this.word = this.$route.query.word;
                console.log(this.word)
            // this.word = this.$route.params.word;
            // this.searchList = [];
            // this.r
            // this.word = "拯救者"
            // console.log("666"+ this.word)
        },
        mounted(){

            this.$options.methods.getSearchList(this,{
                word: this.word
            })

        }
    }

</script>