<template>
    <BScroll>
        <div class="cities">
            <Loading v-if="loading" />
            <dl class="hot-cities">
                <dt>热门城市</dt>
                <dd v-for="item in hotCity" :key="item.id" @tap="changeCity(item.id, item.nm)">{{ item.nm }}</dd>
            </dl>
            <dl class="city-list" v-for="item in cityIndex" :key="item">
                <dt>{{ item }}</dt>
                <dd v-for="city in cities[item]" :key="city.id" @tap="changeCity(city.id, city.nm)" >{{ city.nm }}</dd>
            </dl>
        </div>
        <ul class="city-index">
            <li v-for="item in cityIndex" :key="item">{{ item }}</li>
        </ul>
    </BScroll>
</template>


<script>
import request from "@/network/request.js";

export default {
    data() {
        return {
            loading: false,
            cityIndex: [],
            cities: {},
            hotCity: []
        };
    },
    created() {
        this.loadCityData();
    },
    methods: {
        loadCityData() {
            // 使用缓存技术提升体验
            let cityIndex = window.localStorage.getItem('cityIndex')
            let cities = window.localStorage.getItem('cities')
            let hotCity = window.localStorage.getItem('hotCity')
            if(cityIndex && cities && hotCity){
                this.cityIndex = JSON.parse(cityIndex)
                this.cities = JSON.parse(cities)
                this.hotCity = JSON.parse(hotCity)
                return
            }
            // 发送请求获取城市数据
            request({
                url: "/cityList"
            })
                .then(res => {
                    res.data.data.cities.forEach(item => {
                        let cityI = item.py.substring(0, 1).toUpperCase();
                        if (!this.cityIndex.includes(cityI)) {
                            this.cityIndex.push(cityI);
                            this.cities[cityI] = [];
                        }
                        if (item.isHot === 1) {
                            this.hotCity.push(item);
                        }
                        this.cities[cityI].push(item);
                    });
                })
                .then(() => {
                    this.cityIndex.sort();
                    window.localStorage.setItem('cityIndex',JSON.stringify(this.cityIndex))
                    window.localStorage.setItem('cities',JSON.stringify(this.cities))
                    window.localStorage.setItem('hotCity',JSON.stringify(this.hotCity))
                });
        },
        changeCity(id, nm){
            this.$store.commit('changeCity', {id, nm})
            this.$router.push('/home/nowPlaying')
            window.localStorage.setItem('cityId', id)
            window.localStorage.setItem('cityName', nm)
        }
    }
};
</script>

<style lang="less" scoped>
@bgColor: #fff4f0;
@bdColor: #ede7e3;
@themeColor: #f25744;

.cities {
    padding-right: 0.6rem;
    // background-color: @bgColor;
}
.hot-cities {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 0.5rem;
    dt {
        width: 100vw;
        background-color: @themeColor;
        line-height: 1.5rem;
        padding-left: 0.5rem;
        font-size: 0.7rem;
        margin: 0.75rem 0 0.25rem 0;
        color: @bgColor;
    }
    dd {
        width: 25%;
        text-align: center;
        border: 0.05rem solid #ede7e3;
        margin: 0.25rem 0;
        padding: 0.25rem;
        font-size: 0.8rem;
    }
}

.city-list {
    padding: 0 0.5rem;
    dt {
        background-color: @themeColor;
        font-size: 0.7rem;
        margin: 0.5rem 0 0.25rem 0;
        line-height: 1.5rem;
        padding-left: 0.5rem;
        color: @bgColor;
    }
    dd {
        padding: 0.25rem;
        font-size: 0.8rem;
    }
}

.city-index {
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-45%);
    font-size: 0.6rem;
    background-color: #ffffff;
    text-align: center;
    li {
        padding: 0.1rem;
    }
}
</style>