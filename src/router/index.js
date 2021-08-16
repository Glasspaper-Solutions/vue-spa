import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Companies from '../views/Companies.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/companies',
    name: 'Companies',
    component: Companies
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
