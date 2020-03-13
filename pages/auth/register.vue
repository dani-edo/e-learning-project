<template>
  <div class="container">
    <b-card
      overlay
      img-src="https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjkwNjAxfQ"
      img-alt="Card Image"
      text-variant="white"
      title="Register"
      class="login-container"
    >
      <b-card-text>
        <b-form @submit.prevent="onSubmit">
          <b-form-group label="Email address:" label-for="email">
            <b-form-input
              id="email"
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
              placeholder="Enter password"
            ></b-input>
          </b-form-group>
          <b-form-invalid-feedback class="d-block">
            {{ form.error }}
          </b-form-invalid-feedback>
          <b-button type="submit" variant="primary" class="mt-3"
            >Register</b-button
          >
        </b-form>
        <b-form-text class="mt-3">
          Already have an account?
          <br />
          Login here. <nuxt-link to="/auth/login"> here</nuxt-link>.
        </b-form-text>
      </b-card-text>
    </b-card>
    <b-modal
      ref="success-modal"
      v-model="shownModal"
      hide-footer
      centered
      hide-header
    >
      <div class="d-block text-center">
        <h3>Success!</h3>
        <p>Check your email address</p>
      </div>
      <b-button class="mt-3" variant="outline-info" block @click="hideModal"
        >OK</b-button
      >
    </b-modal>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'Register',
  data() {
    return {
      form: {
        email: '',
        password: '',
        error: ''
      },
      shownModal: false
    }
  },
  watch: {
    shownModal(value) {
      if (!value) {
        this.$router.push('/')
      }
    }
  },
  middleware: 'loggedInCheck',
  methods: {
    onSubmit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then((user) => {
          firebase
            .auth()
            .currentUser.sendEmailVerification()
            .then(function() {
              console.log('email verifivation sent')
            })
            .catch(function(error) {
              console.log(error)
            })
          firebase.auth().signOut()
          this.showModal()
        })
        .catch((error) => {
          this.form.error = error.message
        })
    },
    showModal() {
      this.$refs['success-modal'].show()
    },
    hideModal() {
      this.$refs['success-modal'].hide()
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
  color: #350f0e !important;
  max-width: 600px;
  height: 350px;
  filter: drop-shadow(2px 4px 6px rgba(46, 46, 46, 0.5));
}
img {
  height: 100%;
  object-fit: cover;
}
</style>
