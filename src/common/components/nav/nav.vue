<template>

    <nav>
        <div class="navBar">
            <div class="content">
                <NavItem :list="list"></NavItem>
            </div>
        </div>
    </nav>




</template>

<style lang="scss" scoped>
    nav{

    }
    .navBar{

        background-color: rgb(255,255,255);
        .content{
            width: 1200px;
            margin: 0 auto;
        }

    }



</style>
<script>
    import navitem from './navitem'

    export default {
        data(){
            return {
                list:[
                    {
                        name: "商城",
                        url: "/home"
                    },
                    {
                        name: "品牌",
                        url: ""
                    },
                    {
                        name: "服务",
                        url: ""
                    },
                    {
                        name: "社区",
                        url: ""
                    },
                    {
                        name: "门店",
                        url: ""
                    }
                ]
            }
        },
        components:{
            "NavItem": navitem
        }
    }
</script>

