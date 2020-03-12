<template>
  <div>
    <Navbar />
    <b-embed
      type="iframe"
      aspect="16by9"
      :src="'https://www.youtube.com/embed/' + $route.params.id"
      allowfullscreen
    ></b-embed>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar
  },
  middleware: 'auth',
  data() {
    return {
      cardTitle: 'How to make a coffee',
      cardDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci excepturi libero autem aut, tempora facere nihil, obcaecati deserunt laboriosam, reprehenderit dolore aperiam ipsam quis consequuntur reiciendis fugit voluptate veritatis. Labore.'
    }
  }
}
</script>

<style scoped>
.embed-responsive {
  width: 100vw;
  height: calc(100vh - 50px);
  max-width: unset;
  margin-top: 50px;
}
</style>
