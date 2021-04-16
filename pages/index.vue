<template>
  <div class="container">
    <img src="../static/picachu.svg" alt="" />
    <h3 class="welcome-title">Welcome to Pokédex</h3>
    <div class="text">
      <p>
        The digital encyclopedia created by Professor Oak is an invaluable tool
        to Trainers in the Pokémon world.
      </p>
    </div>

    <Button :name="'get started'" :color="'#F22539'" @clicked="buttonClicked" />
  </div>
</template>

<script>
import Button from '@/components/utils/Button'
export default {
  components: {
    Button,
  },
  methods: {
    buttonClicked() {
      //TODO: poner ruta en configuración
      this.$router.push('/main')
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
.container {
  text-align: center;
}

.welcome-title {
  font-family: 'Lato';
  margin-top: 60px;
  margin-bottom: 30px;
  /* size: 26px; */
}
.text {
  margin-bottom: 50px;
}
</style>
