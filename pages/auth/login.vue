<template>
  <div class="container">
    <b-card
      overlay
      img-src="~/assets/login.jpg"
      img-alt="Card Image"
      text-variant="white"
      title="Login"
      class="login-container"
    >
      <b-card-text>
        <b-form @submit.prevent="onSubmit">
          <b-form-group label="Email address:" label-for="input-1">
            <b-form-input
              v-model="form.email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Password" label-for="password">
            <b-input
              id="password"
              v-model="form.password"
              type="password"
              aria-describedby="password-help-block"
              placeholder="Enter password"
            ></b-input>
          </b-form-group>
          <b-form-invalid-feedback class="d-block">
            {{ form.error }}
          </b-form-invalid-feedback>
          <b-button type="submit" variant="primary" class="mt-3"
            >Submit</b-button
          >
        </b-form>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: '',
        error: ''
      }
    }
  },
  created() {
    const loggedIn = localStorage.getItem('loggedIn')
    if (loggedIn) {
      this.$router.push('/dashboard')
    }
  },
  methods: {
    onSubmit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
          localStorage.setItem('loggedIn', true)
          this.$router.push('/dashboard')
        })
        .catch((error) => {
          this.form.error = error.message
        })
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.login-container {
  max-width: 600px;
  height: 350px;
  filter: drop-shadow(2px 4px 6px rgba(46, 46, 46, 0.5));
}
img {
  height: 100%;
  object-fit: cover;
}
</style>
