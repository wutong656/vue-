import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Me from '../components/Me.vue'
import Order from '../components/Order.vue'
import Category from '../components/Category.vue'
import City from '../components/City.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/me',
    name: 'Me',
    component: Me
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/city',
    name: 'City',
    component: City
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
