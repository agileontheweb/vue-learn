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
      path: '/about/:section',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/customComponents/:section',
      name: 'customComponents',
      component: () => import('../views/customComponentsView.vue')
    }
  ]
})

export default router
