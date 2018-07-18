<template>
  <div id="marked">
    <h1>Marked pastes</h1>
    <p>Will show all {{ msg }} pastes</p>
  </div>
</template>

<script>
export default {
  name: 'Marked',
  data () {
    return {
      msg: 'This is a test',
      // TODO: Call the /pastes?marked=all endpoint
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
