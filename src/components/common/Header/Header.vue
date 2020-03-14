<template>
    <ul class="header">
        <slot name="title"></slot>
        <slot name="tap-bar"></slot>
    </ul>
</template>


<style lang="less" scoped>
@themeColor: #f25744;
.header {
    font-size: .9rem;
    text-align: center;
    line-height: 2.25rem;
    background-color: @themeColor;
    color: #f0f0f0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    &:first-child,&:last-child{
        flex: 1;
    }
    li {
        flex: 3;
    }
}
</style>