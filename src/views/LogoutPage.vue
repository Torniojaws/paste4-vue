<template>
  <div id="logout">
    <h1>Logout</h1>
    <p>Are you sure you want to logout?</p>
    <b-button v-on:click="logout()" variant="danger">Yes</b-button>
    <b-button v-on:click="cancel()" variant="secondary">Cancel</b-button>
    </b-form>
  </div>
</template>

<script>
import { HTTP } from '@/components/http-common';
import router from '@/router';

export default {
  name: 'Logout',
  methods: {
    async logout () {
      try {
        const payload = {
          username: localStorage.getItem('username'),
          access_token: localStorage.getItem('user-token')
        }
        const response = await HTTP.post('logout', payload);
        localStorage.removeItem('user-token');
        localStorage.removeItem('username');
        console.log('Logout ok');
        window.location.href = '/';
      } catch (err) {
        console.log('Logout failed! Cleared browser anyway');
        localStorage.removeItem('username');
        localStorage.removeItem('user-token');
      }
    },
    cancel () {
      console.log('Logout cancelled, returning to main page');
      window.location.href = '/';
    }
  }
}
</script>
