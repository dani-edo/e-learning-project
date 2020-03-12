<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/dashboard">Home</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <!-- Right aligned nav items -->
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-navbar-brand href="#">Profile</b-navbar-brand>
        <b-navbar-brand href="/">Logout</b-navbar-brand>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style>
.navbar {
  position: fixed;
  width: 100%;
  z-index: 1;
  top: 0;
}
</style>
