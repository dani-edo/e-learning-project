<template>
  <div>
    <Navbar />
    <div class="container">
      <div>
        <b-row>
          <b-col>
            <Card :title="cardTitle" :description="cardDescription" />
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import Card from '~/components/Card'

export default {
  components: {
    Navbar,
    Card
  },
  data() {
    return {
      cardTitle: 'How to make a baby',
      cardDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci excepturi libero autem aut, tempora facere nihil, obcaecati deserunt laboriosam, reprehenderit dolore aperiam ipsam quis consequuntur reiciendis fugit voluptate veritatis. Labore.'
    }
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
</style>
