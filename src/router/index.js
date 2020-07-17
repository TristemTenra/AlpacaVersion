import Vue from 'vue'
import VueRouter from 'vue-router'
import Fair from '../views/Fair.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/gate',
    name: 'gate',
    component:  () => import('../views/Gate.vue')
  },
  {
    path: '/',
    name: 'fair',
    component: Fair,
    children:[
      {
        path: 'alpaca',
        name: 'alpaca',
        component:  () => import('../views/Alpaca.vue')
      }
    ]
  },
  {
    path: '/farm',
    name: 'farm',
    component: () => import('../views/Farm.vue'),
    children: [
      {
        path: 'user',
        name: 'user',
        component:  () => import('../views/User.vue')
      }
    ]

  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('../views/Faq.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
