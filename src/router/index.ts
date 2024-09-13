import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/mens-clothing',
      name: 'mens-clothing',
      component: () => import('../views/MensClothing.vue')
    },
    {
      path: '/womens-clothing',
      name: 'womens-clothing',
      component: () => import('../views/WomensClothing.vue')
    }
  ]
})

export default router
