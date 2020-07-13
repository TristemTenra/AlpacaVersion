import Vue from 'vue'
import VueRouter from 'vue-router'
import Fair from '../views/Fair.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'fair',
    component: Fair
  },
  {
    path: '/farm',
    name: 'farm',
    component: () => import('../views/Farm.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('../views/Faq.vue')
  },
  {
    path: '/alcove',
    name: 'alcove',
    component: () => import('../views/Alcove.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
