import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/list/test',
    name: 'listTest',
    component: () => import('../views/listTest.vue')
  },
  {
    path: '/basic',
    name: 'basic',
    component: () => import('../views/basic.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
