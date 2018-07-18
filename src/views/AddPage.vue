<template>
  <div id="add">
    <h1>Add paste</h1>
    <b-form @submit="onSubmit">
      <b-form-group id="pasteGroup" label="Paste:">
        <b-form-textarea id="paste" v-model="form.text" placeholder="Add paste" :rows="10" />
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Add',
  data () {
    return {
      form: {
        text: ''
      }
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault();
      alert('Gonna submit paste:', JSON.stringify(this.form));
    }
  }
}
</script>
