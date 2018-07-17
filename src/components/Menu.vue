<template>
  <b-container fluid>
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-toggle target="menu" />
      <b-navbar-brand to="/">Pastes</b-navbar-brand>
      <b-collapse is-nav id="menu">
        <b-navbar-nav>
          <b-nav-item to="/add">Add new</b-nav-item>
          <b-nav-item to="/marked">Marked</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/login" right>Login</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<script>
export default {
  name: 'Menu'
}
</script>
