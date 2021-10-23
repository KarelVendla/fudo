import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'products',
    component: () => import(/* webpackChunkName: "products" */ '@/views/Products.vue'),
  },
  {
    path: '/my-orders',
    name: 'my-orders',
    component: () => import(/* webpackChunkName: "orders" */ '@/views/Orders.vue'),
  },
  {
    path: '/invoices',
    name: 'invoices',
    component: () => import(/* webpackChunkName: "invoices" */ '@/views/Invoices.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "cart" */ '@/views/Cart.vue'),
  },
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
