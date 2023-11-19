// index.js
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:  () => import('../views/home/index.vue')
    },

    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/somepage.html',
      name: 'sell',
      component: () => import('../views/SellView.vue') // 确保你有一个SellView.vue组件
    },
    // 添加以 .html 结尾的路由
    {
      path: '/sell/:id.html',
      name: 'sell',
      component: () => import('../views/SellView.vue') // 确保你有一个SellView.vue组件
    }
  ]
  
})

export default router;
