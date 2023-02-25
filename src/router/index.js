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
      path: '/',
      name: 'skills',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Skills.vue')
    },
    {
      path: '/',
      name: 'portfolio',
      component: () => import('../views/Portfolio.vue')
    },
    {
      path: '/',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/',
      name: 'about',
      component: () => import('../views/About.vue')
    }
  ]
})

export default router
