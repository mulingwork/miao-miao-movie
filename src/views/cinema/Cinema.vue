<template>
    <div class="cinema">
        <Header>
            <template v-slot:title>
                <li>喵喵影院</li>
            </template>
            <template v-slot:tap-bar>
                <top-bar>
                    <top-bar-item path="/cinema/wholeCity">全城</top-bar-item>
                    <top-bar-item path="/cinema/Feature">品牌</top-bar-item>
                    <top-bar-item path="/cinema/brand">特色</top-bar-item>
                </top-bar>
            </template>
        </Header>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
import Header from '@/components/common/Header/Header'
import TopBar from '@/components/common/TopBar/TopBar'
import TopBarItem from '@/components/common/TopBar/TopBarItem'

export default {
    components: {
    Header,
    TopBar,
    TopBarItem
  }
}
</script>

<style lang="less" scoped>
.cinema{
    padding: 4.5rem 0 2.25rem 0;
}
.iconfont{
    font-size: .7rem;
}
</style>