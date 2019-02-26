import Vue from 'vue';
import Router from 'vue-router';

import Add from '@/views/AddPage';
import All from '@/views/AllPage';
import Login from '@/views/LoginPage';
import Logout from '@/views/LogoutPage';
import Marked from '@/views/MarkedPage';
import NotFound from '@/views/NotFoundPage';
import Pastes from '@/views/PastesPage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.NODE_ENV === 'development' ? '/' : '/paste5/',
  routes: [
    {
      path: '/',
      name: 'Pastes',
      component: Pastes,
    },
    {
      path: '/add',
      name: 'Add',
      component: Add,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout,
    },
    {
      path: '/marked',
      name: 'Marked',
      component: Marked,
    },
    {
      path: '/all',
      name: 'All',
      component: All,
    },
    {
      path: '*',
      redirect: '/',
    }
  ]
});
