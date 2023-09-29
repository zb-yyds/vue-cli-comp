import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: () => import('../views/layout/index.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/home/index.vue')
        }
      ]
    },

    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/login/index.vue')
    }
  ]
})

export default router
