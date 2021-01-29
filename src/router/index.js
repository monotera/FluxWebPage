import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Store from '../views/Store.vue'
import Error from '../views/Error404.vue'
import StoreIndex from '../views/store/Index.vue'
import Detail from '../views/store/Detail.vue'

const Cart = () => import(/* webpackChunkName: "shopping-cart" */ '../views/store/Cart.vue')

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
    component: Store,
    children: [
      {
        path: '',
        name: 'StoreIndex',
        component: StoreIndex,
      },
      {
        path: 'cart',
        name: 'Cart',
        component: Cart,
      },
      {
        path: 'products/:name',
        name: 'Detail',
        component: Detail,
      }
    ],
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
