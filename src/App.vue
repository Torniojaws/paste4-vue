<template>
  <div id="app">
    <router-link to="/hello">Hello</router-link>
    <router-link to="/about">About</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  color: black;
}
</style>
