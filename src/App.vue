<template>
  <b-container fluid>
    <b-row>
      <main-menu />
    </b-row>
    <b-row>
      <b-col>Left</b-col>
      <b-col>
        <!-- All component contents will be rendered here -->
        <router-view/>
      </b-col>
      <b-col>Right</b-col>
    </b-row>
    <b-row>
      <footer>Hi, I am footer</footer>
    </b-row>
  </b-container>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

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
