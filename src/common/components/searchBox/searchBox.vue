<template>
    <div class="search_warp">
<!--        这里是搜索框-->
        <a tag="searchButton" class="search_icon" @click="gotoSearch" >
            <span></span>
        </a>
        <input type="text" latag="latag_pc_search_keyword"  placeholder="潮酷青春 LI想依燃" v-model="searchVal"  placeholder-url="https://activity.lenovo.com.cn/sales/sep.html" @keyup.enter="gotoSearch">
    </div>
</template>

<style scoped lang="scss">
    .search_warp{
        width: 270px;
        height: 36px;
        background-color: #eaeaea;
        border-radius: 30px;
        position: relative;

    }
    .search_icon{
        display: block;
        text-align: center;
        font-size: 16px;
        /*margin-right: 0;*/
        position: absolute;
        float: none;
        right: 15px;
        top: 1px;
        width: 30px;
        height: 30px;
        line-height: 20px;
        z-index: 2;
        cursor: pointer;
        span{
            display: inline-block;
            width: 20px;
            height: 20px;
            position: absolute;
            top: 7px;
            left: 7px;
            background-image: url(https://p4.lefile.cn/product/adminweb/2018/12/29/f26ff743-3f82-4072-b27a-193f0e9ad675.png);
            background-repeat: no-repeat;
            background-size: 100%;

        }
    }
    input{
        width: 220px;
        height: 36px;
        outline: 0;
        font-size: 12px;
        line-height: 36px;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        background-color: transparent;
        border: 0;
        color: #999;
        padding: 0 0 0 17px;
        box-sizing: content-box;

    }
</style>
<script>
    export default {
        props: ["val"],
        data(){
            return{
                searchVal: ""
            }
        },
        methods:{
            gotoSearch(){
                let word = this.searchVal;
                // console.log(word)
                //点击按钮开始搜索，并跳转到search页
                if (word !== ""){
                    // this.$router.go(0);
                    this.$router.push({ path:`/search/` , query: {word: word} })
                }

            }
        },

        mounted(){
            if(this.val !== ""){
                this.searchVal = this.val;
            }
        }
    }

</script>