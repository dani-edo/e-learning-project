<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        e-learning-project
      </h1>
      <div class="links">
        <a href="/auth/login" class="button--green">
          Login
        </a>
        <a href="/auth/register" class="button--green">
          Register
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
}
a:hover {
  text-decoration: none;
}
@media (max-width: 425px) {
  .title {
    font-size: 3.5rem;
  }
  .NuxtLogo {
    width: 11rem;
  }
}
</style>
