<template>
    <router-link   :to="'/product/' + this.item.id" @click="gotoFlush">
        <div class="option_wrap">

            {{this.item.option}}

        </div>
    </router-link>

</template>
<style scoped lang="scss">
.option_wrap{
    display: inline-block;
    width: 214px;
    padding: 0px 21px;
    height: 23px;
    /*border: 1px solid #DADADA;*/
    text-align: center;
    line-height: 23px;
}
a{
    color: $fontOption;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

</style>
<script>
    export default {
        props: ["item"],
        methods:{
            gotoFlush(){
                this.$router.go(0);

            }
        }
    }

</script>