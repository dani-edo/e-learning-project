<template>
  <div>
    <nuxt-link to="/">
      <b-card
        :img-src="imageLink"
        text-variant="white"
        img-alt="Card image"
        img-top
        :title="title"
        :class="cardLink ? 'card-link' : ''"
      >
        <b-card-text>
          {{ description }}
        </b-card-text>
      </b-card>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    cardLink: {
      type: Boolean,
      default: false
    },
    imageLink: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1555465910-31f7f20a184d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjkwNjAxfQ'
    }
  }
}
</script>

<style scoped>
.card-link {
  border: none;
}
.card-link:hover {
  box-shadow: 0px 5px 10px #00000075;
}
img {
  filter: brightness(0.3);
}
.card-body {
  background: #4aa3b8;
}
a:hover {
  text-decoration: none;
}
</style>
