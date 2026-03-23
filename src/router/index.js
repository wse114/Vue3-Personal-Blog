import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/tech-stack',
      name: 'techStack',
      component: () => import('../views/TechStack.vue')
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('../views/ExperiencePart.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutPart.vue')
    },
    {
      path: '/sports',
      name: 'sports',
      component: () => import('../views/SportsPart.vue')
    },
    {
      path: '/goals',
      name: 'goals',
      component: () => import('../views/GoalsPart.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginPart.vue')
    }
  ]
})

export default router
