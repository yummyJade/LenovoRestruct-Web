<template>

    <nav>
        <div class="navBar">
            <div class="content">
                <NavItem :list="list"></NavItem>
                <SearchBox></SearchBox>
            </div>
        </div>
    </nav>




</template>

<style lang="scss" scoped>
    nav{

    }
    .navBar{

        background-color: $backHeader;
        .content{
            width: 1200px;
            height: 70px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

    }



</style>
<script>
    import navitem from './headeritem'
    import searchBox from "../searchBox/searchBox"

    export default {
        data(){
            return {
                list:[
                    {
                        name: "新品",
                        url: "/home"
                    },
                    {
                        name: "定制",
                        url: "/search"
                    },
                    {
                        name: "合伙人",
                        url: ""
                    },
                    {
                        name: "以旧换新",
                        url: ""
                    },
                    {
                        name: "强买强卖",
                        url: ""
                    }
                ]
            }
        },
        components:{
            "NavItem": navitem,
            "SearchBox": searchBox
        }
    }
</script>

