import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../pages/About.vue'),
  },
  {
    path: '/proposal',
    name: 'Proposal',
    component: () => import('../pages/Proposal.vue'),
  },
  {
    path: '/naming',
    name: 'Naming',
    component: () => import('../pages/Naming.vue'),
  },
  {
    path: '/layout',
    name: 'Layout',
    component: () => import('../pages/Layout.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: async (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    }

    const findEl = async (hash, x) => {
      return (
        document.querySelector(hash) ||
        new Promise((resolve) => {
          if (x > 50) {
            return resolve()
          }
          setTimeout(() => {
            resolve(findEl(hash, ++x || 1))
          }, 100)
        })
      )
    }

    if (to.hash) {
      const el = await findEl(to.hash)

      if ('scrollBehavior' in document.documentElement.style) {
        return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
      } else {
        return window.scrollTo(0, el.offsetTop)
      }
    }

    return { x: 0, y: 0 }
  },
  routes,
})

export default router
