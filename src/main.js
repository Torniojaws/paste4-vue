import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App';
import router from './router';
import Menu from '@/components/Menu';

Vue.use(BootstrapVue);

Vue.component('main-menu', Menu);

new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App),
});
