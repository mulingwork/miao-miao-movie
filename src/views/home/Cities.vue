<template>
    <div class="cities">
        <Loading v-if="loading"/>
        <dl class="hot-cities">
            <dt>热门城市</dt>
            <dd v-for="item in hotCity" :key="item.id">{{ item.nm }}</dd>
        </dl>
        <dl class="city-list" v-for="item in cityIndex" :key="item">
            <dt>{{ item }}</dt>
            <dd v-for="city in cities[item]" :key="city.id">{{ city.nm }}</dd>
        </dl>
        <ul class="city-index">
            <li v-for="item in cityIndex" :key="item">{{ item }}</li>
        </ul>
    </div>
</template>


<script>
import request from '@/network/request.js'


export default {
    data() {
        return {
            loading: false,
            cityIndex: [],
            cities: {},
            hotCity: []
        }
    },
    created(){
        this.loadCityData()
    },
    methods: {
        loadCityData(){
            request({
                url: '/cityList'
            }).then(res => {
                res.data.data.cities.forEach(item => {
                    let cityI = item.py.substring(0,1).toUpperCase()
                    if(!this.cityIndex.includes(cityI)){
                        this.cityIndex.push(cityI)
                        this.cities[cityI] = []
                    }
                    if(item.isHot === 1) {
                        this.hotCity.push(item)   
                    }
                    this.cities[cityI].push(item)
                })
            }).then(() => {
                this.cityIndex.sort()
            })
        }
    }
}
</script>

<style lang="less" scoped>
@bgColor: #fff4f0;
@bdColor: #ede7e3;
@themeColor:#f25744;


.cities{
    padding-right: .6rem;
    // background-color: @bgColor;
}
.hot-cities{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 .5rem;
    dt{
        width: 100vw;
        background-color: @themeColor;
        line-height: 1.5rem;
        padding-left: .5rem;
        font-size: .7rem;
        margin: .75rem 0 .25rem 0;
        color: @bgColor;
    }
    dd{
        width: 25%;
        text-align: center;
        border: .05rem solid #ede7e3;
        margin: .25rem 0;
        padding: .25rem;
        font-size: .8rem;
    }
}

.city-list{
    padding: 0 .5rem;
    dt{
        background-color: @themeColor;
        font-size: .7rem;
        margin: .5rem 0 .25rem 0;
        line-height: 1.5rem;
        padding-left: .5rem;
        color: @bgColor;
    }
    dd{
        padding: .25rem;
        font-size: .8rem;
    }
}

.city-index{
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-45%);
    font-size: .6rem;
    background-color: #ffffff;
    text-align: center;
    li{
        padding: .1rem;
    }
}

</style>