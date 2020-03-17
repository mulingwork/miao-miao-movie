<template>
    <BScroll :pull_down="pull_down">
        <ul class="nowplaying">
            <div class="pull-down" v-if="pullDown.isPull">{{pullDown.msg}}</div>
            <li v-for="item in nowPlayingList" :key="item.id">
                <div class="cover">
                    <img :src="item.img | handleCover('120.170')" />
                </div>
                <div class="filmInfo">
                    <div class="title">{{ item.nm }}</div>
                    <div class="score">观众评：{{ item.sc }}</div>
                    <div class="actor">演员：{{ item.star }}</div>
                    <!-- 由于不同城市的数据是一样的，所以加个id让他们看起来有变化 : ( -->
                    <div class="wish">今日放映{{item.wish + id}}场</div>
                </div>
                <div class="pay">
                    <button>购票</button>
                </div>
            </li>
            <Loading v-if="loading" />
        </ul>
    </BScroll>
</template>


<script>
import request from "@/network/request.js";

export default {
    data() {
        return {
            nowPlayingList: [],
            loading: true,
            pullDown: {
                msg: '正在刷新',
                isPull: false
            }
        };
    },
    created(){
        this.id = window.localStorage.getItem('cityId')||1
        this.loadNowPlaying();
    },
    activated(){
        let newId = this.$store.state.city.id
        if(this.id == newId){
            return
        }
        this.id = newId
        this.loadNowPlaying();
    },
    methods: {
        loadNowPlaying() {
            return request({
                url: `/movieOnInfoList?cityId=${this.id}`
            }).then(
                ({
                    data: {
                        data: { movieList }
                    }
                }) => {
                    if (!movieList) {
                        console.log("数据加载失败~");
                        return;
                    } else {
                        this.loading = false;
                        this.nowPlayingList = movieList;
                    }
                }
            );
        },
        pull_down(){
            this.pullDown.msg = '正在刷新'
            this.pullDown.isPull = true
                setTimeout(() => {
                    this.loadNowPlaying().then(() => {
                    this.pullDown.msg = '刷新成功'
                    setTimeout(() => {
                        this.pullDown.isPull = false
                    },500)
                })
            },1000)
        }
    }
};
</script>


<style lang="less" scoped>
@color: #f0f0f0;
@themeColor: #f25744;
@otherColor: #7e7e7e;

.pull-down{
    line-height: 3rem;
    font-size: .7rem;
    text-align: center;
}

.nowplaying {
    li {
        display: flex;
        border-top: 0.1rem solid @color;
        padding: 0.5rem;
        .cover {
            width: 4.5rem;
            height: 6.5rem;
            overflow: hidden;
            img {
                width: 100%;
            }
        }
        .filmInfo {
            flex: 1;
            margin-left: 0.5rem;
            // overflow: hidden;
            // white-space: nowrap;
            // text-overflow: ellipsis;
            div {
                margin-top: 0.5rem;
                color: @otherColor;
            }
            .title {
                font-size: 1.2rem;
                color: #000;
                font-weight: bold;
            }
            .score,
            .actor,
            .wish {
                font-size: 0.7rem;
            }
        }
        .pay {
            width: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            button {
                font-size: 0.7rem;
                width: 100%;
                background-color: @themeColor;
                border: none;
                outline: none;
                border-radius: 0.3rem;
                line-height: 1.5rem;
                color: @color;
                &:active{
                    background-color:tomato;
                }
            }
        }
    }
}
</style>