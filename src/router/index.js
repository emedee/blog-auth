import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import signIn from '../views/signIn.vue'
import signUp from '../views/signUp.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'signUp',
    component: signUp
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: signIn
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
