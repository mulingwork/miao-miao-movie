<template>
    <div class="search-wrap">
        <Loading v-if="loading" />
        <div class="search">
            <input type="text" placeholder="biu~" @input="handleSearch($event.target.value)">
        </div>
        <div class="type">
            电影/电视剧/综艺
        </div>
        <ul class="search-list">
            <li v-for="item in searchList" :key="item.id">
                <div class="cover">
                    <img :src="item.img | handleCover('120.170')">
                </div>
                <div class="filmInfo">
                    <div class="title">{{ item.nm }}</div> 
                    <div class="sort">{{ item.cat }}</div>
                    <div class="star">{{ item.star }}</div>
                    <div class="time">{{item.rt}}</div>
                </div>
                <div class="score">{{ item.sc }}</div>
            </li>
        </ul>
    </div>
</template>

<script>
import request from '@/network/request.js'


export default {
    data() {
        return {
            search: '',
            searchList: [],
            timer: -1,
            loading: false
        }
    },
    methods: {
        // 啥时候心情好了在用watch重写
        handleSearch(val) {
            if(val.trim() == ''){
                this.searchList = []
                return
            }
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.loading = true
                request({
                    url:'searchList',
                    params: {
                        cityId: 10,
                        kw: val
                    }
                }).then(({data: {data: { movies }}}) => {
                    movies = movies?movies.list:[]
                    this.loading = false
                    this.searchList = movies
                })
            },1500)
        }
    }
}
</script>

<style lang="less" scoped>
@bgColor: #f4f4f4;
@bdColor: #e8e8e8;
@color: #777;
// @color: #f0f0f0;
@themeColor: #2f99eb;
@otherColor: #7e7e7e;

.search{
    background-color: @bgColor;
    padding: .75rem 0 .5rem 0;
    input{
        width: 90%;
        margin: 0 auto;
        border: none;
        outline: none;
        display: block;
        line-height: 1.5rem;
        border-radius: .25rem;
        padding-left: .5rem;
        font-size: .7rem;
    }
}
.type{
    line-height: 2rem;
    font-size: .7rem;
    border: .05rem solid @bdColor;
    border-left: none;
    border-right: none;
    padding-left: .5rem;
    color: @color;
    font-weight: bold;
}


.search-list {
    li {
        display: flex;
        border-top: 0.05rem dotted @bdColor;
        padding: 0.5rem;
        .cover {
            width: 4.5rem;
            height: 6.5rem;
            overflow: hidden;
            img{
                width: 100%;
            }
        }
        .filmInfo {
            flex: 1;
            margin-left: 0.5rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            div {
                margin-top: 0.5rem;
                color: @otherColor;
            }
            .title {
                font-size: 1rem;
                color: @color;
                font-weight: bold;
            }
            .sort,
            .star,
            .time {
                font-size: 0.7rem;
            }
        }
        .score{
            width: 1.5rem;
            padding-top: .5rem;
            color: #ffb22e;
        }
    }
}
</style>