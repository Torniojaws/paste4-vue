import Vue from 'vue';
import Router from 'vue-router';

import Add from '@/views/AddPage';
import Login from '@/views/LoginPage';
import Marked from '@/views/MarkedPage';
import NotFound from '@/views/NotFoundPage';
import Pastes from '@/views/PastesPage';

Vue.use(Router);

export default new Router({
  mode: 'history',
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
      path: '/marked',
      name: 'Marked',
      component: Marked,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    }
  ]
});
