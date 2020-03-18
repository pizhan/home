import Vue from 'vue'
import VueRouter from 'vue-router'
const home = () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
const about = () => import(/* webpackChunkName: "about" */ '../views/About.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/user-*',
    component: home
  },
  {
    path: '/',
    name: 'Home',
    component: home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: about
  }
]

const router = new VueRouter({
  routes
})

export default router
