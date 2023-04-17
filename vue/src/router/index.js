import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import service from '../views/ServiceView.vue'
import customers from '../views/CustomersView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/service',
      name: 'service',
      component: service
    },
    {
      path: '/customers',
      name: 'customers',
      component: customers
    }
  ]
})

export default router
