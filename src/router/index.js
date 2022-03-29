import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'   //method 1 you can use import
import About from '../views/About.vue'   

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/auth', component: () => import('../views/auth.vue') },   //method 2, lazy import
  ],
})

export default router