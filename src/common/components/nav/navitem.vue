<template>
    <ul>
        <li v-for="(item, i) in this.list"  :key="i">
            <router-link :to="item.url"  exact>{{item.name}}</router-link>
        </li>
    </ul>

</template>

<style lang="scss" scoped>
    ul{
        height: 80px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        li{
            width: 60px;
        }
        a{
            color: $fontGrey;
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