<template>
  <div id="hello">
    <h1>Hello</h1>
    <p>Hi there. {{ msg }}</p>
    <b-alert show dismissible>Bootstrappi</b-alert>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data () {
    return {
      msg: 'This is a test',
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
p {
  color: silver;
}
</style>
