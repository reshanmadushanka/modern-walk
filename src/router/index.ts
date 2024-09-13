import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductCategoryPage from '@/components/ProductsList.vue'

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
      name: 'MensClothing',
      component: ProductCategoryPage,
      props: { category: "men's clothing" } // Pass category as a prop
    },
    {
      path: '/womens-clothing',
      name: 'WomensClothing',
      component: ProductCategoryPage,
      props: { category: "women's clothing" } // Pass category as a prop
    }
  ]
})

export default router
