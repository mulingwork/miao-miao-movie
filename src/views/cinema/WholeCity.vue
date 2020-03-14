<template>
    <div class="whole-city">
        <Loading v-if="loading" />
        <ul class="cinema-list">
            <li v-for="item in cinemaList" :key="item.id">
                <div class="cinema-info">
                    <div class="cinema-name">{{ item.nm }}</div>
                    <div class="cinema-addr">{{ item.addr }}</div>
                    <div class="cinema-tag">
                        <span style="color:#f25744">{{ item.tag.vipTag }}</span>
                        <span v-if="item.tag.snack==1">小吃卡</span>
                        <span style="color:#4c8bf5" v-if="item.tag.sell==1" >满减</span>
                    </div>
                </div>
                <div class="distance">{{ item.distance }}</div>
            </li>
        </ul>
    </div>
</template>


<script>
import request from '@/network/request.js'


export default {
    data() {
        return {
            cinemaList: [],
            loading: true
        }
    },
    created(){
        this.loadCinemaData()
    },
    methods: {
        loadCinemaData(){
            request({
                url: '/cinemaList?cityId=10'
            }).then(res => {
                this.loading = false
                this.cinemaList = res.data.data.cinemas
            })
        }
    }
}
</script>


<style lang="less" scoped>
@addrColor: #7d7d7d;
@tagColor: #febf55;


.cinema-list{
    li{
        display: flex;
        padding: 0 .5rem;
        font-size: .6rem;
        .cinema-info{
            .cinema-name{
                font-size: .8rem;
            }
            .cinema-addr{
                color: @addrColor;
            }
            .cinema-tag{
                color: @tagColor;
                span{
                    border: .05rem solid currentColor;
                    padding: .05rem;
                    border-radius: .1rem;
                    margin-right: .25rem;
                }
            }
            flex: 2;
        }
        .distance{
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            color: @addrColor;
        }
        div{
            padding: .5rem 0;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
}
</style>