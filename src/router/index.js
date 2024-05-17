import { createRouter, createWebHistory } from 'vue-router'
import Intro from '@/views/Intro.vue'
import Login from '@/views/Login.vue'
import TaxpayerLogin from '@/views/TaxpayerLogin.vue'
import Home from '../views/Home.vue'
import Register from '@/views/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'intro',
      component: Intro
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },

    {
      path: '/taxpayer',
      name: 'taxpayer',
      component: TaxpayerLogin
    },

    {
      path: '/home',
      name: 'home',
      component: Home
    },

    {
      path: '/signup',
      name: 'signup',
      component: Register
    }
  ]
})

export default router
