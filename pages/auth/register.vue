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
          <b-form-group label="Re enter password" label-for="password">
            <b-input
              id="repassword"
              v-model="form.rePassword"
              type="password"
              placeholder="Enter password"
            ></b-input>
          </b-form-group>
          <b-button type="submit" variant="primary" class="mt-3"
            >Register</b-button
          >
        </b-form>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      form: {
        email: '',
        password: '',
        rePassword: ''
      }
    }
  },
  methods: {
    onSubmit() {
      return console.log(this.form.email, this.form.password)
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
  height: 400px;
  filter: drop-shadow(2px 4px 6px rgba(46, 46, 46, 0.5));
}
img {
  height: 100%;
  object-fit: cover;
}
</style>
