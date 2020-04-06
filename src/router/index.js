import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/pages/Login'//使用者登入
import Controller from '@/components/pages/Controller'//管理員登入
import Cart from '@/components/pages/Cart'//
import Products from '@/components/pages/Products'
import Coupons from '@/components/pages/Coupons';
import Orders from '@/components/pages/Orders';


import HomeRouter from '@/components/HomeRouter';//進入點
import Home from '@/components/pages/Home';
import List from '@/components/pages/List';
import Product_detail from '@/components/pages/Product_detail';
import Cart_address from '@/components/pages/Cart_address';
import Cart_pay from '@/components/pages/Cart_pay';
import Cart_finished from '@/components/pages/Cart_finished';

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      name: 'HomeRouter',
      component: HomeRouter,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: 'list',
          name: 'List',
          component: List
        },
        {
          path: 'product_detail/:id',
          name: 'Product_detail',
          component: Product_detail
        },
        {
          path: 'cart',
          name: 'Cart',
          component: Cart
        },
        {
          path: 'cart_address',
          name: 'Cart_address',
          component: Cart_address
        },
        {
          path: 'cart_pay/:orderId',
          name: 'Cart_pay',
          component: Cart_pay
        },
        {
          path: 'cart_finished',
          name: 'Cart_finished',
          component: Cart_finished
        }
      ]
    },

    {
      path: '/controller',
      name: 'Controller',
      component: Controller,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },


    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: 'products',
          name: 'Products',
          component: Products,
          meta: { requiresAuth: true },
        },
        {
          path: 'coupons',
          name: 'Coupons',
          component: Coupons,
          meta: { requiresAuth: true },
        },
        {
          path: 'orders',
          name: 'Orders',
          component: Orders,
          meta: { requiresAuth: true },
        },
      ]
    },

  ]
})
