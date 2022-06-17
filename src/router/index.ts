import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('../views/home/index.vue'),
      children: [
        {
          path: '/discover',
          name: 'discover',
          component: import('../views/discover/index.vue'),
        },
        {
          path: '/my',
          name: 'my',
          component: import('../views/my/index.vue'),
        },

      ]
    },
    {
      path: '/play',
      name: 'play',
      component: import('../views/play/index.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: import('../views/login/index.vue'),
    }
  ]
})

export default router
