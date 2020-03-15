<template>
    <div class="home">
        <Header>
            <template v-slot:title>
                <li>喵喵电影</li>
            </template>
            <template v-slot:tap-bar>
                <top-bar>
                    <top-bar-item path="/home/cities">{{ city.nm }}</top-bar-item>
                    <top-bar-item path="/home/nowPlaying">正在热映</top-bar-item>
                    <top-bar-item path="/home/comingSoon">即将上映</top-bar-item>
                    <top-bar-item path="/home/search">
                        <i class="iconfont icon-search"></i>
                    </top-bar-item>
                </top-bar>
            </template>
        </Header>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
import Header from "@/components/common/Header/Header";
import TopBar from "@/components/common/TopBar/TopBar";
import TopBarItem from "@/components/common/TopBar/TopBarItem";



export default {
    components: {
        Header,
        TopBar,
        TopBarItem
    },
    computed: {
        city(){
            return this.$store.state.city
        }
    }
};
</script>

<style lang="less" scoped>
.home {
    margin: 4.5rem 0 2.25rem 0;
    overflow-y: scroll;
}
.iconfont {
    font-size: 0.7rem;
}
</style>