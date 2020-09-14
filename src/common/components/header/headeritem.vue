<template>
    <ul>
        <li v-for="(item, i) in this.list"  :key="i">
            <router-link :to="item.url"  exact>{{item.name}}</router-link>
        </li>
    </ul>

</template>

<style lang="scss" scoped>
    ul{
        /*height: 70px;*/
        /*display: flex;*/
        /*justify-content: flex-start;*/
        /*align-items: center;*/

        li{
            /*width: 60px;*/
            float: left;
            margin-right: 45px;
        }
        a{

            font-size: 17px;
            color: $fontGrey2;
            font-weight: 600;
        }

    }

</style>
<script>
    export default {
        props: {
            'list': Array

        }
    }

</script>