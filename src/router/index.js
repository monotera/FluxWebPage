import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Store from '../views/Store.vue'
import Error from '../views/Error404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/store',
    name: 'Store',
    component: Store
  },
  {
    path: '/*',
    name: 'Error',
    component: Error
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
