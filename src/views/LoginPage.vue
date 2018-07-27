<template>
  <div id="login">
    <h1>Login</h1>
    <b-form @submit="onSubmit">
      <b-form-group id="loginGroup" label="Login:">
        <b-form-input id="user" type="text" v-model="form.username" required placeholder="Username" />
        <b-form-input id="pass" type="password" v-model="form.password" required placeholder="Password" />
      </b-form-group>
      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
    <br />
    <b-alert dismissible variant="danger" :show="error">Login failed!</b-alert>
    <b-alert dismissible variant="success" :show="success">Login OK! Returning to main in 3 seconds</b-alert>
  </div>
</template>

<script>
import { HTTP } from '@/components/http-common';
import router from '@/router';

export default {
  name: 'Login',
  data () {
    return {
      form: {
        username: '',
        password: '',
      },
      error: false,
      success: false
    }
  },
  methods: {
    async onSubmit (event) {
      event.preventDefault();
      const payload = {
        username: this.form.username,
        password: this.form.password
      };

      try {
        const response = await HTTP.post('login', payload);
        localStorage.setItem('username', this.form.username);
        localStorage.setItem('user-token', response.data.access_token);
        this.error = false;
        this.success = true;
        setTimeout( () => window.location.href = '/', 3000);
      } catch (err) {
        this.success = false;
        this.error = true;
        localStorage.removeItem('user-token');
      }
    }
  }
}
</script>
