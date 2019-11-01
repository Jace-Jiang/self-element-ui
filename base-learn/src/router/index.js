import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('../views/Parent'),
      redirect: '/pop'
    },
    {
      path: '/home:id',
      name: 'home',
      component: () => import('../views/Home'),
      children: [
        {
          path: '/child',
          component: () => import('../views/Child')
        }
      ]
    },
    {
      path: '/layout',
      component: () => import('../views/element/Layout')
    },
    {
      path: '/pop',
      component: () => import('../views/element/Pop')
    }
  ]
})
