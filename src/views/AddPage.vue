<template>
  <div id="add">
    <h1>Add paste</h1>
    <b-form v-if="isLoggedIn" @submit="onSubmit">
      <b-form-group id="pasteGroup" label="Paste:">
        <b-form-textarea id="paste" v-model="form.paste" placeholder="Add paste" :rows="10" />
      </b-form-group>
      <b-form-group id="pasteGroup" label="Tags:">
        <b-form-input id="tags" v-model="form.tags" placeholder="Tags (comma separated)" />
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    <p v-if="!isLoggedIn">Please login first.</p>
  </div>
</template>

<script>
import { HTTP } from '@/components/http-common';
import router from '@/router';

export default {
  name: 'Add',
  data () {
    return {
      form: {
        paste: '',
        tags: []
      },
      isLoggedIn: localStorage.getItem('user-token') ? true : false
    }
  },
  created () {

  },
  methods: {
    async onSubmit (event) {
      event.preventDefault();

      const payload = {
        message: this.form.paste,
        tags: this.form.tags.split(',').map(tag => tag.trim()),
      };
      const auth = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('user-token')}`
        }
      }
      console.log('Sending new paste', payload);
      try {
        await HTTP.post('pastes', payload, auth);
        console.log('Success! Will redirect...');
        setTimeout( () => router.push({ path: '/' }), 2000);
      } catch (err) {
        if (err.response && err.response.status === 401) {
          console.log('Unauthorized POST - redirecting to login');
          setTimeout( () => router.push({ path: '/login' }), 2000);
        }
        console.log('Seems like POST failed! Try again?', err);
      }
    }
  }
}
</script>
