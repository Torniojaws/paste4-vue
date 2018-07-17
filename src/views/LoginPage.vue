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
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault();
      alert('Gonna login as user: ' + this.form.username);
      // TODO: Call the /login endpoint and store the token with Vuex
    }
  }
}
</script>
