<template>
    <ul class="top-bar">
        <slot></slot>
    </ul>
</template>


<style lang="less" scoped>
@themeColor: #f25744;

@import "~@/assets/css/iconfont.css";

.top-bar {
    display: flex;
    font-size: .7rem;
    text-align: center;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    background-color: #fff;
    li {
        color: #000;
        flex: 1;
    }
}
.linkExactActive{
    color: @themeColor;
    border-bottom: .1rem solid @themeColor;
}
</style>