import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/views/HelloPage';
import About from '@/views/AboutPage';
import NotFound from '@/views/NotFoundPage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    }
  ]
});
