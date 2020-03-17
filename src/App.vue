<template>
    <div id="app">
        <!-- 这里的头部根据不同的页面而改变，目前由home页面来控制 -->
        <keep-alive>
            <router-view></router-view>
        </keep-alive>

        <tab-bar>
            <tab-bar-item path="/home" icon="icon-home">首页</tab-bar-item>
            <tab-bar-item path="/cinema" icon="icon-cinema">影院</tab-bar-item>
            <tab-bar-item path="/profile" icon="icon-profile">我的</tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
import TabBar from "./components/common/TabBar/TabBar";
import TabBarItem from "./components/common/TabBar/TabBarItem";

export default {
    components: {
        TabBar,
        TabBarItem
    }
};
</script>

<style lang="less">
@import "~@/assets/css/reset.css";

html {
    font-size: 100vw / 750 * 40;
}

@themeColor: #f25744;

.linkActive {
    color: @themeColor;
}
</style>