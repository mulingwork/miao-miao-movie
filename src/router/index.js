import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './home'
import Cinema from './cinema'
import Profile from './profile'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  Home,
  Cinema,
  Profile

]

const router = new VueRouter({
  linkActiveClass: 'linkActive',
  linkExactActiveClass: 'linkExactActive',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
