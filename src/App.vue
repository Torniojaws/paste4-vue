<template>
  <!-- Using the Holy Grail layout -->
  <b-container fluid>

    <!-- Menu row -->
    <b-row><main-menu /></b-row>

    <!-- Three columns for the contents -->
    <b-row>
      <b-col>Left</b-col>
      <b-col><router-view/></b-col>
      <b-col>Right</b-col>
    </b-row>

    <!-- And bottom row TODO: Replace with template -->
    <b-row><footer>Hi, I am footer</footer></b-row>

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
