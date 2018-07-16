<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-toggle target="menu" />
    <b-navbar-brand to="/">Index</b-navbar-brand>
    <b-collapse is-nav id="menu">
      <b-navbar-nav>
        <b-nav-item to="/hello">Hello</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Menu'
}
</script>
