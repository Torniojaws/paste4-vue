<template>
  <div id="app">
    <p>Hello {{ who }}</p>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        who: 'world'
      }
    }
  }
</script>
