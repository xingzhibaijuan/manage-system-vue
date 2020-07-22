import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login'),
      meta: { title: '登录' }
    },
    {
      path: '/',
      component: () => import('@/layout'),
      meta: { title: 'layout' },
      children: [
        {
          path: 'home',
          nema: 'home',
          component: () => import('@/views/Home'),
          meta: { title: '系统首页' }
        }
      ]
    },
    {
      path: '*',
      component: () => import('@/views/Error/404.vue')
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
