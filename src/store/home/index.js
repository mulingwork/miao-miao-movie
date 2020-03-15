export default {
    state: {
        id: window.localStorage.getItem('cityId')||1,
        nm: window.localStorage.getItem('cityName')||'北京'
    },
    mutations: {
        changeCity(state, city){
            state.id = city.id
            state.nm = city.nm
        }
    },
    actions: {

    }
}