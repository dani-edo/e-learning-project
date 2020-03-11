<template>
  <div class="container">
    <b-card
      overlay
      img-src="https://picsum.photos/900/250/?image=3"
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
          <!-- <b-form-text>
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </b-form-text> -->
          <b-button type="submit" variant="primary" class="mt-3"
            >Submit</b-button
          >
        </b-form>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      if (this.form.email === 'dani@edo.com') {
        this.$router.push('/dashboard')
      }
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
  max-width: 600px;
  height: 300px;
  filter: drop-shadow(2px 4px 6px rgba(46, 46, 46, 0.5));
}
img {
  height: 100%;
  object-fit: cover;
}
</style>
