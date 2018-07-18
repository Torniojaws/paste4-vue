import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import linkify from 'vue-linkify';
import App from './App';
import router from './router';

import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import Paste from '@/components/Paste';

Vue.use(BootstrapVue);

Vue.directive('linkified', linkify);

Vue.component('main-menu', Menu);
Vue.component('main-footer', Footer);
Vue.component('paste-item', Paste);

new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App),
});
