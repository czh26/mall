import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import ('../views/home/Home')
  }, {
    path: '/cartList',
    name: 'CartList',
    component: () => import ('../views/cartList/CartList')
  }, {
    path: '/orderConfirmation/:id',
    name: 'OrderConfirmation',
    component: () => import ('../views/orderConfirmation/OrderConfirmation')
  }, {
    path: '/orderList',
    name: 'OrderList',
    component: () => import ('../views/orderList/OrderList')
  }, {
    path: '/shop/:id',
    name: 'Shop',
    component: () => import ('../views/shop/Shop')
  }, {
    path: '/search',
    name: 'Search',
    component: () => import ('../views/search/Search')
  }, {
    path: '/searchList',
    name: 'SearchList',
    component: () => import ('../views/search/SearchList')
  }, {
    path: '/login',
    name: 'Login',
    component: () => import ('../views/login/Login'),
    beforeEnter: (to, from, next) => {
      const { isLogin } = localStorage;
      isLogin ? next({ name: 'Home' }) : next();
      console.log(isLogin)
    }
  }, {
    path: '/register',
    name: 'Register',
    component: () => import ('../views/register/Register'),
    beforeEnter: (to, from, next) => {
      const { isLogin } = localStorage;
      isLogin ? next({ name: 'Home' }) : next();
    }
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { isLogin }  = localStorage;
  const { name } = to;
  const isLoginOrRegister = (name === 'Login' || name === 'Register');
  (isLogin || isLoginOrRegister) ? next() : next({name: 'Login'});
})
export default router
